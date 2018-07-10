



## Discution sur le format étendu

l'idée est d'avoir un format qui permette d'une part de faire des exercices pybox d'autre part des cours en ligne.


###

Ecrire au kilomêtre et sortir plusieurs formats, avoir des elements de code facilement insérables.

Les différents formats :

. format de presentation
. format de polycopié
. format pour le web
. format pour le glossaire web (knowls)
. format pour les exercices pybox




##  les choix techniques

Utilisation d'une chaine d'édition simple, différents choix possibles:

. markdown
. asciidoc
. Textile

Motivation pour prendre l'un plus tot que l'autre :

. outils existants
.. traducteur DocBook
.. traducteur latex
.. traducteur html
.. pybox ? qqcvd
. extensions (mécanisme et facilité d'extensibilité)
. formalisation du langage
. possibilité de créer des alias


### une syntaxe uniforme sur l'ensemble des supports

L'idée est déviter d'avoir plusieurs formats a connaitre mais d'être capable de fournir plusieurs formats.


////

### exemples de code:
[source,python]
.python
````
def toto(request):
    return HttpRender(request)
````
[source,ruby]
.Code Ruby
````
class Sinatra::Application
  set :protection, :except => [:http_origin]

  # Retourne la liste des langages disponibles sur la plateforme
  # Return: Json Array
  get '/languages' do
    languages = JSON.parse(IO.read("config_languages.json"))

    array = []
    languages["languages"].each_key do |language|
      array << language
    end

    json :languages => array
  end
````







Le code suivant est une autre implémentation du solver de base doit être dans la doc technique
[source,python]
solver avec deux strings
````
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  SOLVER TWO STRINGS
#  parameters the two strings to exec and compare
#  Copyright 2015 Dominique Revuz <dr@u-pem.fr>
#
import importlib
import unittest
from io import StringIO
import sys

def domodule( name):
    old_stdout = sys.stdout
    sys.stdout = tmpstdout = StringIO()
    exec(name)
    sys.stdout =    old_stdout
    return tmpstdout


if __name__ == '__main__':
    unittest.TestCase().assertEqual(domodule(sys.argv[1]).getvalue(),domodule(sys.argv[2]).getvalue())
else:
    raise(Exception(" must not be imported "))
````

