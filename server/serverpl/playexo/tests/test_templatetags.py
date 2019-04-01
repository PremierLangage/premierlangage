from django.test import TestCase
from playexo.templatetags.playexo_tags import dict_value



class TemplatetagsTestCase(TestCase):
    
    def test_dict_value(self):
        dic = {
            "a": "a",
            "b": "b",
            "c": "c"
        }
        self.assertEqual(dict_value(dic, key="a"), "a")
        self.assertEqual(dict_value(dic, key="b"), "b")
        self.assertEqual(dict_value(dic, key="d"), False)
        self.assertEqual(dict_value([], key="a"), False)
        self.assertEqual(dict_value(dic), False)
