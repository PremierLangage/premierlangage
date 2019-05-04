extends = ~/template/java.pl

title = Junit
text = Create the methods `getX()` and `getY()` for the class Point.

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


