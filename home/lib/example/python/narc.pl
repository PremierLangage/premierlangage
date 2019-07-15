
extends = /template/python.pl

title = Narcissistic decimal number

text ==
Write a script that outputs `True` if the integer given as argument of the program is a narcissistic decimal number, and `False` otherwise.
A narcissistic decimal number is a non-negative integer, that is equal to the sum of the  m-th powers of each of the digits in the decimal representation of n,
 where m is the number of digits in the decimal representation of n.
==

editor.code ==
import sys

if __name__ == "__main__":
    n = int(sys.argv[1])
==

stdout_tests==
!"" True 153
!"" False 152
==

soluce==
print(n == sum([int(x)**len(str(n)) for x in str(n)]))
==


