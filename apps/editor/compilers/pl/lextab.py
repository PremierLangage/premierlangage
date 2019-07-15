# lextab.py. This file automatically created by PLY (version 3.11). Don't edit!
_tabversion = '3.10'
_lextokens = set(('COMMENT', 'ID', 'OP_ASSIGN_FILE', 'OP_ASSIGN_MULTI', 'OP_ASSIGN_SINGLE',
                  'OP_SANDBOX', 'TEXT'))
_lexreflags = 64
_lexliterals = ''
_lexstateinfo = {'INITIAL': 'inclusive', 'multi': 'exclusive'}
_lexstatere = {
    'INITIAL': [(
                '(?P<t_OP_SANDBOX>\\@)|(?P<t_OP_ASSIGN_FILE>(=@|\\+=@|\\-=@))|('
                '?P<t_OP_ASSIGN_MULTI>(==|\\+=|\\-=|\\%=))|(?P<t_OP_ASSIGN_SINGLE>('
                '\\+|\\-|\\%|\\$|=\\:|=\\$|=))|(?P<t_ID>[a-zA-Z_][a-zA-Z0-9_\\.]*(?=\\s*('
                '\\+|-|\\=|\\%)))|(?P<t_TEXT>[^\\#\\n]+)|(?P<t_COMMENT>(?:\\#!.*)|(?:\\#\\*('
                '?:.|\\n\\#\\*)*)|(?:\\#.*))|(?P<t_newline>\\n+)',
                [None, ('t_OP_SANDBOX', 'OP_SANDBOX'), ('t_OP_ASSIGN_FILE', 'OP_ASSIGN_FILE'), None,
                 ('t_OP_ASSIGN_MULTI', 'OP_ASSIGN_MULTI'), None,
                 ('t_OP_ASSIGN_SINGLE', 'OP_ASSIGN_SINGLE'), None, ('t_ID', 'ID'), None,
                 ('t_TEXT', 'TEXT'), ('t_COMMENT', 'COMMENT'), ('t_newline', 'newline')])],
    'multi':   [('(?P<t_multi_TEXT>(.|\\n)*?(\\n==))', [None, ('t_multi_TEXT', 'TEXT')])]
}
_lexstateignore = {'INITIAL': ' \t'}
_lexstateerrorf = {'INITIAL': 't_error'}
_lexstateeoff = {}
