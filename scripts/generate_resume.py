#!/usr/bin/env python3
"""Render Brad Guillen's resume PDF from resume_data.py (the content source).

Usage:
    python3 scripts/generate_resume.py                 # -> public/Brad Guillen - Senior Software Engineer.pdf
    python3 scripts/generate_resume.py -o some.pdf     # custom output path

This file is RENDERING ONLY — edit wording in scripts/resume_data.py.
"""
import argparse, atexit, os, shutil, tempfile, sys
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_RIGHT
from reportlab.platypus import SimpleDocTemplate, Paragraph, Table, TableStyle, HRFlowable
from PIL import Image, ImageDraw, ImageFont

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import resume_data as D

NAVY = colors.HexColor("#1F3864"); BLUE = colors.HexColor("#2E5C8A")
GRAY = colors.HexColor("#555555"); RULE = NAVY; NAVY_RGB = (31, 56, 100); S = 64
ICONDIR = tempfile.mkdtemp(prefix="resume_icons_")
atexit.register(shutil.rmtree, ICONDIR, ignore_errors=True)  # clean up temp icons on exit

# ---- icon drawing (clickable contact links) ----
def _save(img, n): p = os.path.join(ICONDIR, n + ".png"); img.save(p); return p
def _c(): return Image.new("RGBA", (S, S), (0, 0, 0, 0))
def icon_email():
    img = _c(); d = ImageDraw.Draw(img); w = 5
    d.rounded_rectangle([8, 16, 56, 48], radius=5, outline=NAVY_RGB, width=w)
    d.line([10, 19, 32, 36], fill=NAVY_RGB, width=w); d.line([54, 19, 32, 36], fill=NAVY_RGB, width=w)
    return _save(img, "email")
def icon_phone():
    img = _c(); d = ImageDraw.Draw(img)
    d.rounded_rectangle([20, 6, 44, 58], radius=7, outline=NAVY_RGB, width=5)
    d.ellipse([29, 48, 35, 54], fill=NAVY_RGB); return _save(img, "phone")
def icon_pin():
    img = _c(); d = ImageDraw.Draw(img)
    d.ellipse([18, 8, 46, 36], fill=NAVY_RGB); d.polygon([(22, 30), (42, 30), (32, 56)], fill=NAVY_RGB)
    d.ellipse([27, 16, 37, 26], fill=(255, 255, 255, 255)); return _save(img, "pin")
def icon_globe():
    img = _c(); d = ImageDraw.Draw(img); w = 4
    d.ellipse([10, 10, 54, 54], outline=NAVY_RGB, width=w); d.ellipse([24, 10, 40, 54], outline=NAVY_RGB, width=w)
    d.line([10, 32, 54, 32], fill=NAVY_RGB, width=w)
    d.line([14, 20, 50, 20], fill=NAVY_RGB, width=3); d.line([14, 44, 50, 44], fill=NAVY_RGB, width=3)
    return _save(img, "globe")
def _font(sz):
    for f in ["/System/Library/Fonts/Supplemental/Arial Bold.ttf", "/System/Library/Fonts/Helvetica.ttc"]:
        if os.path.exists(f):
            try: return ImageFont.truetype(f, sz)
            except Exception: pass
    return ImageFont.load_default()
def badge(letters, n):
    img = _c(); d = ImageDraw.Draw(img)
    d.rounded_rectangle([4, 4, 60, 60], radius=12, fill=NAVY_RGB)
    fnt = _font(34 if len(letters) <= 2 else 26); bb = d.textbbox((0, 0), letters, font=fnt)
    d.text(((S - (bb[2] - bb[0])) / 2 - bb[0], (S - (bb[3] - bb[1])) / 2 - bb[1]), letters, font=fnt, fill="white")
    return _save(img, n)

IC = dict(pin=icon_pin(), phone=icon_phone(), email=icon_email(), globe=icon_globe(),
          linkedin=badge("in", "linkedin"), github=badge("GH", "github"))


