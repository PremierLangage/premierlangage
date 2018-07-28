#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  test_views.py
#  
#  


from django.test import TestCase, Client





class ViewsTestCase(TestCase):
    
    @classmethod
    def setUpTestData(self):
        self.c = Client()
       
        
    def test_action(self):
        #~ response = self.c.head(
                #~ '/sandbox/',
            #~ )
        #~ self.assertEqual(response.status_code, 200)
        
        
        #~ response = self.c.get(
            #~ '/sandbox/',
        #~ )
        #~ self.assertEqual(response.status_code, 400)
        
        response = self.c.get(
            '/sandbox/?action=version',
        )
        self.assertEqual(response.status_code, 200)
        self.assertContains(response,'{"version":"pysandbox-0.1"}')
        
        response = self.c.get(
            '/sandbox/?action=languages',
        )
        self.assertEqual(response.status_code, 200)
        self.assertContains(response,'{"languages":["c","python"]}')
        
        
        #~ response = self.c.post(
            #~ '/sandbox/?action=false',
        #~ )
        #~ self.assertEqual(response.status_code, 400)

        #~ response = self.c.post(
            #~ '/sandbox/?action=execute',
           #~ {
                #~ 'execution_timeout' : 45
           #~ }
        #~ )
        #~ self.assertEqual(response.status_code, 200)

    
        #~ response = self.c.put(
            #~ '/sandbox/?action=languages',
        #~ )
        #~ self.assertEqual(response.status_code, 405)
