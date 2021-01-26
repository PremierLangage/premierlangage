# pylint: disable=no-name-in-module

import random
import uuid
from typing import Dict, List



class AutomatonEditor(Component):


    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.selector = 'c-automaton-editor'



class AutomatonViewer(Component):


    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.selector = 'c-automaton-viewer'

class Buttons(Component):


    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.selector = 'c-buttons'





class CheckboxGroup(Component):


    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.selector = 'c-checkbox-group'



class CodeEditor(Component):


    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.selector = 'c-code-editor'




class Countdown(Component):


    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.selector = 'c-countdown'




class DragDrop(Component):


    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.selector = 'c-drag-drop'




class GraphViewer(Component):


    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.selector = 'c-graph-viewer'




class Hint(Component):


    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.selector = 'c-hint'




class Input(Component):


    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.selector = 'c-input'




class JSXGraph(Component):


    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.selector = 'c-jsxgraph'




class MathInput(Component):


    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.selector = 'c-math-input'




class MatchList(Component):


    def __init__(self, **kwargs):
        self.links: List[Dict] = []
        super().__init__(**kwargs)
        self.selector = 'c-match-list'




class MathMatrix(Component):


    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.selector = 'c-math-matrix'




class RadioGroup(Component):


    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.selector = 'c-radio-group'




class SortList(Component):

    def __init__(self, **kwargs):
        self._answer = []
        super().__init__(**kwargs)
        self.selector = 'c-sort-list'


    def remind(self):
        """
        Saves the current ordering of the items
        to provides auto correction when self.auto_grade()
        will be called.
        The method stores the id properties of the items
        in a list and compares it with the list retrieved
        during evaluation.
        Then it will randomize the items
        """

        # since self._answer starts with '_'
        # it will be hidden to the student

        self._answer = []
        for e in self.items:
            self._answer.append(e['id'])

        random.shuffle(self.items)


    def parse_string(self, items: str, separator="\n"):
        """
        Assumes that current type of self.items is str
        and initializes items to the JSON format required
        by the component in JS.
        The method will split the items by using the argument separator.
        """
        items = items.split(separator)
        self.items = []
        for e in items:
            if e.strip():
                self.items.append({
                    "id":      str(uuid.uuid4()),
                    "content": e,
                })



    def auto_grade(self):
        """
        Provides an grade according to the answer of a student using the list
        saved during the last call to self.remind()
        """

        score = 0
        if len(self._answer) != len(self.items):
            for e in self.items:
                e["css"] = "error-state anim-fade"
            return 0

        for i, e in enumerate(self._answer):
            self.items[i]['css'] = 'success-state anim-fade'
            score += 1
            if self.items[i]['id'] != e:
                self.items[i]['css'] = 'error-state anim-fade'
                score -= 1

        return score / len(self._answer)



class TextSelect(Component):


    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.selector = 'c-text-select'
