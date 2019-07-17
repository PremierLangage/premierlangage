extends = /template/java.pl

title = Stdout Tests

text ==
Write a main printing on stdout:

* `Hello` if not argument was provided.
* `Hello [arg1]` if one argument was provided.
* `Hello [arg1] and [arg2] ... and [argn]` if n argument was provided.
==

classname = HelloWorld
stdout_tests==
"No argument" Hello
James "Hello James" James
"2 arguments" "Hello Jhon and James" Jhon James
!"One argument with space" "Hello Jhon Doe" "Jhon Doe"
==
