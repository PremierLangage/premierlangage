#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  Question.py
#  
#  Copyright 2017 Dominique Revuz <dr@univ-mlv.fr>
#  
#  This program is free software; you can redistribute it and/or modify
#  it under the terms of the GNU General Public License as published by
#  the Free Software Foundation; either version 2 of the License, or
#  (at your option) any later version.
#  
#  This program is distributed in the hope that it will be useful,
#  but WITHOUT ANY WARRANTY; without even the implied warranty of
#  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#  GNU General Public License for more details.
#  
#  You should have received a copy of the GNU General Public License
#  along with this program; if not, write to the Free Software
#  Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
#  MA 02110-1301, USA.
#  
#  


import os
import re
import json
import time
from pathlib import Path

def openandsplit(filename):
    """
    FIXME is the file closed 
    """
    try:
        with open(filename,"r") as f:
            return f.read().split("\n")
    except IOError as e:
        raise ErrorPL("Can't open file "+ filename+"\n"+str(e))


concept='^concept==(?P<value>.*)$'
recon=re.compile(concept)
name='^(?P<name>\w*)\s*'
operator='(?P<op>=|==|=@)\s*'
value='(?P<value>[^\s=@#]*)'
commentANDend='($|(?P<comment>#.*)$)'
li=re.compile(name+operator+value+commentANDend)#,re.DEBUG)
starmulti=re.compile("^(?P<name>\w*)\s*(?P<op>==).*$")#,re.DEBUG)
debug=False

def parseOneLine(line,d):
    if line =="" or line.startswith("#"):
        return (False,None)
    if debug:
        print("{{"+line+"}}")
    zz=recon.search(line)
    if zz != None:
        if "concept" in d:
            d["concept"].append(zz.group("value"))
        else:
            d["concept"] = [zz.group("value")]
        return (True,"concept-"+zz.group("value"))
    xx = li.search(line)
    if xx == None:
        if debug:
            print("problème  de format avec la ligne :"+line)
        xx== starmulti.search(line)
        if xx == None :
            if debug:
                print("problème  :"+line)
            return False,None
    if xx.group("op")== "==":
        return (True,(xx.group("name")))
    elif xx.group("op")== "=@":
        if not "files" in d:
            d['files']=[]
        d['files'].append(xx.group("value"))
    elif xx.group("op")== "=":
        if xx.group("name") in d:
           print("Warning : redéfinition de %s\n  %s \nen:\n %s" % (xx.group("name"),d[xx.group("name")],xx.group("value")))
        d[xx.group("name")]=xx.group("value")
    return (False,None)

def parse(filename,currentdict=None):
    """
    parse filename for values pairs adding them to currendict
    """
    currendict = {} if currentdict == None else currentdict
    multi = False
    for line in openandsplit(filename):
        # in multi line 
        if multi :
            # end of multi line 
            if line=="==" : 
                currentdict[multiname]=multivalue
                multi = False
                multiname = None
            else: # in multi line 
                multivalue += line + "\n"
        else:
            multi,multiname = parseOneLine(line,currentdict)
            multivalue=""
    return currentdict

def makepath(plname,root):
    """
    concat with a unique / in between
    """
    if (root.endswith('/') and not plname[0] =='/' ) or ( not root.endswith('/') and  plname[0] =='/') :
        return root+plname
    elif root.endswith('/') and plname[0] =='/'  :
        return root+plname[1:]
    else:
        return root+"/"+plname

class ErrorPL(Exception):
    pass

