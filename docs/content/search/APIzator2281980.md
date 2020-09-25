---
title: "[Q#2281937][A#2281980] Swing JTextField how to remove the border?"
---

https://stackoverflow.com/q/2281937

Is there anyway to remove a border in a JTextField?
I would really want it to look like a JLabel - but I still need it to be a JTextField because I want people to be able highlight it.


```java
txt = new JTextField();
txt.setBorder(null);   // <-- this has no effect.
```


## Original code snippet

https://stackoverflow.com/a/2281980

From an answer to your previous question you know that some PL&Fs may clobber the border.
The obvious solution is to therefore override the setBorder method that the PL&F is calling, and discard the change.

```java
JTextField text = new JTextField() {
    @Override public void setBorder(Border border) {
        // No!
    }
};
```

## Produced APIzation

[`APIzator2281980.java`](/data/search/java/APIzator2281980.java)

```java
package com.stackoverflow.api;

import javax.swing.JTextField;
import javax.swing.border.Border;

/**
 * Swing JTextField how to remove the border?
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/2281980">https://stackoverflow.com/a/2281980</a>
 */
public class APIzator2281980 {

  public static void swingJtextfield() throws RuntimeException {
    JTextField text = new JTextField() {

      @Override
      public void setBorder(Border border) {
        // No!
      }
    };
  }
}
```