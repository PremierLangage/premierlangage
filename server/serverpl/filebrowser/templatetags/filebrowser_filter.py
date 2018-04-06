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


from os.path import splitext

from django import template

from filebrowser.models import Directory
from filebrowser.filter import is_directory, is_image, is_video, is_audio, is_text


register = template.Library()

WORD_EXT =       ['.doc', '.docm', '.docx', '.dot', '.dotm', '.dotx', '.odt', '.wps']
EXCEL_EXT =      ['.xlsx', '.xlsm', '.xlsb', '.xltx', '.xltm', '.xls', '.xlt', '.xlam', '.xla', '.xlw', '.xlr', '.csv', '.ods', '.xlc']
POWERPOINT_EXT = ['.pptx', '.pptm', '.ppt', '.potx', '.potm', '.pot', '.ppsx', '.ppsm', '.pps', '.ppam', '.odp']
ARCHIVE_EXT =    ['.zip', '.tar', '.7zip', '.a', '.ar', '.bz2', '.gz', '.7z', '.jar', '.tar.gz', '.tgz', '.tar.Z', '.tar.bz2', '.tar.xz', '.tbz2', '.tar.lzma', '.tlz', '.tar.xz', '.txz']
CODE_EXT =       ['.inp', '.abc', '.abp', '.as', '.adb', '.ads', '.asciidoc', '.adoc', '.asm', '.asm51', '.a51', '.bat', '.cmd', '.nt', '.ml', '.mli', '.c', '.xpm', '.cpp', '.cxx', '.c++', '.cc', '.h', '.hpp', '.hxx', '.h++', '.hh', '.C', '.H', '.clj', '.cljs', '.cljc', '.cu', '.cuh', '.h', '.cs', 'CMake=CMakeLists.txt', '.cmake', '.ctest', '.cob', '.cpy', '.cbl', '.cobol', '.coffee', 'Cakefile', '.Cakefile', '.coffee.erb', '.iced', '.iced.erb', '.conf', '.ini', 'config', 'rc', '.cfg', '.desktop', '.properties', 'control', '.css', '.pyx', '.pxd', '.pxi', '.d', '.di', '.diff', '.patch', '.rej', '.debdiff', '.dpatch', '.docbook', '.erl', '.hrl', '.f', '.for', '.ftn', '.f77', '.F', '.FOR', '.FTN', '.fpp', '.FPP', '.fe', '.fs', '.fth', '.f90', '.f95', '.f03', '.f08', '.F90', '.F95', '.F03', '.F08', '.bas', '.bi', '.vbs', '.gs', '.glsl', '.frag', '.vert', '.go', '.gv', '.dot', '.hs', '.lhs', '.hs-boot', '.lhs-boot', '.hx', '.htm', '.html', '.shtml', '.hta', '.htd', '.htt', '.cfm', '.tpl', '.java', '.jsp', '.js', '.json', '.tex', '.sty', '.idx', '.ltx', '.latex', '.aux', '.bib', '.lisp', '.lua', '.mak', '.mk', 'GNUmakefile', 'makefile', 'Makefile', 'makefile.', 'Makefile.', '.mdml', '.markdown', '.md', '.mkd', '.mkdn', '.mdwn', '.mdown', '.mdtxt', '.mdtext','.nsi', '.nsh', '.mm', '.h', '.pas', '.pp', '.inc', '.dpr', '.dpk', '.pl', '.perl', '.pm', '.agi', '.pod', '.php', '.php3', '.php4', '.php5', '.phtml', '.po', '.pot', '.py', '.pyw', 'SConstruct', 'SConscript', 'wscript', '.ps1', '.psm1', '.rest', '.reST', '.rst', '.R', '.r', '.rs', '.rb', '.rhtml', '.ruby', '.gemspec', 'Gemfile', 'rakefile', 'Rakefile', '.scala', '.scl', '.sh', 'configure', 'configure.in', 'configure.in.in','configure.ac', '.ksh', '.mksh', '.zsh', '.ash', '.bash', '.bashrc', 'bash.bashrc', '.bash_', 'bash_', '.m4', 'PKGBUILD', 'profile', '.sql', '.tcl', '.tk', '.wish', '.exp', '.t2t', '.vala', '.vapi', '.v', '.vhd', '.vhdl', '.xml', '.sgml', '.xsl', '.xslt', '.xsd', '.xhtml', '.xul', '.dtd', '.xtpl', '.mml', '.mathml', '.yaml', '.yml', 'h.zep']


@register.filter(name='opt_filter')
def filter(option, path):
    
    if isinstance(option.filter, (list, tuple)):
        bol = True;
        for filter in option.filter:
            bol = bol and filter(path)
            if not bol:
                break
    else:
        bol = not option.filter or option.filter(path)
    
    return bol


@register.filter
def isdir(path):
    return is_directory(path)


@register.filter
def can_read(directory, user):
    if isinstance(directory, str):
        directory = Directory.objects.get(name=directory)
    
    return user in directory.read_auth.all() or directory.write_auth.all() or directory.owner == user


@register.filter
def can_write(directory, user):
    if isinstance(directory, str):
        directory = Directory.objects.get(name=directory)
    
    return user in directory.write_auth.all() or directory.owner == user


@register.filter
def is_owner(directory, user):
    if isinstance(directory, str):
        directory = Directory.objects.get(name=directory)
    
    return user == directory.owner


@register.filter
def icon(path):    
    ext = splitext(path)[1]
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
    
    if is_directory(path):
        return "fas fa-folder"
    if is_text(path):
        return "fas fa-file-alt"
    if is_audio(path):
        return "fas fa-file-audio"
    if is_video(path):
        return "fas fa-file-video"
    if is_image(path):
        return "fas fa-file-image"
        
    
    return "fas fa-file"
