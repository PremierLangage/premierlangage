#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  filebrowser_filter.py
#  
#  Copyright 2018 Coumes Quentin
#  
#  This program is free software; you can redistribute it and/or modify
#  it under the terms of the GNU General Public License as published by
#  the Free Software Foundation; either version 2 of the License, or
#  (at your option) any later version.
#  
#  This program is distributed in the hope that it will be useful,
#  but WITHOUT ANY WARRANTY; without even the implied warranty of
#  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#  GNU General Public License for more details.
#  
#  You should have received a copy of the GNU General Public License
#  along with this program; if not, write to the Free Software
#  Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
#  MA 02110-1301, USA.
#  
#  

import re
from urllib.parse import urlparse, urlunparse
from os.path import splitext, basename, dirname

import gitcmd
from django import template

from filebrowser.models import Directory
from filebrowser.filter import is_directory, is_image, is_video, is_audio, is_text, in_repository


register = template.Library()

WORD_EXT =       ['.doc', '.docm', '.docx', '.dot', '.dotm', '.dotx', '.odt', '.wps']
EXCEL_EXT =      ['.xlsx', '.xlsm', '.xlsb', '.xltx', '.xltm', '.xls', '.xlt', '.xlam', '.xla', '.xlw', '.xlr', '.csv', '.ods', '.xlc']
POWERPOINT_EXT = ['.pptx', '.pptm', '.ppt', '.potx', '.potm', '.pot', '.ppsx', '.ppsm', '.pps', '.ppam', '.odp']
ARCHIVE_EXT =    ['.zip', '.tar', '.7zip', '.a', '.ar', '.bz2', '.gz', '.7z', '.jar', '.tar.gz', '.tgz', '.tar.Z', '.tar.bz2', '.tar.xz', '.tbz2', '.tar.lzma', '.tlz', '.tar.xz', '.txz']
CODE_EXT =       ['.inp', '.abc', '.abp', '.as', '.adb', '.ads', '.asciidoc', '.adoc', '.asm', '.asm51', '.a51', '.bat', '.cmd', '.nt', '.ml', '.mli', '.c', '.xpm', '.cpp', '.cxx', '.c++', '.cc', '.h', '.hpp', '.hxx', '.h++', '.hh', '.C', '.H', '.clj', '.cljs', '.cljc', '.cu', '.cuh', '.h', '.cs', 'CMake=CMakeLists.txt', '.cmake', '.ctest', '.cob', '.cpy', '.cbl', '.cobol', '.coffee', 'Cakefile', '.Cakefile', '.coffee.erb', '.iced', '.iced.erb', '.conf', '.ini', 'config', 'rc', '.cfg', '.desktop', '.properties', 'control', '.css', '.pyx', '.pxd', '.pxi', '.d', '.di', '.diff', '.patch', '.rej', '.debdiff', '.dpatch', '.docbook', '.erl', '.hrl', '.f', '.for', '.ftn', '.f77', '.F', '.FOR', '.FTN', '.fpp', '.FPP', '.fe', '.fs', '.fth', '.f90', '.f95', '.f03', '.f08', '.F90', '.F95', '.F03', '.F08', '.bas', '.bi', '.vbs', '.gs', '.glsl', '.frag', '.vert', '.go', '.gv', '.dot', '.hs', '.lhs', '.hs-boot', '.lhs-boot', '.hx', '.htm', '.html', '.shtml', '.hta', '.htd', '.htt', '.cfm', '.tpl', '.java', '.jsp', '.js', '.json', '.tex', '.sty', '.idx', '.ltx', '.latex', '.aux', '.bib', '.lisp', '.lua', '.mak', '.mk', 'GNUmakefile', 'makefile', 'Makefile', 'makefile.', 'Makefile.', '.mdml', '.markdown', '.md', '.mkd', '.mkdn', '.mdwn', '.mdown', '.mdtxt', '.mdtext','.nsi', '.nsh', '.mm', '.h', '.pas', '.pp', '.inc', '.dpr', '.dpk', '.pl', '.perl', '.pm', '.agi', '.pod', '.php', '.php3', '.php4', '.php5', '.phtml', '.po', '.pot', '.py', '.pyw', 'SConstruct', 'SConscript', 'wscript', '.ps1', '.psm1', '.rest', '.reST', '.rst', '.R', '.r', '.rs', '.rb', '.rhtml', '.ruby', '.gemspec', 'Gemfile', 'rakefile', 'Rakefile', '.scala', '.scl', '.sh', 'configure', 'configure.in', 'configure.in.in','configure.ac', '.ksh', '.mksh', '.zsh', '.ash', '.bash', '.bashrc', 'bash.bashrc', '.bash_', 'bash_', '.m4', 'PKGBUILD', 'profile', '.sql', '.tcl', '.tk', '.wish', '.exp', '.t2t', '.vala', '.vapi', '.v', '.vhd', '.vhdl', '.xml', '.sgml', '.xsl', '.xslt', '.xsd', '.xhtml', '.xul', '.dtd', '.xtpl', '.mml', '.mathml', '.yaml', '.yml', 'h.zep']

HIDDEN = ['.git']

@register.filter(name='basename')
def basename_filter(path):
    return basename(path)


@register.filter(name='dirname')
def dirname_filter(path):
    return dirname(path)
    
@register.filter(name='string')
def string(var):
    return str(var)


@register.filter(name='opt_filter')
def opt_filter(option, path):
    
    if isinstance(option.filter, (list, tuple)):
        bol = True;
        for filter in option.filter:
            bol &= filter(path)
            if not bol:
                break
    else:
        bol = not option.filter or option.filter(path)
    
    return bol


@register.filter(name='group_filter')
def group_filter(group, path):
    if isinstance(group.filter, (list, tuple)):
        bol = True;
        for filter in group.filter:
            bol &= filter(path)
            if not bol:
                break
    else:
        bol = not group.filter or group.filter(path)
    
    return bol


@register.filter(name='in_repository')
def in_repo(path):
    return in_repository(path)


@register.filter(name='repository_url')
def repository_url(path):
    return gitcmd.remote_url(path)[1][:-1]


@register.filter(name='repository_branch')
def repository_branch(path):
    return gitcmd.current_branch(path)[1][:-1]


@register.filter(name='repository_host')
def repository_host(path):
    url = repository_url(path)
    if 'github.com' in url:
        return 'fab fa-github'
    if 'bitbucket.org' in url:
        return 'fab fa-bitbucket'
    if 'gitlab.com' in url:
        return 'fab fa-gitlab'
    return 'fab fa-git'


@register.filter
def isdir(path):
    return is_directory(path)


@register.filter
def icon(path):    
    ext = splitext(path)[1]
    
    if is_directory(path):
        return "fas fa-folder"
    
    if ext == ".pdf":
        return "fas fa-file-pdf"
    if ext in EXCEL_EXT:
        return "fas fa-file-excel"
    if ext in POWERPOINT_EXT:
        return "fas fa-file-powerpoint"
    if ext in WORD_EXT:
        return "fas fa-file-word"
    if ext in ARCHIVE_EXT:
        return "fas fa-file-archive"
    if ext in CODE_EXT:
        return "fas fa-file-code"
    
    if is_text(path):
        return "fas fa-file-alt"
    if is_audio(path):
        return "fas fa-file-audio"
    if is_video(path):
        return "fas fa-file-video"
    if is_image(path):
        return "fas fa-file-image"
        
    
    return "fas fa-file"


@register.filter
def hidden(path):
    return basename(path) in HIDDEN

@register.filter
def dir_opt_right_padding(val):
    return val*70 + 35
