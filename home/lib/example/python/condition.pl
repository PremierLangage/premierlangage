
extends = /template/python.pl

title = Condition

editor.code==
import sys

if __name__ == "__main__":
    n = int(sys.argv[1])

==

text ==
You are given an integer as argument of the program.

Write a script that outputs:

* `Positive` if the given integer is greater than 0.
* `Negative` if the given integer is lesser than 0.
* `Null` if the given integer equals 0.
==

stdout_tests==
"Positive" "Positive" "5"
"Negative" "Negative" "-5"
"Null" "Null" "0"
!"" "Null" "0"
!"" "Positive" "42"
!"" "Negative" "-42"
==


