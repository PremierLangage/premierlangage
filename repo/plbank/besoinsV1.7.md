Besoin sur la version 1.7 de PL:

1) correction du parseur (validation par des tests du patch de DR)
2) connection du logger (interfacesage avec pl.univ-mlv.fr/pldata/add )
3) Colloration syntaxique/css /etc/markdown/latex des évaluations
4) Transfert de technologie  
5) Possibilité de recharger un fichier pltp sur la plateforme moodle.


 

Autres besoins
1) il faut que l'étudiant puisse uploader un fichier.
2) la possibilité de faire des variations sur l'énoncé de façon a ce
qu'un étudiant ne puisse pas faire copier coler :
- pour cela pouvoir paramêtrer l'énoncé et la soluce avec des variables,
- pouvoir ajouter et retirer des contraintes sur l'algo demandé
4) écriture de la partie jail en bash, (c'est à dire toute la partie exécution du student.py etc qui doit être spécifique au python) c'est cet exécutable qui appel le grader.


Le git sur le serveur.

doctest revue pour ne pas afficher certaines lignes:
    >>> l=generate_new_list(12) # ligne pas affichée
    >>> soussuite(l,[l[5],l[6],l[7]])
    True
    >>>sousliste(l,[l[5],l[6],l[7]])
    True
