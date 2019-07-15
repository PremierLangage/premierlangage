#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  pl_lext.py
#
#  Copyright 2019 Cisse Mamadou [mciissee@gmail.com]

from ply import lex


class Lexer(object):

    # List of states of the lexer.
    states = (
        ('multi','exclusive'),
    )

    # List of token names.   This is always required
    tokens = (
        'ID',
        'TEXT',
        'COMMENT',
        'OP_SANDBOX',
        'OP_ASSIGN_FILE',
        'OP_ASSIGN_MULTI',
        'OP_ASSIGN_SINGLE',
    )

    def __init__(self, **kwargs):
        self.lexer = lex.lex(module=self, **kwargs)
        self.comments = []
        # Keeps track of the last token returned from self.token()
        self.last_token = None
        self.filepath = ''

    def find_tok_column(self, token):
        """ Find the column of the token in its line.
        """
        last_cr = self.lexer.lexdata.rfind('\n', 0, token.lexpos)
        return token.lexpos - last_cr

    def tokenize(self, data):
        """
        Tokenize input data to stdout for testing purposes.
        """
        self.reset()
        self.lexer.input(data)
        while True:
            tok = self.lexer.token()
            if not tok:
                break
            print(tok)

    def tokenize_file(self, filepath):
        """
        Tokenize input file to stdout for testing purposes.
        :param filepath: Input file to parse.
        """
        with open(filepath, "r") as content:
            data = content.read()
        return self.tokenize(data)

    def reset(self):
        """ Resets the internal line number counter of the lexer.
        """
        self.lexer.lineno = 1
        self.filepath = ''
        self.comments = []

    def lineno(self):
        return self.lexer.lineno

    def input(self, text):
        self.lexer.input(text)

    def token(self):
        self.last_token = self.lexer.token()
        return self.last_token

    def clone(self):
        return self.lexer.clone()

    t_ignore = ' \t'
  

    ##
    ## Rules for the multi state
    ##
    def t_multi_TEXT(self, t):
        r'(.|\n)*?(\n==)'
        t.lexer.lineno += t.value.count('\n')
        t.lexer.begin('INITIAL')
        t.value = t.value.strip()[:-3]
        t.lineno += 1
        return t


    ##
    ## Rules for the initial state
    ## The order of the rules is IMPORTANT
    ##
    def t_OP_SANDBOX(self, t):
        r'\@'
        return t

    def t_OP_ASSIGN_FILE(self, t):
        r'(=@|\+=@|\-=@)'
        return t

    def t_OP_ASSIGN_MULTI(self, t):
        r'(==|\+=|\-=|\%=)'
        t.lexer.begin('multi')
        return t

    def t_OP_ASSIGN_SINGLE(self, t):
        r'(\+|\-|\%|\$|=\:|=\$|=)'
        return t

    def t_ID(self, t):
        r'[a-zA-Z_][a-zA-Z0-9_\.]*(?=\s*(\+|-|\=|\%))'
        #  r'[a-zA-Z_]+(\.[a-zA-Z0-9_]+)*(?=\s*(\+|-|\=|\%))'
        #  is the good regex but we don't use it to handles
        # manually key errors during parsing.
        return t

    def t_TEXT(self, t):
        r'[^\#\n]+'
        return t

    def t_COMMENT(self, t):
        r'(?:\#!.*)|(?:\#\*(?:.|\n\#\*)*)|(?:\#.*)'
        self.comments.append(t)
        t.lexer.lineno += t.value.count('\n')
        pass

    def t_newline(self, t):
        r'\n+'
        t.lexer.lineno += len(t.value)

    def t_error(self, t):
        print("SyntaxError: invalid syntax, line %s\n" % t.lineno, t.value)
        t.lexer.skip(1)
