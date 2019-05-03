



doc="""
    Inspector is a set of operation to test the code of the student.

    it returns false if no problems

    it returns true,warningmsg if any problems
    
    exemples are 
    if in the pl we have 
    taboo=word1Lword2|word3
    then inspector with check that student.py dosn't contains those words
    Warning: if the word are in comments it will return True

    

    should=case|switch|default 
    then inspector will check the presence of the 2 words
    

    TODO : define a way to add lambda (use created tests)
     
    """

import json
from graderC import exercice
class Inspector:
    def __init__(self):
        self.dic=exercice
        self.student=open("student.py","r").read()

    def test(self):
        if "taboo" in dic:
            for w in dic['taboo'].split('|'):
                if w=="egalegal":
                    if "==" in self.student :
                        return True," Interdit d'utiliser le test d'égalité \n"
                elif w in self.student :
                    return True," Interdit d'utiliser le mot :"+w+"\n"
        if "should" in dic:
            for w in dic['should'].split('|'):
                if w not in self.student :
                    return True," Vous devez utiliser le motclef :"+w+"\n"
        return False,None


