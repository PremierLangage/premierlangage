# plbank

la banque d'outils pl "librairie standard" du projet d'exercice.
la publication dans cette banque suit un protocol spécifique.

la plbank est installé automatiquement avec le server premierlangage. 
Par défaut elle n'est pas accessible en écriture.


## organisation 

Quelques remarques avant de commencer sur l'organisation des fichiers.

template contient les templates génériques que vous pouvez réutiliser grace à la commande extend.

pysrc contient des codes python utilisable dans les balises build et evaluator (PYTHONPATH).


## principe de révision

Les fichiers dans plbank doivent submire un processus de revue.
1) il doivent être associé à un test fonctionnel unitaire 
2) il doivent avoir été revus (qualité du code)
3) le python doit  vérifier le pep8
4) les Principes SOLID doivent avoir été utilisés.






