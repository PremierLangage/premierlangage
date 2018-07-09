#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  test_models.py
#  
# 
from django.test import TestCase


from sandbox.models import Sandbox

class ModelsTestCase(TestCase):

    def test_sandbox_models(self):
        sandbox = Sandbox("namesb", "urlsb", 1)
        self.assertEqual(str(sandbox), "namesb - urlsb - 1")
