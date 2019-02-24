#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Python [Version]
#
#  Author: Coumes Quentin     Mail: qcoumes@etud.u-pem.fr
#  Created: 2017-06-27
#  Last Modified: 2017-06-27


key_error = ['title',  'evaluator', 'form']
key_warning = ['text', 'author']
key_soluce= ['soluce','pltest','expectedoutput', 'testcode']
lang = ['abap', 'abc', 'actionscript', 'ada', 'apache_conf', 'applescript', 'asciidoc', 'assembly_x86', 'autohotkey', 'batchfile', 'bro', 'c9search', 'c_cpp', 'cirru', 'clojure', 'cobol', 'coffee', 'coldfusion', 'csharp', 'csound_document', 'csound_orchestra', 'csound_score', 'css', 'curly', 'd', 'dart', 'diff', 'django', 'dockerfile', 'dot', 'drools', 'eiffel', 'ejs', 'elixir', 'elm', 'erlang', 'forth', 'fortran', 'ftl', 'gcode', 'gherkin', 'gitignore', 'glsl', 'gobstones', 'golang', 'graphqlschema', 'groovy', 'haml', 'handlebars', 'haskell', 'haskell_cabal', 'haxe', 'hjson', 'html', 'html_elixir', 'html_ruby', 'ini', 'io', 'jack', 'jade', 'java', 'javascript', 'json', 'jsoniq', 'jsp', 'jssm', 'jsx', 'julia', 'kotlin', 'latex', 'lean', 'less', 'liquid', 'lisp', 'live_script', 'livescript', 'logiql', 'lsl', 'lua', 'luapage', 'lucene', 'makefile', 'markdown', 'mask', 'matlab', 'maze', 'mel', 'mips_assembler', 'mipsassembler', 'mushcode', 'mysql', 'nix', 'nsis', 'objectivec', 'ocaml', 'pascal', 'perl', 'pgsql', 'php', 'pig', 'plain_text', 'powershell', 'praat', 'prolog', 'properties', 'protobuf', 'python', 'r', 'razor', 'rdoc', 'red', 'rhtml', 'rst', 'ruby', 'rust', 'sass', 'scad', 'scala', 'scheme', 'scss', 'sh', 'sjs', 'smarty', 'snippets', 'soy_template', 'space', 'sparql', 'sql', 'sqlserver', 'stylus', 'svg', 'swift', 'swig', 'tcl', 'tex', 'text', 'textile', 'toml', 'tsx', 'turtle', 'twig', 'typescript', 'vala', 'vbscript', 'velocity', 'verilog', 'vhdl', 'wollok', 'xml', 'xquery', 'yaml']



def check(dic):
    dic_key = dic.keys()
    warning = ""
        
    for key in key_error:
        if key not in dic_key:
            return False, "Error: Key missing in PL - '"+key+"'."
    
    soluce = False
    for k in key_soluce:
        if k in dic_key:
            soluce = True
    if not soluce:
        return False, "Error: PL should contain at least one of the following key:"+str(key_soluce)
    
    if ('basefiles' in dic and not 'plgrader.py' in dic['basefiles']) and (not 'grader' in dic_key):
        return False, "Error: Key missing in PL - 'grader'."
    
    if 'language' in dic:
        print(dic['language'] in lang)
        if not dic['language'] in lang:
            warning += "Warning: Unknown language: '"+dic['language']+"', default syntax highlight (python) will be applied. Check the documentation for a list of known language."
    else:
        warning += "Warning: missing key 'language' in PL, default syntax highlight (python) will be applied."
        
    for key in key_warning:
        if key not in dic_key:
            warning += "Warning: Key missing in PL - '"+key+"'.\n"
    
    if warning:
        return True, warning
    return True, None
        

