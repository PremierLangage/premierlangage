#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  test_utils.py
#  
#  Copyright 2018 Coumes Quentin <qcoumes@etud.u-pem.fr>
#  


from django.test import TestCase
from django.contrib.auth.models import User
from django.core.exceptions import ObjectDoesNotExist

from serverpl.settings import REPO_ROOT

from filebrowser.models import Directory

from loader.utils import get_location, extends_dict, exception_to_html



class UtilsTestCase(TestCase):
    """ Test functions of loader.utils modules. """
    
    @classmethod
    def setUpTestData(self):
        user = User.objects.create_user(username='user', password='12345')
        self.dir1 = Directory.objects.create(name='dir1', owner=user)
        self.dir2 = Directory.objects.create(name='dir2', owner=user)
    
    
    def test_get_location(self):
        current_path = 'first1/second1/'
        
        # Correct absolute path to current directory
        path1 = '/first1/second1/third1/file.py'
        # Correct absolute path to current directory
        path2 = 'dir1:/first1/second1/third1/file.py'
        # Correct absolute path to another directory
        path3 = 'dir2:/first1/second1/third1/file.py'
        # Correct relative path to current directory
        path4 = '../second2/third2/file.py'
        # Correct relative path to current directory
        path5 = 'file.py'
        # dir3 does not exists, raise ObjectDoesNotExist
        path6 = 'dir3:/first1/second1/third?/file.py1'
        # Path to another directory is not absolute, raise ValueError
        path7 = 'dir1:first1/second1/third?/file.py1'
        
        self.assertEqual((self.dir1, 'first1/second1/third1/file.py'), get_location(self.dir1, path1))
        self.assertEqual((self.dir1, 'first1/second1/third1/file.py'), get_location(self.dir1, path2))
        self.assertEqual((self.dir2, 'first1/second1/third1/file.py'), get_location(self.dir1, path3))
        self.assertEqual((self.dir1, 'first1/second2/third2/file.py'), get_location(self.dir1, path4, current_path))
        self.assertEqual((self.dir1, 'first1/second1/file.py'), get_location(self.dir1, path5, current_path))
        
        with self.assertRaises(ObjectDoesNotExist):
            get_location(self.dir1, path6)
        
        with self.assertRaises(ValueError):
            get_location(self.dir1, path7)
    
    
    def test_extends_dic(self):
        target = { 'name': 'Testdic', 'author': 'Tester', 'emptylist': [], 'emptydic': {} }
        source = { 'name': 'Dictest', 'newkey': 'values', 'emptylist': ['elem'], 'emptydic': {'key': 'elem'} }
        result = { 'name': 'Testdic', 'newkey': 'values', 'emptylist': ['elem'], 'emptydic': {'key': 'elem'}, 'author': 'Tester' }
        
        self.assertEqual(extends_dict(target, source), result)
    
    
    def test_exception_to_html(self):
        string = """<class 'ExceptionName'> Exception message
Traceback (most recent call last):
File "<stdin>", line 1, in """+REPO_ROOT+"directory/path/to/file.pl"
        result = """[class 'ExceptionName'] Exception message<br>\
Traceback (most recent call last):<br>\
File "[stdin]", line 1, in directory/path/to/file.pl"""

        self.assertEqual(exception_to_html(string), result)
