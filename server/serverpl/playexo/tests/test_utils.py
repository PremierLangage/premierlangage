#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  test_utils.py
#  
#  Copyright 2018 Coumes Quentin <qcoumes@etud.u-pem.fr>
#  


from django.test import TestCase

from playexo.utils import sum_key_value



class UtilsTestCase(TestCase):
    
    def test_sum_key_value(self):
        self.assertEqual(
            sorted(sum_key_value({'a': 1, 'b': 2}).items(), key=lambda i: i[1]),
            [('a', 1), ('b', 2)]
        )
        
        self.assertEqual(
            sorted(sum_key_value(
                    {'a': 1, 'b': 2},
                    {'a': 1, 'b': 1, 'c': 5},
                    {'a': 2, 'b': 2, 'c': 6, 'd': 10}
                ).items(), key=lambda i: i[1]),
            [('a', 4), ('b', 5), ('d', 10), ('c', 11)]
        )
        
        self.assertEqual(
                sorted(sum_key_value(
                        {'a': ("a_val", 1), 'b': ("b_val", 2)},
                        {'a': ("a_val", 1), 'b': ("b_val", 1), 'c': ("c_val", 5)},
                        value = lambda i: i[1],
                    ).items(), key=lambda i: i[1]),
                [('a', 2), ('b', 3), ('c', 5)]
            )
