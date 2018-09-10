#!/usr/bin/env python3
# coding: utf-8

import sys, json, jsonpickle, time


if __name__ == "__main__":
    if len(sys.argv) < 3:
        msg = ("Sandbox did not call builder properly:\n"
               +"Usage: python3 builder.py [input_json] [output_json]")
        print(msg, file=sys.stderr)
        sys.exit(1)
    input_json = sys.argv[1]
    output_json = sys.argv[2]
    
    with open(input_json, "r") as f:
        dic = json.load(f)
    
    if 'build' in dic:
        exec(dic['build'], globals())
        dic = build(dic)
    
    with open(output_json, "w+") as f:
        f.write(jsonpickle.encode(dic, unpicklable=False))
    
    sys.exit(0)
