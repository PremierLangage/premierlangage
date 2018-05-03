#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  utils.py
#  
#  Copyright 2018 Coumes Quentin <qcoumes@etud.u-pem.fr>
#  


def sum_key_value(dic, *arg, value=lambda k:k):
    """ Returns a dict containing the sum of the value for each key of given dict.
        Does not modify given dicts.
        
        Value argument can be used to defined which member / index of a value must be added.
    """
    
    result = {}
    for d in [dic]+list(arg):
        for k, v in d.items():
            if k not in result:
                result.update({k: value(v)})
            else:
                result[k] += value(v)
    
    return result
