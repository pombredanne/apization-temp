---
title: "[Q#5911565][A#5911621] How to add multiple ActionListeners for multiple buttons in Java Swing"
---

https://stackoverflow.com/q/5911565

I know how to create one button and an Action Listener for it. But I want to have several buttons and actionListeners for them doing separate actions unrelated to each other.
Example:
Now I want to have other buttons which may hav different functions like subtract, multiply etc.
please suggest. thanks


```java
protected JButton x;

x = new JButton("add");
x.addActionListener(this);

public void actionPerformed(ActionEvent evt) { //code.....}
```


## Original code snippet

https://stackoverflow.com/a/5911621

What about:

```java
JButton addButton = new JButton( new AbstractAction("add") {
        @Override
        public void actionPerformed( ActionEvent e ) {
            // add Action
        }
    });

    JButton substractButton = new JButton( new AbstractAction("substract") { 
        @Override
        public void actionPerformed( ActionEvent e ) {
            // substract Action
        }
    });
```

## Produced APIzation

[`APIzator5911621.java`](/data/search/java/APIzator5911621.java)

```java
package com.stackoverflow.api;

import java.awt.event.ActionEvent;
import javax.swing.AbstractAction;
import javax.swing.JButton;

/**
 * How to add multiple ActionListeners for multiple buttons in Java Swing
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/5911621">https://stackoverflow.com/a/5911621</a>
 */
public class APIzator5911621 {

  public static void addActionlisteners() throws RuntimeException {
    JButton addButton = new JButton(
      new AbstractAction("add") {

        @Override
        public void actionPerformed(ActionEvent e) {
          // add Action
        }
      }
    );
    JButton substractButton = new JButton(
      new AbstractAction("substract") {

        @Override
        public void actionPerformed(ActionEvent e) {
          // substract Action
        }
      }
    );
  }
}
```