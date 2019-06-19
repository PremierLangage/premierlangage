import json


class JsonClassMissingKey(Exception):
    pass

def class_from_json(filename):
    with open(filename, "r") as f:
        dic = json.loads(f.read())
    class_name = dic["name"]
    
    if "name" not in dic or "attributes" not in dic:
        raise JsonClassMissingKey("JSON file must declare at least a name and an attribute")
    for k, v in dic["methods"].items():
        m = "def " + k + "(" + v["args"] + "):\n"
        m += "\n".join(["    " + x for x in v["code"].split("\n")])
        exec(m)
        dic["attributes"][k] = eval(k)
    return class_name, type(class_name, (object,), dic["attributes"])


def json_from_class(cls):
    pass


if __name__ == "__main__":
    name, new_class = class_from_json("test.json")
    NewClass = new_class
    
    a = NewClass()
    a.printA("AAA")
