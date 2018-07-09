#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  test_exceptions.py
#  
#  


from django.test import TestCase

from sandbox.exceptions import MissingGradeError, GraderError



class ExceptionsTestCase(TestCase):
    
    def test_missing_grade_error(self):
        message = "Key 'grade' should be present in the ouput of the grader."
        
        classe = MissingGradeError()
        
        self.assertEqual(str(classe),message)

    def test_grader_error(self):
        s = "error"
        
        classe = GraderError(s)
        
        self.assertEqual(classe.s,s)
        self.assertEqual(str(classe),s)