def build():
    P = ParagraphStyle
    st = {
        'name': P("name", fontName="Helvetica-Bold", fontSize=21, leading=24, textColor=NAVY, alignment=TA_CENTER, spaceAfter=1),
        'title': P("title", fontName="Helvetica-Bold", fontSize=11.5, leading=14, textColor=BLUE, alignment=TA_CENTER, spaceAfter=4),
        'contact': P("contact", fontName="Helvetica", fontSize=8.6, leading=12, textColor=GRAY, alignment=TA_CENTER, spaceAfter=2),
        'sec': P("sec", fontName="Helvetica-Bold", fontSize=10.5, leading=12, textColor=NAVY, spaceBefore=8, spaceAfter=1),
        'jt': P("jt", fontName="Helvetica-Bold", fontSize=10, leading=12, textColor=colors.black),
        'date': P("date", fontName="Helvetica", fontSize=8.8, leading=12, textColor=GRAY, alignment=TA_RIGHT),
        'ctx': P("ctx", fontName="Helvetica-Oblique", fontSize=8.8, leading=12.0, textColor=GRAY, spaceAfter=1.5),
        'body': P("body", fontName="Helvetica", fontSize=9.6, leading=13.2, textColor=colors.black),
        'bullet': P("bullet", fontName="Helvetica", fontSize=9.5, leading=12.8, textColor=colors.black, leftIndent=11, bulletIndent=1, spaceAfter=3.0),
        'skill': P("skill", fontName="Helvetica", fontSize=9.2, leading=13.0, textColor=colors.black, spaceAfter=0.5),
    }

    def section(t): return [Paragraph(t, st['sec']), HRFlowable(width="100%", thickness=1, color=RULE, spaceBefore=1, spaceAfter=2, lineCap="round")]
    def img(p): return f'<img src="{p}" width="9.5" height="9.5" valign="middle"/>'
    def jobhdr(title, date):
        tbl = Table([[Paragraph(title, st['jt']), Paragraph(date, st['date'])]], colWidths=[4.85 * inch, 2.45 * inch])
        tbl.setStyle(TableStyle([("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                                 ("TOPPADDING", (0, 0), (-1, -1), 1), ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
                                 ("VALIGN", (0, 0), (-1, -1), "MIDDLE")]))
        return tbl
    def bul(t): return Paragraph(t, st['bullet'], bulletText="•")

    c = D.CONTACT
    s = [Paragraph(c["name"], st['name']), Paragraph(c["title"], st['title'])]
    sep = '<font color="#BBBBBB"> &nbsp;|&nbsp; </font>'
    s.append(Paragraph(
        f'{img(IC["pin"])} {c["location"]}' + sep +
        f'{img(IC["phone"])} <a href="tel:{c["phone_tel"]}" color="#555555">{c["phone_display"]}</a>' + sep +
        f'{img(IC["email"])} <a href="mailto:{c["email"]}" color="#555555">{c["email"]}</a>' + sep +
        f'<a href="{c["linkedin"]}" color="#2E5C8A">{img(IC["linkedin"])} LinkedIn</a>' + sep +
        f'<a href="{c["github"]}" color="#2E5C8A">{img(IC["github"])} GitHub</a>' + sep +
        f'<a href="{c["website"]}" color="#2E5C8A">{img(IC["globe"])} {c["website_display"]}</a>', st['contact']))
    s.append(HRFlowable(width="100%", thickness=1.2, color=RULE, spaceBefore=4, spaceAfter=2))

    s += section("PROFESSIONAL SUMMARY")
    s.append(Paragraph(D.SUMMARY, st['body']))

    s += section("TECHNICAL PHILOSOPHY")
    s.append(Paragraph(D.PHILOSOPHY, st['body']))

    s += section("SELECTED PROJECTS")
    pr = D.PROJECT
    s.append(jobhdr(f'<a href="{pr["url"]}" color="#1F3864">{pr["name"]}</a> &mdash; {pr["subtitle"]}',
                    f'<a href="{pr["url"]}" color="#2E5C8A">{pr["url_display"]}</a>'))
    s.append(Paragraph(pr["tech"], st['ctx']))
    for b in pr["bullets"]:
        s.append(bul(b))

    s += section("TECHNICAL SKILLS")
    for k, v in D.SKILLS:
        s.append(Paragraph(f'<b>{k}:</b> {v}', st['skill']))

    s += section("PROFESSIONAL EXPERIENCE")
    for role in D.EXPERIENCE:
        s.append(jobhdr(role["title"], role["date"]))
        if role.get("ctx"):
            s.append(Paragraph(role["ctx"].format(scale=D.KW_USER_SCALE), st['ctx']))
        for b in role["bullets"]:
            s.append(bul(b))

    s += section("EDUCATION &amp; LANGUAGES")
    for line in D.EDUCATION:
        s.append(Paragraph(line, st['skill']))
    return s


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("-o", "--out", default="public/Brad Guillen - Senior Software Engineer.pdf")
    a = ap.parse_args()
    os.makedirs(os.path.dirname(a.out) or ".", exist_ok=True)
    doc = SimpleDocTemplate(a.out, pagesize=letter, topMargin=0.5 * inch, bottomMargin=0.5 * inch,
                            leftMargin=0.6 * inch, rightMargin=0.6 * inch,
                            title="Brad Guillen Garcia - Senior Software Engineer", author="Brad Guillen Garcia")
    doc.build(build())
    print("WROTE", a.out)


if __name__ == "__main__":
    main()
