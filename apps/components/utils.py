import sys
import json
import importlib
import inspect
import uuid
import random



def components_source():
    mod = sys.modules[__name__]
    return inspect.getsource(mod)



SELECTORS = {
    "AutomatonDrawer": "c-automaton-drawer",
    "AutomatonEditor": "c-automaton-editor",
    "CheckboxGroup":   "c-checkbox-group",
    "CodeEditor":      "c-code-editor",
    "DragDrop":        "c-drag-drop",
    "GraphDrawer":     "c-graph-drawer",
    "Input":           "c-input",
    "MatchList":       "c-match-list",
    "MathDrawer":      "c-math-drawer",
    "MathInput":       "c-math-input",
    "MathMatrix":      "c-math-matrix",
    "RadioGroup":      "c-radio-group",
    "SortList":        "c-sort-list",
    "Text":            "c-text",
    "TransfertList":   "c-transfert-list"
}



class Component:
    
    def __init__(self, **kwargs):
        for k, v in kwargs.items():
            setattr(self, k, v)
    
    
    def __str__(self):
        return str(vars(self))
    
    
    @staticmethod
    def deserialize(target, data):
        
        if isinstance(target, Component):
            for k, v in data.items():
                setattr(target, k, v)
            return target
        
        decorator = None
        
        if isinstance(target, dict):
            decorator = data.get('decorator')
        
        if decorator:
            module = importlib.import_module(decorator.lower())
            return getattr(module, decorator)(**data)
        else:
            for k in SELECTORS:
                if SELECTORS[k] == data['selector']:
                    cls = globals().get(k)
                    if not cls:
                        break
                    return globals()[k](**data)
        
        return Component(**data)
    
    
    @staticmethod
    def sync_context(context):
        context['Component'] = Component
        
        # tranform dict with cid properties to a component
        for k, v in context.items():
            if isinstance(v, dict) and 'cid' in v:
                context[k] = Component.deserialize(v, v)
        
        # sync answers with context in grader
        answers = None
        for arg in sys.argv:
            if arg == 'answers.json':
                with open(arg, "r") as f:
                    answers = json.load(f)
                    break
        
        copy = dict(context)
        if answers:
            for k, v in answers.items():
                if isinstance(v, dict) and "cid" in v:
                    for k2, v2 in copy.items():
                        if isinstance(v2, Component) and v2.cid == v["cid"]:
                            context[k2] = Component.deserialize(v2, v)
    
    
    @staticmethod
    def from_context(context):
        components = {}
        for k, v in context.items():
            if isinstance(v, dict) and 'cid' in v:
                components[k] = {
                    e: v[e] for e in v if not e.startswith('_')
                }
            elif isinstance(v, Component):
                pass
                # TODO check if instanceof Component
        return components



class SortList(Component):
    
    def __init__(self, **kwargs):
        self._answer = []
        super().__init__(**kwargs)
    
    
    def remind(self):
        self._answer = []
        for e in self.items:
            self._answer.append(e['id'])
    
    
    def string_format(self, separator="#"):
        items = self.items.split(separator)
        self.items = []
        for e in items:
            if e.strip():
                self.items.append({
                    "id":      str(uuid.uuid4()),
                    "content": e,
                })
    
    
    def randomize(self):
        random.shuffle(self.items)
    
    
    def auto_grade(self):
        score = 0
        if len(self._answer) != len(self.items):
            for e in self.items:
                e["css"] = "error-state"
            return 0
        
        for i, e in enumerate(self._answer):
            self.items[i]['css'] = 'success-state'
            score += 1
            if self.items[i]['id'] != e:
                self.items[i]['css'] = 'error-state'
                score -= 1
        
        return score / len(self._answer)
