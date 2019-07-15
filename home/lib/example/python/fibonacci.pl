
extends = /template/python.pl

title = Fibonacci

text ==
We can get the fibonacci numbers recursively as defined below:
$%
fibonacci(n) :=    
\left\\{ 
\begin{array}{ll}
0 & \text{ si } n = 0 \\newline
1 & \text{ si } n = 1 \\newline
fibonacci(n-1) + fibonacci(n-2) & \text{ si } n > 1 \\newline
\end{array}
\\right.
%$

Write a recursive function `fibonacci` that takes an integer n and returns the nth term of the sequence.
==

editor.code ==
def fibonacci(n):
    pass
==

unittest==#|python|
import unittest
from student import fibonacci

class FiboTestCase(unittest.TestCase):
    def test_zero(self):
        assert fibonacci(0) == 0

    def test_one(self):
        assert fibonacci(1) == 1

    def test_others(self):
        assert fibonacci(4) == 3
        assert fibonacci(5) == 5
        assert fibonacci(6) == 8
        assert fibonacci(7) == 13
        
if __name__ == '__main__':
    unittest.main()
==



