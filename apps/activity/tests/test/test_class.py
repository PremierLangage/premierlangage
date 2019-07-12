import json



class JsonClassMissingKey(Exception):
    pass


def class_from_json(filename):
    with open(filename, "r") as f:
        dic = json.loads(f.read())
    class_name = dic["name"]
    
    if "name" not in dic or "attributes" not in dic or "methods" not in dic:
        raise JsonClassMissingKey(
            "JSON file must declare at least 'name', 'attributes' and 'methods' fields")
    for k, v in dic["methods"].items():
        if k in dic["attributes"]:
            raise Exception(k + " is already a class method or attribute")
        m = "def " + k + "(" + v["args"] + "):\n"
        m += "\n".join(["\t" + x for x in v["code"].split("\n")])
        if "decorators" in v:
            for deco in v["decorators"].split():
                m = "@" + deco + "\n" + m
        exec(m)
        dic["attributes"][k] = eval(k)
    return class_name, type(class_name, (object,), dic["attributes"])



def json_from_class(cls):
    pass



if __name__ == "__main__":
    name, new_class = class_from_json("test.json")
    locals()[name] = new_class
    a = locals()[name]()
    a.printA("AAA")
