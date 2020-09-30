---
title: "[Q#7359189][A#7359252] How to change the mouse cursor in java?"
---

https://stackoverflow.com/q/7359189

I have a list of words inside the JList. Every time I point the mouse cursor at a word, I want the cursor to change into a hand cursor. Now my problem is how to do that?
Could someone help me with this problem?



## Original code snippet

https://stackoverflow.com/a/7359252

Use a MouseMotionListener on your JList to detect when the mouse enters it and then call setCursor to convert it into a HAND_CURSOR.
Sample code:

```java
final JList list = new JList(new String[] {"a","b","c"});
list.addMouseMotionListener(new MouseMotionListener() {
    @Override
    public void mouseMoved(MouseEvent e) {
        final int x = e.getX();
        final int y = e.getY();
        // only display a hand if the cursor is over the items
        final Rectangle cellBounds = list.getCellBounds(0, list.getModel().getSize() - 1);
        if (cellBounds != null && cellBounds.contains(x, y)) {
            list.setCursor(new Cursor(Cursor.HAND_CURSOR));
        } else {
            list.setCursor(new Cursor(Cursor.DEFAULT_CURSOR));
        }
    }

    @Override
    public void mouseDragged(MouseEvent e) {
    }
});
```

## Produced APIzation

[`APIzator7359252.java`](/data/search/java/APIzator7359252.java)

```java
package com.stackoverflow.api;

import java.awt.Cursor;
import java.awt.Rectangle;
import java.awt.event.MouseEvent;
import java.awt.event.MouseMotionListener;
import javax.swing.JList;

/**
 * How to change the mouse cursor in java?
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/7359252">https://stackoverflow.com/a/7359252</a>
 */
public class APIzator7359252 {

  public static void changeCursor(JList list) throws RuntimeException {
    list.addMouseMotionListener(
      new MouseMotionListener() {

        @Override
        public void mouseMoved(MouseEvent e) {
          final int x = e.getX();
          final int y = e.getY();
          // only display a hand if the cursor is over the items
          final Rectangle cellBounds = list.getCellBounds(
            0,
            list.getModel().getSize() - 1
          );
          if (cellBounds != null && cellBounds.contains(x, y)) {
            list.setCursor(new Cursor(Cursor.HAND_CURSOR));
          } else {
            list.setCursor(new Cursor(Cursor.DEFAULT_CURSOR));
          }
        }

        @Override
        public void mouseDragged(MouseEvent e) {}
      }
    );
  }
}
```