#!/usr/bin/env python3
"""Render Brad Guillen's resume PDF from resume_data.py.

Usage:
    python3 scripts/generate_resume.py
    python3 scripts/generate_resume.py -o exports/preview.pdf

Edit wording in scripts/resume_data.py — this file is rendering only.
"""
from __future__ import annotations

import argparse
import os
import sys

from reportlab.lib.enums import TA_CENTER, TA_RIGHT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import HRFlowable, Paragraph, SimpleDocTemplate, Table, TableStyle

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import resume_data as D
import resume_pdf_theme as T

LINK_ICON = T.icon_external_link()


def _styles() -> dict[str, ParagraphStyle]:
    P = ParagraphStyle
    return {
        "name": P(
            "name",
            fontName=T.FONT["display"],
            fontSize=20,
            leading=23,
            textColor=T.TEXT_DARK,
            alignment=TA_CENTER,
            spaceAfter=2,
        ),
        "title": P(
            "title",
            fontName=T.FONT["body_bold"],
            fontSize=10,
            leading=13,
            textColor=T.ACCENT,
            alignment=TA_CENTER,
            spaceAfter=4,
        ),
        "contact": P(
            "contact",
            fontName=T.FONT["contact"],
            fontSize=8.5,
            leading=11,
            textColor=T.MUTED,
            alignment=TA_CENTER,
            spaceAfter=2,
        ),
        "sec": P(
            "sec",
            fontName=T.FONT["display"],
            fontSize=11,
            leading=13,
            textColor=T.TEXT_DARK,
            spaceBefore=6,
            spaceAfter=1,
        ),
        "jt": P(
            "jt",
            fontName=T.FONT["body_bold"],
            fontSize=9.2,
            leading=11.5,
            textColor=T.TEXT_DARK,
        ),
        "date": P(
            "date",
            fontName=T.FONT["body"],
            fontSize=8.2,
            leading=11,
            textColor=T.MUTED,
            alignment=TA_RIGHT,
        ),
        "project_link": P(
            "project_link",
            fontName=T.FONT["body_italic"],
            fontSize=8.0,
            leading=11,
            textColor=T.LINK,
            alignment=TA_RIGHT,
        ),
        "ctx": P(
            "ctx",
            fontName=T.FONT["body_italic"],
            fontSize=8.4,
            leading=11,
            textColor=T.MUTED,
            spaceAfter=1.5,
        ),
        "body": P(
            "body",
            fontName=T.FONT["body"],
            fontSize=9.0,
            leading=12.2,
            textColor=T.BODY,
        ),
        "bullet": P(
            "bullet",
            fontName=T.FONT["body"],
            fontSize=8.9,
            leading=11.8,
            textColor=T.BODY,
            leftIndent=11,
            bulletIndent=1,
            spaceAfter=1.8,
        ),
        "skill": P(
            "skill",
            fontName=T.FONT["body"],
            fontSize=8.8,
            leading=12.0,
            textColor=T.BODY,
            spaceAfter=1,
        ),
    }


def _section(title: str, st: dict[str, ParagraphStyle]) -> list:
    return [
        Paragraph(title, st["sec"]),
        HRFlowable(
            width="100%",
            thickness=1,
            color=T.TEXT_DARK,
            spaceBefore=1,
            spaceAfter=2,
            lineCap="round",
        ),
    ]


def _job_header(
    title_html: str,
    date_html: str,
    st: dict[str, ParagraphStyle],
    *,
    date_style: str = "date",
) -> Table:
    table = Table(
        [[Paragraph(title_html, st["jt"]), Paragraph(date_html, st[date_style])]],
        colWidths=[4.85 * inch, 2.45 * inch],
    )
    table.setStyle(
        TableStyle(
            [
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 1),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ]
        )
    )
    return table


def _bullet(text: str, st: dict[str, ParagraphStyle]) -> Paragraph:
    return Paragraph(text, st["bullet"], bulletText="•")


