#!/usr/bin/env python3
import html
import json
import re
import urllib.parse
import urllib.request
import zipfile
from html.parser import HTMLParser
from pathlib import Path
from xml.sax.saxutils import escape


BASE = "https://vialterna.com"
OUT = Path("vialterna_full_extract.docx")


class TextExtractor(HTMLParser):
    BLOCK_TAGS = {
        "p", "div", "section", "article", "header", "footer", "br", "li",
        "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "tr"
    }

    SKIP_TAGS = {"script", "style", "noscript", "svg"}

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.parts = []
        self.skip_depth = 0

    def handle_starttag(self, tag, attrs):
        if tag in self.SKIP_TAGS:
            self.skip_depth += 1
            return
        if self.skip_depth:
            return
        if tag == "li":
            self.parts.append("\n- ")
        elif tag in self.BLOCK_TAGS:
            self.parts.append("\n")

    def handle_endtag(self, tag):
        if tag in self.SKIP_TAGS and self.skip_depth:
            self.skip_depth -= 1
            return
        if self.skip_depth:
            return
        if tag in self.BLOCK_TAGS:
            self.parts.append("\n")

    def handle_data(self, data):
        if not self.skip_depth:
            self.parts.append(data)

    def text(self):
        raw = html.unescape("".join(self.parts))
        raw = raw.replace("\xa0", " ")
        raw = re.sub(r"[ \t\r\f\v]+", " ", raw)
        raw = re.sub(r" *\n *", "\n", raw)
        raw = re.sub(r"\n{3,}", "\n\n", raw)
        lines = [line.strip() for line in raw.splitlines()]
        lines = [line for line in lines if line]
        return "\n".join(lines)


def fetch_json(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=30) as resp:
        return json.loads(resp.read().decode("utf-8"))


def fetch_text(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=90) as resp:
        return resp.read().decode("utf-8", errors="replace")


def sitemap_urls(name):
    xml = fetch_text(f"{BASE}/{name}")
    return re.findall(r"<loc>(.*?)</loc>", xml)


def fetch_all(kind):
    out = []
    page = 1
    while True:
        query = urllib.parse.urlencode({
            "per_page": 100,
            "page": page,
            "_fields": "id,link,slug,title,content,excerpt,modified,date",
        })
        url = f"{BASE}/wp-json/wp/v2/{kind}?{query}"
        try:
            rows = fetch_json(url)
        except urllib.error.HTTPError as exc:
            if exc.code == 400:
                break
            raise
        if not rows:
            break
        out.extend(rows)
        if len(rows) < 100:
            break
        page += 1
    return out


def clean_text(rendered):
    parser = TextExtractor()
    parser.feed(rendered or "")
    return parser.text()


def para_xml(text, style=None):
    style_xml = f'<w:pPr><w:pStyle w:val="{style}"/></w:pPr>' if style else ""
    runs = []
    for chunk in text.split("\n"):
        if runs:
            runs.append("<w:br/>")
        runs.append(f"<w:t>{escape(chunk)}</w:t>")
    return f"<w:p>{style_xml}<w:r>{''.join(runs)}</w:r></w:p>"


def docx_xml(items):
    body = []
    body.append(para_xml("Vialterna - Full Website Text Extract", "Title"))
    body.append(para_xml(f"Source: {BASE}"))
    body.append(para_xml(f"Items extracted: {len(items)}"))

    for i, item in enumerate(items, 1):
        title = html.unescape(item["title"]["rendered"] or item["slug"])
        text = clean_text(item["content"]["rendered"])
        excerpt = clean_text(item.get("excerpt", {}).get("rendered", ""))
        body.append(para_xml(f"{i}. {title}", "Heading1"))
        body.append(para_xml(f"Type: {item['_type']}"))
        body.append(para_xml(f"URL: {item['link']}"))
        body.append(para_xml(f"Modified: {item.get('modified', '')}"))
        if excerpt:
            body.append(para_xml("Excerpt", "Heading2"))
            body.extend(para_xml(p) for p in excerpt.split("\n\n"))
        body.append(para_xml("Content", "Heading2"))
        if text:
            body.extend(para_xml(p) for p in text.split("\n\n"))
        else:
            body.append(para_xml("[No visible text found]"))

    body.append('<w:sectPr><w:pgSz w:w="12240" w:h="15840"/><w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440"/></w:sectPr>')
    return """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
<w:body>
%s
</w:body>
</w:document>""" % "\n".join(body)


def write_docx(items):
    content_types = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
<Default Extension="xml" ContentType="application/xml"/>
<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
<Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
</Types>"""
    rels = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>"""
    doc_rels = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"/>"""
    styles = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
<w:style w:type="paragraph" w:styleId="Title"><w:name w:val="Title"/><w:rPr><w:b/><w:sz w:val="36"/></w:rPr></w:style>
<w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="heading 1"/><w:rPr><w:b/><w:sz w:val="28"/></w:rPr></w:style>
<w:style w:type="paragraph" w:styleId="Heading2"><w:name w:val="heading 2"/><w:rPr><w:b/><w:sz w:val="24"/></w:rPr></w:style>
</w:styles>"""
    with zipfile.ZipFile(OUT, "w", zipfile.ZIP_DEFLATED) as zf:
        zf.writestr("[Content_Types].xml", content_types)
        zf.writestr("_rels/.rels", rels)
        zf.writestr("word/_rels/document.xml.rels", doc_rels)
        zf.writestr("word/styles.xml", styles)
        zf.writestr("word/document.xml", docx_xml(items))


def main():
    items = []
    for kind, label in (("pages", "page"), ("posts", "post")):
        for row in fetch_all(kind):
            row["_type"] = label
            items.append(row)
    seen = set()
    deduped = []
    for item in items:
        if item["link"] not in seen:
            seen.add(item["link"])
            deduped.append(item)

    for url in sitemap_urls("elementor-hf-sitemap.xml"):
        if url in seen:
            continue
        try:
            rendered = fetch_text(url)
        except Exception as exc:
            rendered = f"[Unable to fetch rendered template: {exc}]"
        title_match = re.search(r"<title>(.*?)</title>", rendered, re.I | re.S)
        title = clean_text(title_match.group(1)) if title_match else url.rstrip("/").split("/")[-1]
        deduped.append({
            "_type": "elementor-hf",
            "link": url,
            "slug": url.rstrip("/").split("/")[-1],
            "title": {"rendered": title},
            "content": {"rendered": rendered},
            "excerpt": {"rendered": ""},
            "modified": "",
        })
        seen.add(url)

    deduped.sort(key=lambda x: (x["_type"], x["link"]))
    write_docx(deduped)
    print(f"Wrote {OUT.resolve()} with {len(deduped)} items")


if __name__ == "__main__":
    main()
