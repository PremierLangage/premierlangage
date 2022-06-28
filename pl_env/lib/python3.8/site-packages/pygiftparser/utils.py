#!/usr/bin/python
# -*- coding: utf-8 -*-
import logging
import re
import markdown
from pygiftparser import i18n
import sys

_ = i18n.language.gettext

logger = logging.getLogger(__name__)

MARKDOWN_EXT = ['markdown.extensions.extra',
                'markdown.extensions.nl2br',
                'mdx_superscript']

# Url and blank lines (moodle format)
reURL = re.compile(r"(http://[^ ]+)", re.M)
reNewLine = re.compile(r'\n\n', re.M)

# WARNING MESSAGES
INVALID_FORMAT_QUESTION = "Vous avez saisi un quizz invalide"
DEFAULT_TITLE = "Vous n'avez pas précisé de titre de question : question par default"

# Sub regular expressions
ANYCHAR = r'([^\\=~#]|(\\.))'
OPTIONALFEEDBACK = '(#(?P<feedback>' + ANYCHAR+'*))?'
OPTIONALFEEDBACK2 = '(#(?P<feedback2>'+ANYCHAR+'*))?'
GENERALFEEDBACK = '(####(\[(?P<gf_markup>.*?)\])*(?P<generalfeedback>.*))?'
NUMERIC = '[\d]+(\.[\d]+)?'


# Regular Expressions
reSepQuestions = re.compile(r'^\s*$')
reComment = re.compile(r'^\s*//.*$')
reCategory = re.compile(r'^\$CATEGORY: (?P<cat>[/\w$]*)')

# Special chars
reSpecialChar = re.compile(r'\\(?P<char>[#=~:{}])')


# Heading
# Title is supposed to be at the begining of a line
reTitle = re.compile(r'^\s*::(?P<title>.*?)::(?P<text>.*)$', re.M+re.S)
reMarkup = re.compile(r'^\s*\[(?P<markup>.*?)\](?P<text>.*)', re.M+re.S)
reAnswer = re.compile(r'^(?P<head>.*[^\\]){\s*(?P<answer>.*?[^\\]?)'+GENERALFEEDBACK+'}(?P<tail>.*)',
                      re.M+re.S)

# numeric answers
reAnswerNumeric = re.compile(r'^#[^#]')
reAnswerNumericValue = re.compile(r'\s*(?P<value>'+NUMERIC+')(:(?P<tolerance>'+NUMERIC+'))?'+OPTIONALFEEDBACK)
reAnswerNumericInterval = re.compile(r'\s*(?P<min>'+NUMERIC+')(\.\.(?P<max>'+NUMERIC+'))'+OPTIONALFEEDBACK)
reAnswerNumericExpression = re.compile(r'\s*(?P<val1>'+NUMERIC+')((?P<op>:|\.\.)(?P<val2>'+NUMERIC+'))?'+OPTIONALFEEDBACK)

# Multiple choices only ~ symbols
reAnswerMultipleChoices = re.compile(r'\s*(?P<sign>=|~)(%(?P<fraction>-?'+NUMERIC+')%)?(?P<answer>('+ANYCHAR+')*)'+OPTIONALFEEDBACK)

# True False
reAnswerTrueFalse = re.compile(r'^\s*(?P<answer>(T(RUE)?)|(F(ALSE)?))\s*'+OPTIONALFEEDBACK+OPTIONALFEEDBACK2)

# Match (applies on 'answer' part of the reAnswerMultipleChoices pattern
reMatch = re.compile(r'(?P<question>.*)->(?P<answer>.*)')


def stripMatch(match, s):
    """
    """
    if match.group(s):
        return match.group(s).strip()
    else:
        return ""


def moodleRendering(src):
    """ See https://docs.moodle.org/23/en/Formatting_text#Moodle_auto-format"""
    # blank lines are new paragraphs, url are links, html is allowed
    # quick and dirty conversion (don't closed p tags...)
    src = transformSpecials(src)
    src = reURL.sub(r'<a href="\1">\1</a>', src)
    src = reNewLine.sub(r'<p>', src)
    return src


def htmlRendering(src):
    return transformSpecials(src)


def markdownRendering(src):
    return markdown.markdown(transformSpecials(src), MARKDOWN_EXT)


def markupRendering(src, markup='html'):
    m = sys.modules[__name__]
    rendering = markup + 'Rendering'
    if rendering in m.__dict__:
        return getattr(m, rendering)(src)
    else:
        logger.warning('Rendering error: unknown markup language '+markup)
        return src


def transformSpecials(src):
    return reSpecialChar.sub(r'\g<char>', src)
