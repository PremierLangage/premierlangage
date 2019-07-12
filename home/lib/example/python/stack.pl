extends = ~/template/python.pl

title = Stack
text == 
Create a class `Stack` that implements three methods:

* `push`: add an element at the top of the stack
* `pop`: removes and return the element at the top of the stack or return `None` if the stack is empty
* `as_list`: return a new list of the elements of the stack, where the elements at the bottom of the stack are at the begining of the list
==

before=

editor.code==
class Stack():
    
    def __init__(self):
        pass
    
    def push(self, val):
        pass

    def pop(self):
        pass

    def as_list(self):
        pass
==

unittest==#|python|
import unittest
from student import Stack

class StackTestCase(unittest.TestCase):
    def test_push(self):
        s = Stack()
        s.push(1)
        assert s.as_list() == [1]

    def test_multiple_push(self):
        s = Stack()
        s.push(1)
        s.push(2)
        s.push(3)
        assert s.as_list() == [1, 2, 3]

    def test_pop(self):
        s = Stack()
        s.push(2)
        assert s.pop() == 2

    def test_empty_pop(self):
        s = Stack()
        assert s.pop() == None
    
    def test_multiple_pop(self):
        s = Stack()
        s.push(1)
        s.push(2)
        assert s.pop() == 2
        assert s.as_list() == [1]
        assert s.pop() == 1
        assert s.pop() == None
        assert s.as_list() == []

    def test_immutable(self):
        s = Stack()
        s.push(1)
        s.push(2)
        assert s.as_list() == [1, 2]
        l = s.as_list()
        l.append(3)
        assert s.as_list() == [1, 2]

if __name__ == '__main__':
    unittest.main()
==




