#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  test_model.py
#
#

from django.test import TestCase

from qa.utils import parse_query



class UtilsTestCase(TestCase):
    
    def test_parse_query(self):
        query = ('include +include2 -exclude "include expression" +"include expression2"'
                 + '-"exclude expression"')
        include, exclude = parse_query(query)
        
        self.assertEqual(["include", "include2", "include expression", "include expression2"],
                         include)
        self.assertEqual(["exclude", "exclude expression"], exclude)