def build_story() -> list:
    T.register_template_fonts()
    st = _styles()
    icons = T._draw_contact_icons(T.ACCENT_RGB)
    c = D.CONTACT
    accent = T.ACCENT_HEX
    link = T.ACCENT_HEX
    muted = "#999999"
    sep = f'<font color="{muted}"> &nbsp;|&nbsp; </font>'

    story: list = [
        Paragraph(c["name"], st["name"]),
        Paragraph(c["title"], st["title"]),
        Paragraph(
            f'{T.img_tag(icons["pin"])} {c["location"]}{sep}'
            f'{T.img_tag(icons["phone"])} <a href="tel:{c["phone_tel"]}" color="{accent}">{c["phone_display"]}</a>{sep}'
            f'{T.img_tag(icons["email"])} <a href="mailto:{c["email"]}" color="{muted}">{c["email"]}</a>{sep}'
            f'<a href="{c["linkedin"]}" color="{muted}">{T.img_tag(icons["linkedin"])} LinkedIn</a>{sep}'
            f'<a href="{c["github"]}" color="{muted}">{T.img_tag(icons["github"])} GitHub</a>{sep}'
            f'<a href="{c["website"]}" color="{muted}">{T.img_tag(icons["globe"])} {c["website_display"]}</a>',
            st["contact"],
        ),
        HRFlowable(
            width="100%",
            thickness=1.2,
            color=T.TEXT_DARK,
            spaceBefore=4,
            spaceAfter=2,
            lineCap="round",
        ),
    ]

    story += _section("PROFESSIONAL SUMMARY", st)
    story.append(Paragraph(D.SUMMARY, st["body"]))

    story += _section("TECHNICAL PHILOSOPHY", st)
    story.append(Paragraph(D.PHILOSOPHY, st["body"]))

    story += _section("SELECTED PROJECTS", st)
    pr = D.PROJECT
    story.append(
        _job_header(
            f'<font color="{accent}"><b>{pr["name"]}</b></font> &mdash; {pr["subtitle"]}',
            T.linked_url(pr["url"], pr["url_display"], icon_path=LINK_ICON, color=link, icon_size=7),
            st,
            date_style="project_link",
        )
    )
    story.append(Paragraph(pr["tech"], st["ctx"]))
    for bullet in pr["bullets"]:
        story.append(_bullet(bullet, st))

    story += _section("TECHNICAL SKILLS", st)
    for label, value in D.SKILLS:
        story.append(
            Paragraph(
                f'<font color="{T.ACCENT_HEX}"><b>{label}:</b></font> {value}',
                st["skill"],
            )
        )

    story += _section("PROFESSIONAL EXPERIENCE", st)
    for role in D.EXPERIENCE:
        story.append(_job_header(role["title"], role["date"], st))
        if role.get("ctx"):
            story.append(Paragraph(role["ctx"].format(scale=D.KW_USER_SCALE), st["ctx"]))
        for bullet in role["bullets"]:
            story.append(_bullet(bullet, st))

    story += _section("EDUCATION &amp; LANGUAGES", st)
    for line in D.EDUCATION:
        story.append(Paragraph(line, st["skill"]))

    return story


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("-o", "--out", default="public/Brad Guillen - Senior Software Engineer.pdf")
    args = ap.parse_args()
    os.makedirs(os.path.dirname(args.out) or ".", exist_ok=True)

    doc = SimpleDocTemplate(
        args.out,
        pagesize=letter,
        topMargin=0.5 * inch,
        bottomMargin=0.5 * inch,
        leftMargin=0.6 * inch,
        rightMargin=0.6 * inch,
        title="Brad Guillen Garcia - Senior Software Engineer",
        author="Brad Guillen Garcia",
    )
    doc.build(build_story())
    print("WROTE", args.out)


if __name__ == "__main__":
    main()
