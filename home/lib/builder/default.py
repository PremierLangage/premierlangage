#!/usr/bin/env python3
# coding: utf-8

import sys, json, jsonpickle


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
    
    if 'before' not in dic:
        if 'build' not in dic:
            print("Missing before or build clause quitting ",file=sys.stderr)
            sys.edit(1)

        exec(dic['build'], globals())
        dic = build(dic)
    else:
        glob = {}
        exec(dic['before'], dic)
        exec("", glob)
        for key in glob:
            if key in dic and dic[key] == glob[key]:
                del dic[key]
            
    with open(output_json, "w+") as f:
        f.write(jsonpickle.encode(dic, unpicklable=False))
    
    sys.exit(0)
