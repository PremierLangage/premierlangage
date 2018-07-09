#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  Author: Coumes Quentin <qcoumes@etud.u-pem.fr>

class MissingGradeError(Exception):
    
    def __str__(self):
        return "Key 'grade' should be present in the ouput of the grader."


class GraderError(Exception):
    
    def __init__(self, s):
        self.s = s
    
    def __str__(self):
        return self.s
