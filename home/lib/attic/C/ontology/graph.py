#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  
# Copyright 2016 Nicolas Borie <nicolas.borie@u-pem.fr>
#

tags_list = [ "input_output", "type", "variable", "function",
"structure", "inclusion", "declaration", "macro", "array", "pointer",
"recursion", "function_pointer", "header", "bitwise_operator", "file",
              "type_conversion", "program", "string", "prototype" ]

tags_edges_dict = [
    ("program", "input_output"), ("program", "variable"),
    ("program", "function"),
     
    ("input_output", "file"), 

    ("type", "type_conversion"), ("type", "structure"),
    ("type", "bitwise_operator"), ("type", "array"),

    ("variable", "pointer"), ("variable", "function"),
    ("variable", "type"),

    ("function", "bitwise_operator"), ("function", "function_pointer"),
    ("function", "declaration"), ("function", "recursion"),
    ("function", "macro"), ("function", "inclusion"),
    ("function", "prototype"),

    ("array", "pointer"), ("array", "string"),

    ("string", "file"),
    
    ("inclusion", "header"),

    ("declaration", "header"),

    ("macro", "header"),

    ("prototype", "header"), ("prototype", "function_pointer"),
]
