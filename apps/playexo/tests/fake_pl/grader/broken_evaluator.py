#!/usr/bin/env python3
# coding: utf-8

import sys

from sandboxio import get_answers, get_context, output



class StopEvaluatorExec(Exception):
    pass



def add_try_clause(code, excpt):
    """Add a try/except clause, excepting 'excpt' around code."""
    code = code.replace('\t', '    ')
    return ("try:\n" + '\n'.join(["    " + line for line in code.split('\n')])
            + "\nexcept " + excpt.__name__ + ":\n    pass")



missing_evaluator_stderr = """\
The key 'evaluator' was not found in the context.
When using this grader, the PL must declare a script inside a key 'evaluator'. This script have
access to every variable declared in the PL and its 'before' script.
It should declare a variable 'grade' which should contain a tuple (int, feedback) where int is
the grade between [0, 100]."""

missing_grade_stderr = """\
'evaluator' did not declare the variable 'grade'.
The script have access to every variable declared in the PL and its 'before' script.
It should declare a variable 'grade' which should contain a tuple (int, feedback) where int is
the grade between [0, 100]."""

aaa

if __name__ == "__main__":
    if len(sys.argv) < 5:
        msg = ("Sandbox did not call grader properly:\n"
               + "Usage: python3 grader.py [input_json] [output_json] [answer_file] ["
                 "feedback_file]")
        print(msg, file=sys.stderr)
        sys.exit(1)
    
    dic = get_context()
    dic['response'] = get_answers()
    if 'evaluator' in dic:
        glob = {}
        dic['StopEvaluatorExec'] = StopEvaluatorExec
        exec(add_try_clause(dic['evaluator'], StopEvaluatorExec), dic)
        exec("", glob)
        for key in glob:
            if key in dic and dic[key] == glob[key]:
                del dic[key]
    else:
        print(missing_evaluator_stderr, file=sys.stderr)
        sys.exit(1)
    
    if 'grade' not in dic:
        print(missing_grade_stderr, file=sys.stderr)
        sys.exit(1)
    
    output(dic['grade'][0], dic['grade'][1], dic)
