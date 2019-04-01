from django.test import TestCase

from playexo.enums import State



class EnumsTestCase(TestCase):
    
    def test_by_grade(self):
        self.assertEqual(State.by_grade(...), State.NOT_STARTED)
        self.assertEqual(State.by_grade(None), State.STARTED)
        self.assertEqual(State.by_grade(-1), State.ERROR)
        self.assertEqual(State.by_grade(0), State.FAILED)
        self.assertEqual(State.by_grade(50), State.PART_SUCC)
        self.assertEqual(State.by_grade(100), State.SUCCEEDED)
        self.assertEqual(State.by_grade(110), State.STARTED)
        self.assertEqual(State.by_grade(-10), State.STARTED)
