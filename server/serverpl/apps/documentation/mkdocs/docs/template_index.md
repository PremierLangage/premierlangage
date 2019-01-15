# Index des Templates

Ici se trouve la liste des Templates prédéfinis de la plateforme. Pour chacun, un exemple
est présent ainsi qu'une liste de mots-clés afin de plus facilement le retrouver.
___


## Java

* [Documentation du grader](../template_java/)

* mots-clés : `programmation, java, junit, stdout, programming`

Exemples:

***Stdout***
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

***JUnit5***
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
___