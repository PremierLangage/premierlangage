# Écrire un Parseur

Si vous le souhaitez, il vous est possible d'écrire un parseur utilisant votre propre syntaxe.
Le fichier contenant le parser doit respecter quelques consignes:

* Une classe avec un constructeur acceptant un répertoire et un chemin
* Une méthode **parse(self)** retournant un tuple:
    * Un dictionnaire contenant les clés du fichier parser
    * Une liste (peut être vide) de warnings (str).
* Une fonction **get_parser()** retournant un dictionnaire à 3 clés:
    * __ext__: Une liste d'extension de fichier qui utilisera ce parser
    * __parser__: La classe s'occupant de parser le fichier
    * __type__: Le type du fichier obtenu ('pl' ou 'pltp')
* L'ensemble des erreurs (syntaxe, semantic, chemin_incorrect) doit lever une exception correspondante contenant le chemin du fichier en train d'être parser et si possible la ligne et le numéro de ligne. Certaines exceptions prédéfinies peuvent être importé de *loader.exceptions*, voir [Exceptions prédéfinies](./parser_exception/).

De plus, le dictionnaire retourner par la méthode **parse(self)** doit respecter quelques règles:

* PL & PLTP
    * Le dictionnaire doit contenir une clé *__format* contenant l'extension du fichier
    * Les fichier à étendre doivent être listé à la clé *__extends* sous forme de dictionnaire contenant:
        * __path__: le chemin respectant la syntaxe de l'opérateur **@** (sans alias)
        * __line__: la ligne complète où le *extends=path* a été déclaré
        * __lineno__: le numéro de la ligne où le *extends=path* a été déclaré

* PL
    * L'ensemble des fichier à envoyé à la sandbox doivent être stockés à la clé *\_\_file*, qui un dictionnaire de la forme 'nom_fichier': 'contenue'. Par exemple la clé *dic['\_\_file']['grader.py']* contient le contenue de *grader.py*.

* PLTP
    * L'ensemble des PL associer au PLTP doivent être stockés à la clé *__pl*, qui est simplement une liste de chemin respectant la syntaxe de l'opérateur **@** (sans alias).
