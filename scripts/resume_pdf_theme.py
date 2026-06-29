"""Shared fonts, colors, and icons for resume PDF generators."""
from __future__ import annotations

import os
import tempfile
import atexit
import shutil

from PIL import Image, ImageDraw, ImageFont
from reportlab.lib import colors
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

FONT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "fonts")

# Extracted from the Boot.dev / self-taught resume template (Jane Doe sample).
# Accent swapped from template red (#e91d63) to blue for Brad's palette.
TEXT_DARK = colors.HexColor("#424242")       # Oswald — name, section titles
MUTED = colors.HexColor("#999999")           # Roboto Condensed — contact
BODY = colors.HexColor("#666666")            # Source Code Pro — body, skills
ACCENT = colors.HexColor("#1E4976")          # darker blue — titles, highlights, skill labels
LINK = colors.HexColor("#1E4976")            # URLs (same family)
ACCENT_RGB = (30, 73, 118)
LINK_RGB = (30, 73, 118)
ACCENT_HEX = "#1E4976"

# Legacy v1 palette (unchanged)
NAVY = colors.HexColor("#1F3864")
BLUE = colors.HexColor("#2E5C8A")
GRAY = colors.HexColor("#555555")
NAVY_RGB = (31, 56, 100)

FONT = {
    "display": "Oswald",
    "contact": "RobotoCondensed",
    "body": "SourceCodePro",
    "body_bold": "SourceCodePro-Bold",
    "body_italic": "SourceCodePro-Italic",
}

ICONDIR = tempfile.mkdtemp(prefix="resume_icons_")
atexit.register(shutil.rmtree, ICONDIR, ignore_errors=True)
S = 64


def register_template_fonts() -> None:
    """Register full TTF files (not PDF subsets) plus bold/italic family mapping."""
    files = {
        "Oswald": "Oswald-Regular.ttf",
        "RobotoCondensed": "RobotoCondensed-Regular.ttf",
        "SourceCodePro": "SourceCodePro-Regular.ttf",
        "SourceCodePro-Bold": "SourceCodePro-Bold.ttf",
        "SourceCodePro-Italic": "SourceCodePro-Italic.ttf",
    }
    for name, filename in files.items():
        path = os.path.join(FONT_DIR, filename)
        if not os.path.exists(path):
            raise FileNotFoundError(f"Missing resume font: {path}")
        if name not in pdfmetrics.getRegisteredFontNames():
            pdfmetrics.registerFont(TTFont(name, path))

    pdfmetrics.registerFontFamily(
        "SourceCodePro",
        normal="SourceCodePro",
        bold="SourceCodePro-Bold",
        italic="SourceCodePro-Italic",
        boldItalic="SourceCodePro-Bold",
    )


def _save(img: Image.Image, name: str) -> str:
    path = os.path.join(ICONDIR, name + ".png")
    img.save(path)
    return path


def _canvas(size: int = S) -> Image.Image:
    return Image.new("RGBA", (size, size), (0, 0, 0, 0))


def _pill_font(size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    for path in (
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
        os.path.join(FONT_DIR, "SourceCodePro-Bold.ttf"),
    ):
        if os.path.exists(path):
            try:
                return ImageFont.truetype(path, size)
            except OSError:
                pass
    return ImageFont.load_default()


def _draw_contact_icons(rgb: tuple[int, int, int]) -> dict[str, str]:
    def email() -> str:
        img = _canvas()
        d = ImageDraw.Draw(img)
        w = 5
        d.rounded_rectangle([8, 16, 56, 48], radius=5, outline=rgb, width=w)
        d.line([10, 19, 32, 36], fill=rgb, width=w)
        d.line([54, 19, 32, 36], fill=rgb, width=w)
        return _save(img, "email")

    def phone() -> str:
        img = _canvas()
        d = ImageDraw.Draw(img)
        d.rounded_rectangle([20, 6, 44, 58], radius=7, outline=rgb, width=5)
        d.ellipse([29, 48, 35, 54], fill=rgb)
        return _save(img, "phone")

    def pin() -> str:
        img = _canvas()
        d = ImageDraw.Draw(img)
        d.ellipse([18, 8, 46, 36], fill=rgb)
        d.polygon([(22, 30), (42, 30), (32, 56)], fill=rgb)
        d.ellipse([27, 16, 37, 26], fill=(255, 255, 255, 255))
        return _save(img, "pin")

    def globe() -> str:
        img = _canvas()
        d = ImageDraw.Draw(img)
        w = 4
        d.ellipse([10, 10, 54, 54], outline=rgb, width=w)
        d.ellipse([24, 10, 40, 54], outline=rgb, width=w)
        d.line([10, 32, 54, 32], fill=rgb, width=w)
        return _save(img, "globe")

    def badge(letters: str, name: str) -> str:
        img = _canvas()
        d = ImageDraw.Draw(img)
        d.rounded_rectangle([4, 4, 60, 60], radius=12, fill=rgb)
        size = 34 if len(letters) <= 2 else 26
        fnt = _pill_font(size)
        bb = d.textbbox((0, 0), letters, font=fnt)
        d.text(
            ((S - (bb[2] - bb[0])) / 2 - bb[0], (S - (bb[3] - bb[1])) / 2 - bb[1]),
            letters,
            font=fnt,
            fill="white",
        )
        return _save(img, name)

    return {
        "pin": pin(),
        "phone": phone(),
        "email": email(),
        "globe": globe(),
        "linkedin": badge("in", "linkedin"),
        "github": badge("GH", "github"),
    }


def icon_external_link(rgb: tuple[int, int, int] = LINK_RGB) -> str:
    """Small external-link glyph — thin lines, reads clearly at ~7pt in PDF."""
    size = 40
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    w = 2
    # Bottom-left box
    d.rounded_rectangle([5, 17, 21, 33], radius=2, outline=rgb, width=w)
    # Arrow to top-right
    d.line([19, 19, 33, 5], fill=rgb, width=w)
    d.line([33, 5, 33, 13], fill=rgb, width=w)
    d.line([33, 5, 25, 5], fill=rgb, width=w)
    return _save(img, "external_link")


def img_tag(path: str, size: float = 9.5) -> str:
    return f'<img src="{path}" width="{size}" height="{size}" valign="-2"/>'


def linked_url(
    url: str,
    label: str,
    *,
    icon_path: str | None = None,
    color: str = "#1E4976",
    italic: bool = True,
    icon_size: float = 7,
) -> str:
    icon = img_tag(icon_path, icon_size) if icon_path else ""
    spacer = " " if icon else ""
    inner = f"{icon}{spacer}{label}"
    if italic:
        inner = f"<i>{inner}</i>"
    return f'<a href="{url}" color="{color}">{inner}</a>'
