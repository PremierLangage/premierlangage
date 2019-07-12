
extends = /template/python.pl

title = Title String

editor.code==
import sys

if __name__ == "__main__":
    s = sys.argv[1]

==

text ==
Write a script that capitalize the first caracter of each word and lowers the others in the string given as the first argument of the program and outputs it on stdout.
==

stdout_tests==
Test Test test 
"This is a test" "This Is A Test" "This is a test"
"this is A test" "This Is A Test" "this is A test"
"tHIS iS a tEST" "This Is A Test" "tHIS iS a tEST"
"With digit" "1St Test" "1sT tEsT"
!"" "Teest" "TEEST"
!"" "Teest" "teest"
!"" "9Aze" "9aze"
==


