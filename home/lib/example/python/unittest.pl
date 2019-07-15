extends = ~/template/python.pl

title = Unittest
text = Create the methods `getX()` and `getY()` for the class Point.

editor.code==
class Point():
    
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __eq__(self, other):
        if type(other) == Point:
            return self.x == other.x and self.y == other.y
        return False
==

unittest==#|python|
import unittest
from student import Point

class PointTestCase(unittest.TestCase):
    def test_distance(self):
        p1 = Point(1,2)
        p2 = Point(-2,5)

        self.assertEqual(((1+2)**2 + (2-5)**2)**(1/2), p1.distance(p2))
        self.assertEqual(((1+2)**2 + (2-5)**2)**(1/2), p2.distance(p1))
    

    def test_milieu(self):
        p1 = Point(1,2)
        p2 = Point(-2,5)

        self.assertEqual(Point((1-2)/2,(2+5)/2), p1.milieu(p2))

if __name__ == '__main__':
    unittest.main()
==




