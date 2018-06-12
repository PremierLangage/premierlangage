
# -*- coding: utf-8 -*-

from feedback import Feedback, subnlbybr
import subprocess
from plutils import *
import json
def getOutput(inputstr=None):
    # FIXME
    pass

def removespaces(s):
	s= "".join(s.split(" "))
	s= "".join(s.split("\n"))
	s= "".join(s.split("\t"))
	return s

def compare(s1,s2):
	"""
	returns 0 if equals
	1 if withoutspaces equals
	2 if s1 in s2 or s2 in s1
	"""
	if s1 == s2 :
		return 0
	elif removespaces(s1) == removespaces(s2):
		return 1
	elif s1 in s2 :
		return 2
	else:
		 return 10




class Grader:
    def __init__(self):
        try:
            self.pld= json.load(open("pl.json","r"))
            
        except Exception as e:
            
            self.fb = Feedback()
            #self.fb.addFeedback( "# erreur de plateforme \n pl.json illissible\n")
            self.fb.adddiv("err","# erreur de plateforme \n pl.json illissible\n")
            self.fb.success = True
            self.fb.flags="-Wall -ansi"
            self.doOutput()
            sys.exit(1)
        self.fb =  Feedback()
        self.fb.success=True
        self.fb.flags="-Wall -ansi"
        

    def generate_feedback_compilation(self,flags, compil_state):
      
        if compil_state == "error":
            gcc_state = 'Erreur'
        else:
            gcc_state = 'Réussie'
        
        compil_fb = ""
        if compil_state == "error":
            compil_fb += 'Il y a des erreurs dans votre programme.'
        else:
            compil_fb += 'Aucune erreur détecté.<br />'
            
        if compil_state == "error":
            compil_fb += '<br />Erreur dans votre programme: <br />'
            #compil_fb += self.terminal_code(gcc_msg)

        return compil_fb;

    def compilestudent(self):
            EEE=None

            import py_compile
            try:
                x= py_compile.compile("student",doraise=True)
                
            except Exception as EE:
                self.fb.addCompilationError("")
                #self.fb.addFeedback(self.fb.generate_feedback_compilation(self.fb.flags,"error",str(EE)))
                #errcompil=generate_feedback_compilation2(str(EE),self.fb.flags) ici
                self.fb.adddiv("errcompil",self.generate_feedback_compilation(self.fb.flags,"error"))
                self.fb.adddiv("errcompilfin",subnlbybr(str(EE)))

                if "compilehelp" in self.pld:
                    self.fb.adddiv("compilehelp",self.pld['compilehelp'])
                    #self.fb.addFeedback(self.pld['compilehelp'])
                self.fb.success=False
                self.fb.compilation=False
                return False
            else:
                
                #self.fb.addFeedback(self.fb.generate_feedback_compilation(self.fb.flags,"",""))
                self.fb.adddiv("compil",self.generate_feedback_compilation(self.fb.flags,""))

                return True # compilation ok

    def doOutput(self):
       
        if "showinput" in self.pld: # valeur sans importance
            self.fb.showinput =True
        if "failure" in self.pld and not self.fb.success :
            self.fb.addFeedback(self.pld["failure"])
            #self.fb.adddiv("failure",self.pld["failure"])
           

        if "taboo" in self.pld and checktaboo(self.pld["taboo"],"student"):
            self.fb.adddiv("ftaboo"," la liste des mots taboo "+self.pld["taboo"]+". Raté !\n <br>Ces mots ne doivent pas apparaitre dans votre solution !\n")
            #self.fb.addFeedback(" la liste des mots taboo "+self.pld["taboo"]+". Raté !\n")
            #self.fb.addFeedback(" ces mots ne doivent pas apparaitre dans votre solution !\n")
            self.fb.success = False
        
        if "needed" in self.pld and checkneeded(self.pld["needed"],"student"):
            self.fb.addFeedback(" la liste des mots obligatoires :"+self.pld["needed"]+". Raté !\n")
            self.fb.addFeedback(" ces mots doivent apparaitres dans votre solution !\n")
            self.fb.success = False
        
        
        dico_response = { "success": self.fb.success , "errormessages" : "","feedback": self.fb.feedback(), "other": "","error":"XK11","execution": "","grade":"1"}
        return(json.dumps(dico_response))

    def expectedoutput(self):
        if not "expectedoutput" in self.pld:
            return False
        expected = self.pld["expectedoutput"]
        stdinput = self.pld["input0"] if "input0" in self.pld else None
        if stdinput and type(stdinput) != type("") :
                self.fb.addFeedback("WARNING illegal type in input value")
                stdintput= str(stdinput)
        self.compareExpectedOutput(expected,0,stdinput)
        return True

    def compareExpectedOutput(self,expected,i,stdinput=None):
        """
        Compare the output from student to expected argument
        update feedback in consequence
        return True if sucessfull
        """
        tmp=0
        r,t = self.getStudentOutput(stdinput)
        c=compare(expected,t) # si egal ou contient ce qui est attendu 
        if r and  c < 3 :
            if self.fb.showinput and stdinput :
                self.fb.addOutput("input:\n"+stdinput)
            #self.fb.addOutput(expected)
            self.fb.adddiv("ventree output"+str(i),"Entrée :"+self.fb.resultat(subnlbybr(stdinput))+"Attendue:"+self.fb.resultat(subnlbybr(expected))+"Obtenue:"+self.fb.resultat(subnlbybr(expected)))
            self.fb.success = True
        elif r :
            if "nohint" in self.pld: # don't tel the answer
                self.fb.addOutput(expected)
            else:
                self.fb.adddiv("entree expected obtenu"+str(i),"Entrée: "+self.fb.resultat(subnlbybr(stdinput))+"\n Attendue: "+self.fb.resultat(subnlbybr(expected))+"Obtenue:"+ self.fb.resultat(subnlbybr(t)))
                
                self.fb.addExpectedOptained(t, expected)
                #self.fb.addFeedback("\nDifférence ="+str(c)+"\n")
            self.fb.success = False
        else: # erreur d'execution r = False
            #self.fb.addCompilationError(t)
            for x,y in self.fb.div:
                if y=="errcompil":
                    tmp=1
            if tmp!=1:
                self.fb.addCompilationError("")
                self.fb.adddiv("errcompil",self.generate_feedback_compilation(self.fb.flags,"error"))
                self.fb.adddiv("errcompilfin",subnlbybr(str(t)))
            if "compilehelp" in self.pld:
                self.fb.addFeedback(self.pld['compilehelp'])
            self.fb.success = False
        return self.fb.success

    def getStudentOutput(self, stdinput=None):
        # execute student
         
        return self.execute(["python3","student"],instr=stdinput)

    def getSoluceOutput(self, stdinput=None):
      
        r,out = self.execute(["python3","soluce.py"],instr=stdinput)
        if not r:
            self.fb.adddiv("info","probleme with the soluce")
            self.fb.adddiv("info2",out)
            #self.fb.addFeedback("Problemes with the soluce")
            #self.fb.addFeedback(out)
        return (r,out)

    def execute(self,args,instr):
        try:
            if instr :
                encoded = instr.encode("utf-8")
            else:
                encoded = None
            tt = subprocess.check_output(args,input=encoded,
                                stderr=subprocess.STDOUT)
            return (True,tt.decode("utf-8"))
        except subprocess.CalledProcessError as cpe:
             return (False,cpe.stdout.decode("utf-8"))

    def inputoutput(self):
        if  not "output0" in self.pld:
            return False
        si="input0"
        so="output0"
        i= 0
        while si in self.pld and so in self.pld:
            self.fb.asio=True
            #self.fb.adddiv("Entree",self.pld[si])
            #self.fb.addInput("Entrée:"+self.pld[si])
            r = self.compareExpectedOutput(self.pld[so],
                    i,stdinput=self.pld[si])
            #if not r:
            #    return True
            i=i+1
            si="input"+str(i)
            so="output"+str(i)
        return True

    def inputsoluce(self):
        if  not "soluce" in self.pld:
            return False
        si="input0"
        i= 0
        while si in self.pld :
            self.fb.asio=True
            self.fb.addInput("Entrée:"+self.pld[si])
            r,soloutput = self.getSoluceOutput(stdinput=self.pld[si])
            if not r:
                return False
            r = self.compareExpectedOutput(soloutput,i,
                    stdinput=self.pld[si])
            if not r:
                return True
            i=i+1
            si="input"+str(i)
        return True

    def getrandomgenerated(self,num):
        r,out = self.execute(["python3","inputgenerator.py",str(num)],None)
        if not r:
            self.fb.addFeedback("Problemes with the input generator ")
            self.fb.addFeedback(out)
        return (r,out)

    def direct(self):
        if  not "direct" in self.pld:
            return False
        if not "expectedoutput" in self.pld:
            return False
        with open("student","r") as f:
            x=f.read().split("\n")[0]
        if x == self.pld["expectedoutput"]: # FIXME ASSERT 
            self.fb.success = True
        else:
            self.fb.success = False
            if "#" in x:
                self.fb.addFeedback("ne mettez pas de commentaires dans votre réponse")
            if "" == x :
                self.fb.addFeedback("sur la première ligne votre réponse")
            
            self.fb.addFeedback("la valeur attendu était "+self.pld["expectedoutput"])
        return True

    def generatorsoluce(self):
        if  not "soluceX" in self.pld or not "inputgenerator" in self.pld:
            return False
        if "numberofgenerator" in self.pld:
            num=int(self.pld["numberofgenerator"])
        else:
            num=4
        self.fb.showinput = True # random ...
        for x in range(num):
        
            self.fb.asio=True
            r,stdinput = self.getrandomgenerated(x)
            if not r:
                return False
            r,soloutput = self.getSoluceOutput(stdinput=stdinput)
            if not r:
                return False
            r = self.compareExpectedOutput(soloutput,x,
                    stdinput=stdinput)
            if not r:
                return True
        return True

    def dopltest(self):

        if not "pltest" in self.pld :
            return False
        try:
            with open("pltest.py","w") as pltf :
                with open("student","r") as f:
                    print("",end="\n",file=pltf)
                    print('\"\"\"\n'+self.pld["pltest"]+'>>> \n\"\"\"',file=pltf)
                    print(f.read(),file=pltf)
        except Exception as e:
           
           return False

        import os
        os.environ['TERM']="linux"# bug in readlinehttps://bugs.python.org/msg191824
        if 'mode' in self.pld and self.pld['mode'] == 2:
            r,out=self.execute(['python3','-B','-m','pldoctest','-f','pltest.py'],instr=None)
        else:
            r,out=self.execute(['python3','-B','-m','pldoctest','pltest.py'],instr=None)

        self.fb.success = r
        if r :
           res=0
           i=0
           #self.fb.addFeedback(out)
           liste = out.split('debut')
           for n in liste:
               if n != "" and n[1]=="T":
                   self.fb.addsymbole(n,'resume',True) 
               elif n != "" and i!=(len(liste) -2): 
                self.fb.addsymbole(n,i,True)
                i+=1
              
           
           #self.fb.adddiv("testT",out)

            
        else:
            #r,out=self.execute(['python3','-B','-m','pldoctest','-f','pltest.py'],instr=None)
            #elf.fb.addOutput("<h2>Echec de tests</h2>")
            res=0
            i=0
            #self.fb.addFeedback(out)
            
            liste = out.split('debut')
            for n in liste:
                
                if n != "" and i!=(len(liste) -2):
                    if n != "" and n[1]=="T":
                        self.fb.addsymbole(n,'resume',False)  
                    elif n.find('False') !=-1:
                        self.fb.addsymbole(n,i,False)
                    else:
                        self.fb.addsymbole(n,i,True)
                    i+=1
                
            self.fb.addOutput(out)
        return True

    def grade(self):
        """
        direct
        compile
        expectedoutput ?
        input/output
        input/soluce
        inputgenerator/soluce
        input/soluce
        pltest
        """

        if self.direct():
            return self.doOutput()
        elif not self.compilestudent():
            return self.doOutput()
        elif self.expectedoutput() :
            return self.doOutput()
        elif self.inputoutput():
            if "showinput" in self.pld and self.pld['showinput']:
                self.fb.showinput=True
            return self.doOutput()
        elif self.generatorsoluce():
            return self.doOutput()
        elif self.inputsoluce():
            return self.doOutput()
        elif self.dopltest():
            return self.doOutput()
        # Default response should by an plateforme error
        # or a good answer to pass to next exercice
        if "author" in self.pld:
            self.fb.addFeedback("<H1> Problème exercice mal défini </H1> Contacter l'auteur: "+self.pld["author"]+"\n Passez à l'exercice suivant.")
        else:
            self.fb.addFeedback("<H1> Problème exercice mal défini </H1>Contacter l'auteur, ou l'administrateur \n Passez à l'exercice suivant.")
        return self.doOutput()
