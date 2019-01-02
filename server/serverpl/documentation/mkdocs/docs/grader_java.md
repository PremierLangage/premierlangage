# Java

## Résumé

Ce grader permet d'écrire de petits exercices de Java.

* **Inclusion:** `@ /grader/java.py [grader.py]`

* **Dépendance:**
    * `@ /utils/sandboxio.py`

* **Clés utilisées:** `editor, taboo, stdout_tests, junit, classname`

* **Utilisé par les templates:**
    * [Java](../template_java/)
___



## Utilisation

Pour récupérer la réponse de l'élève, ce grader va cherche la réponse ayant pour id
la valeur de `editor.id`, il convient donc de définir cette clé ainsi que de
définir le champs `input` correspondant dans le formulaire (il est recommandé d'utiliser
[cet éditeur de texte](../text_editor/)).


Pour que la réponse de l'élève puisse être compilée, le nom de la classe doit correspondre à la valeur de la clé `classname`. Par
exemple, si `classname = Main`, l'étudiant doit écrire une classe *Main*.

Ce grader permet de corriger les exercices de deux façon différentes :

* Grâce a des tests sur stdout.
* Grâce à une classe JUnit5.

***Si les deux types de test sont présents, seul les tests sur stdout seront évalués.***


### Stdout

Les tests sur stdout doivent être écris dans la clé `stdout_tests`, chaque ligne
représentant un test. Les test doivent être écrit sous forme de list d'argument
respectant la syntaxe bash, où les deux premiers argument sont respectivement
le nom du test et la sortie attendue. Tout autres argument sera envoyé au
programme de l'étudiant.

Si le premier caractère d'une ligne est un point d'exclamation `!`, le texte sera
"caché", la sortie attendu ainsi que les arguments ne seront pas montré à l'élève
en cas d'échec du test.  
Cela peut être pratique pour éviter que l'étudiant programme en dur la solution
de tout les tests.

La note de l'élève est `R/T*100`, arrondi à l'entier inférieur, où `R` est le nombre de
test réussi et `T` le nombre de test total.

Par exemple:

```
stdout_tests==
"No argument" Hello
James "Hello James" James
"2 arguments" "Hello Jhon and James" Jhon James
!"One argument with space" "Hello Jhon Doe" "Jhon Doe"
==
```

4 tests seront effectués:

* Reçu `Hello` sur stdout en exécutant le code de l'élève sans argument
* Reçu `Hello Jhon` en exécutant le code de l'élève avec l'argument `jhon`
* Reçu `Hello Jhon and James` avec les arguments `jhon james`
* Reçu `Hello Jhon Doe` avec l'argument `"jhon Doe"` (test caché)


### JUnit5

Pour utiliser JUnit5, une classe doit être écrite dans la clé `junit`. Il n'est
pas nécessaire d'importer le code de l'étudiant, celui-ci étant dans le même paquets.

La note de l'élève est 100 si tout les tests passe, 0 si au moins un test ne passe pas,
où si la classe Junit ne compile pas. Il convient donc a l'enseignant de bien tester
son exercice pour s'assurer qu'aucune erreur de compilation/exécution, indépendante
de l'étudiant, le pénalise.

Exemple de classe JUnit:

```java
junit==
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.Assertions;

@DisplayName("Point Test")
class PointTest {
    
    @Test
    @DisplayName("Get X")
    void testGetX() {
        var p = new Point(2, 3);
        Assertions.assertEquals(p.getX(), 2);
    }

    @Test
    @DisplayName("Get Y")
    void testGetY() {
        var p = new Point(2, 3);
        Assertions.assertEquals(p.getY(), 3);
    }
}
==
```

## Exemple

Voici un exemple fonctionnel pour chacun des types de tests.

### Exemple Stdout

[Tester l'exercice](/filebrowser/lib/example/java/opt/?option=entry-direct-test&target=stdout_tests.pl)

```java
title = Stdout Tests

text ==
Write a main printing on stdout:

* `Hello` if not argument was provided.
* `Hello [arg1]` if one argument was provided.
* `Hello [arg1] and [arg2] ... and [argn]` if n argument was provided.
==

classname = HelloWorld

stdout_tests==
"No argument" Hello
James "Hello James" James
"2 arguments" "Hello Jhon and James" Jhon James
!"One argument with space" "Hello Jhon Doe" "Jhon Doe"
==

editor.language = java
editor.id = answer

form =@ /form/text_editor.html
@ /grader/java.py [grader.py]
@ /builder/none.py [builder.py]
@ /utils/sandboxio.py
```


### Exemple JUnit5

[Tester l'exercice](/ffilebrowser/lib/example/java/opt/?option=entry-direct-test&target=junit.pl)

```java
title = Junit

text = Create the methods 'getX()' and 'getY()' for the class Point.

classname = Point

junit==
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.Assertions;

@DisplayName("Point Test")
class PointTest {
    
    @Test
    @DisplayName("Get X")
    void testGetX() {
        var p = new Point(2, 3);
        Assertions.assertEquals(p.getX(), 2);
    }

    @Test
    @DisplayName("Get Y")
    void testGetY() {
        var p = new Point(2, 3);
        Assertions.assertEquals(p.getY(), 3);
    }
}
==

editor.code==
public class Point {
    private int x;
    private int y;
    
    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }
}
==

editor.language = java
editor.id = answer

form =@ /form/text_editor.html
@ /grader/java.py [grader.py]
@ /builder/none.py [builder.py]
@ /utils/sandboxio.py
```
