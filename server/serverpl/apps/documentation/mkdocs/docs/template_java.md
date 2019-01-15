# Java

## Résumé

Ce template permet d'écrire rapidement de petits exercice Java.

* **Inclusion:** `extends = /template/java.pl`

* **Dépendance:**
    * `@ /utils/sandboxio.py`
    * `@ /grader/java.py [grader.py]` ([Documentation](../grader_java/))
    * `@ /builder/before.py [builder.py]` ([Documentation](../before/))
    * `form =@ /form/text_editor.html` ([Documentation](../text_editor/))


* **Clés utilisées**: `editor, form, before, taboo, stdout_tests, junit, classname`
___


## Définition

```java
form =@ /form/text_editor.html
@ /grader/java.py [grader.py]
@ /builder/before.py [builder.py]
@ /utils/sandboxio.py

before==
editor["code"] = (
    "public class %s {\n"
    "    public static void main(String[] args) {\n"
    "        \n"
    "    }\n"
    "}"
) % classname
==

editor.language = java
editor.id = answer

classname = Main
```
## Utilisation

Ce template se sert donc du [grader java](../grader_java/) pour permettre d'écrire
des exercices pour ce langage.

Il définit un stub *Main* grâce à [before](../before/), la classe associée
à ce main étant automatiquement nommée à partir de la clé `classname` (`Main` par défaut).

Le code par défaut peut toujours être modifié en redéfinissant la clé `editor.code`
et vidant `before`:

```java
classname = Point

before=

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
```

Pour faire un test **JUnit5**, il n'est nécessaire que d'importer ce template et d'ajouter
un titre (`title`), un énoncé (`text`), et une classe JUnit5 (`junit`).

Pour faire un test **Stdout**, il n'est nécessaire que d'importer ce template et d'ajouter
un titre (`title`), un énoncé (`text`), et une liste de tests (`stdout_tests`).

## Exemple


### JUnit5

```java
extends = /template/java.pl

title = Junit
text = Create the methods 'getX()' and 'getY()' for the class Point.

classname=Point

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

### Stdout

```
extends = /template/java.pl

title = Stdout Tests

text ==
Write a main printing on stdout:

* `Hello` if not argument was provided.
* `Hello [arg1]` if one argument was provided.
* `Hello [arg1] and [arg2] ... and [argn]` if n argument was provided.
==

stdout_tests==
"No argument" Hello
James "Hello James" James
"2 arguments" "Hello Jhon and James" Jhon James
!"One argument with space" "Hello Jhon Doe" "Jhon Doe"
==
```