

import os
import sys
import pathlib
from .question import Question

class Pltp:
    """
    classe de manipulation des fichiers pltp
    """
    @classmethod
    def create(cls,filename,rootdir):
        """
        creation d'un objet Pltp a partir d'un fichier pltp
        dans un repository de racine rootdir
        """
        print(rootdir+" ---- "+filename)
        path = pathlib.Path(rootdir) / pathlib.Path(filename[1:])
        if not path.exists():
            print("No file :",path)
            sys.exit(-1)
        dico=question.parse(str(path),{})
        return cls(path,dico)

    def __init__(self,path,dico):
        """
        initialise et charge  les fichiers pl
        
        """
        self.path = path
        self.dico = dico
        self.listpl=list()
        self.taglist=[]
        lines=question.openandsplit(str(path))
        for line in lines:
            if line!= '' and line[0]=='@':
                i=1
                while line[i]==' ': # elimination des blanc entre le @ et le nom
                    i=i+1
                plfilename=line[i:]
                self.listpl.append(plfilename)
            elif line.startswith("concept=="):
                tag=line[9:]
                self.taglist.append((tag,len(self.listpl)))




