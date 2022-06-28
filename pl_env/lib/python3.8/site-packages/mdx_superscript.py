# -*- coding: utf-8 -*-
"""Markdown Superscript Extension

Extends the Python-Markdown library to support superscript text.

Given the text:
    2^10^ is 1024.
Will output:
    2<sup>10</sup> is 1024.

:website: https://github.com/jambonrose/markdown_superscript_extension
:copyright: Copyright 2014-2018 Andrew Pinkham
:license: Simplified BSD, see LICENSE for details.
"""

from __future__ import unicode_literals

from markdown import Extension
from markdown.inlinepatterns import SimpleTagPattern

# match ^, at least one character that is not ^, and ^ again
SUPERSCRIPT_RE = r"(\^)([^\^]+)\2"


def makeExtension(*args, **kwargs):  # noqa: N802
    """Inform Markdown of the existence of the extension."""
    return SuperscriptExtension(*args, **kwargs)


class SuperscriptExtension(Extension):
    """Extension: text between ^ characters will be superscripted."""

    def extendMarkdown(self, md, md_globals):  # noqa: N802
        """Insert 'superscript' pattern before 'not_strong' pattern."""
        md.inlinePatterns.add(
            "superscript",
            SimpleTagPattern(SUPERSCRIPT_RE, "sup"),
            "<not_strong",
        )
