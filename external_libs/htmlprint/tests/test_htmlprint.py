#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  test_htmlprint.py
#


import unittest, htmlprint as h


class TestHtmlPrinter(unittest.TestCase):

    def test_encode(self):
        self.assertEqual(h.encode("ab&cd<ef>ghéàklèm;p"), "ab&amp&semi;cd&lt;ef&gt;gh&eacute;&agrave;kl&egrave;m&semi;p")
        self.assertEqual(h.encode("no need for encoding"), "no need for encoding")
    
    
    def test_tag(self):
        self.assertEqual(h.tag('div', 'my string'), '<div>my string</div>')
        self.assertEqual(h.tag('div', ''), '<div></div>')
        self.assertEqual(
            h.tag('div', '', 'disabled'),
            '<div disabled></div>'
        )
        self.assertEqual(
            h.tag('div', '', style="height:800;"),
            '<div style="height:800;"></div>'
        )
        self.assertTrue(h.tag('div', '', 'disabled', 'test', style="height:800;", clasS="btn btn-danger") in [
            '<div style="height:800;" class="btn btn-danger" disabled test></div>', 
            '<div class="btn btn-danger" style="height:800;" disabled test></div>',
        ])
    
    
    def test_nltobr(self):
        self.assertEqual(h.nltobr('line1\nline2\rline3\r\n'), "line1<br/>line2<br/>line3<br/>")
        self.assertEqual(h.nltobr('no different lines'), "no different lines")
    
    
    def test_code(self):
        s = h.code("def sqrt(x): return x*x")
        print(s)
        self.assertIn("def sqrt(x): return x*x", s)
        self.assertTrue('<code' in s)
        self.assertTrue('<pre' in s)
        self.assertTrue('</code>' in s)
        self.assertTrue('</pre>' in s)
    
    
    def test_html_exc(self):
        try:
            raise ValueError("This is a test")
        except:
            s = h.html_exc()
            self.assertTrue('ValueError: This is a test' in s)
            self.assertTrue('<code' in s)
            self.assertTrue('<pre' in s)
            self.assertTrue('</code>' in s)
            self.assertTrue('</pre>' in s)
