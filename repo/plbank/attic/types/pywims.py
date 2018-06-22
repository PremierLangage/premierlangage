#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Python [Version]
#
#  Author: Coumes Quentin     Mail: qcoumes@etud.u-pem.fr
#  Created: 2017-06-27
#  Last Modified: 2017-06-27


key_error = ['title', 'before', 'after', 'feedback', 'form']
key_warning = ['author']

def check(dic):
    dic_key = dic.keys()
    warning = ""
    
    for key in key_error:
        if key not in dic_key:
            return False, "Error: Key missing in PL - '"+key+"'."
    
    for key in key_warning:
        if key not in dic_key:
            warning += "Warning: Key missing in PL - '"+key+"'.\n"
    
    if warning:
        return True, warning
    return True, None
        