class Question:
    def __init__(self,filename,root=None):
        """
        load a local.pl or local.pltp file into a question
        and save it
        root is the top directory in repository 
        """
        if root == None and not "root" in os.environ:
            raise ErrorPL(" No root defined")
        dico={"url":filename}
        # FIXME hould create a unique name in the repo
        # the url should be from the top of the repo  dico={"url":filename+"_"+os.path.basename(root)}
        ends = ".pl" if filename.endswith(".pl") else ".pltp" 
        parse(makepath(filename,root),dico)
        #printdico(dico)
        ### Appel récursif sur le template 
        while "template" in dico:
            templatename = dico['template']
            if not templatename.endswith(ends) :
                templatename += ends
            del dico['template'] # on boucle sur les templates
            dico =parse(makepath(templatename,root),dico)
        # read the files
        if 'files' in dico:
            dico["basefiles"]={}
            l = dico['files']
            del dico['files']
            for x in l:
                name = os.path.basename(x)
                if name in dico:
                    perror("le nom ",name, " est déja défini ")
                try:
                    f= open(makepath(x,root),"r")
                    dico["basefiles"][name]=f.read()
                except Exception as e:
                    print(e)
                    print("le fichier de la directive files",makepath(x,root),"ne peut être ouvert")
                    raise ErrorPL("Format de fichier pl "+filename+" incorrect")
        self.dico = dico
        self.json = json.dumps(dico)
        self.filename = filename
        self.qname = "/tmp/"+os.path.basename(filename)+str(time.time())

    def getcleanjson(self):
        """
        fournir un pl.json sans les fichiers d'environement 
        """
        dico=self.dico.copy() # shalow copie as we remove second level data in the copied
        for key in ["basefiles","grader","soluce"]:
            if key in dico:
                del dico[key]
        return str(json.dumps(dico))
        
    def _createdir(self, pathdir):
        # create a rep in /tmp/ with every thing except the student file 
        pathdir.mkdir(parents=True)
        # 1
        for name,trad in [('grader','grader.py'),('soluce','soluce.py'),('inputgenerator','inputgenerator.py')]:
            if name in self.dico:
                with pathdir.joinpath(trad).open(mode="w") as f:
                    print(self.dico[name],file=f)
        # 2
        if "basefiles" in self.dico:
            for thefile in self.dico["basefiles"].keys():
                with pathdir.joinpath(thefile).open(mode="w") as f:
                        print(self.dico["basefiles"][thefile],file=f)
        # directory ready to run only the stduent's file is missing

    def creatZip(self,p):
        # create dir from the directory pathdir
        from shutil import rmtree,move
        rmtree('/tmp/env/', ignore_errors=True)
        self.zipname = str(p.resolve() /  "env.zip")
        with cd.cd(str(p)) :
            subprocess.run(['zip','-qjr','env.zip','.'])
        
        os.move(self.zipname,)

    def createdir(self,studentfilestr,pathdir=None):
        """
        creation of the directory for the execution of the grading 
        action
        1) creating files from pl elements
        2) saving file from the pldict
        3) save student file 
        """
        
        if studentfilestr == None:
            if not "student.py" in self.dico and not "student" in self.dico:
                        raise ErrorPL("creatDir needs the student file ")
            elif "student" in self.dico:
                studentfilestr=self.dico["student"]
            elif "student.py" in self.dico:
                studentfilestr=self.dico["student.py"]
        if pathdir == None :
            pathdir = Path('/tmp/env/'+str(time.time()))
        
        self._createdir(pathdir)
        
        with  pathdir.joinpath("student.py").open(mode="w") as f:
                    print(studentfilestr,file=f)
        if debug :
            for k,v in self.dico.items():
                print(k+" == " )
        if "basefiles" in self.dico:
            del self.dico["basefiles"]
        self.pdir = pathdir
        with pathdir.joinpath("pl.json").open(mode="w") as f:
            json.dump(self.dico,fp=f)
        print(" exercice sauvegardé dans "+str(self.pdir))
        return self.pdir

    def checkgrader(self):
        if not "grader" in self.dico:
            if not "basefiles" in self.dico :
                raise ErrorPL("No grader")
            else:
                if not "grader.py" in self.dico["basefiles"]:
                    raise ErrorPL("No grader")
                else:
                    self.dico["grader"]=self.dico["basefiles"]["garder.py"]
        if "hidden" in self.dico:
            raise ErrorPL("hidden est un mot clefs réservé sur la version php pourrie du plugin moodle fait par les autres ")


def printdico(d):
    for k in d.keys():
        if type(d[k]) == str :
            print(k,"=",d[k][0:30])
        elif type(d[k]) == list :
            print(k,"==",d[k][0])
        elif type(d[k]) == dict :
            for kk in d[k].keys():
                print(d[k][kk])
        else:
            print("Type étrange ")



if __name__ == '__main__':
    print("not a cli action")

