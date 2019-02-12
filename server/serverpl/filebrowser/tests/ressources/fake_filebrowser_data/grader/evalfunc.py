#!/usr/bin/env python3
# coding: utf-8

import sys, json, jsonpickle, time

from sandboxio import output, get_context, get_answers


missing_evaluator_stderr = """\
The key 'evalfunc' was not found in the context.
When using this grader, the PL must declare a script inside a key 'evalfunc'.
This scrit must declare a function with the prototype 'valfunc(dic, answers)' where 'dic'\
is the dictionnary containins every variables of the PL and 'answers' a dictionnary containing every\
answer of the student. The function should return a tuple (int, feedback) where int is the grade between [0, 100]."""

missing_grade_stderr = """\
'evalfunc' did not return a tuple (int, feedback) where int is the grade between [0, 100]."""

if __name__ == "__main__":
    if len(sys.argv) < 5:
        msg = ("Sandbox did not call grader properly:\n"
               +"Usage: python3 grader.py [input_json] [output_json] [answer_file] [feedback_file]")
        print(msg, file=sys.stderr)
        sys.exit(1)
    
    dic = get_context()
    answers = get_answers()
    if 'evalfunc' in dic:
        exec(dic['evalfunc'], globals())
        grade = evalfunc(dic, answers)
    else:
        print(missing_evaluator_stderr, file=sys.stderr)
        sys.exit(1)
    
    if len(grade) < 2 or type(grade[0]) is not int or type(grade[1]) is not str:
        print(missing_grade_stderr, file=sys.stderr)
        sys.exit(1)
    
    output(grade[0], grade[1], dic)
