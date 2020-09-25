---
title: "[Q#7509978][A#7510013] How can I find out which button was clicked?"
---

https://stackoverflow.com/q/7509978

I've got my buttons working right, and I'm a listener to each button like this:
Here as you can see the listener is called, and I want to find out which button I'm clicking. Is there a way to do that?
I need some way to find the button in the array.


```java
for(int i = 0; i <= 25; ++i) {
    buttons[i] = new Button(Character.toString(letters[i]));
    buttons[i].addActionListener(actionListener);
    panel1.add(buttons[i]);
}
ActionListener actionListener = new ActionListener() {
    public void actionPerformed(ActionEvent actionEvent) {
        System.out.println(actionEvent.getSource());
    }
};
```


## Original code snippet

https://stackoverflow.com/a/7510013

try this

```java
ActionListener actionListener = new ActionListener()
 {
      public void actionPerformed(ActionEvent actionEvent) {

          System.out.println(actionEvent.getActionCommand());
      }
    };
```

## Produced APIzation

[`APIzator7510013.java`](/data/search/java/APIzator7510013.java)

```java
package com.stackoverflow.api;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

/**
 * How can I find out which button was clicked?
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/7510013">https://stackoverflow.com/a/7510013</a>
 */
public class APIzator7510013 {

  public static ActionListener find() throws RuntimeException {
    return new ActionListener() {

      public void actionPerformed(ActionEvent actionEvent) {
        System.out.println(actionEvent.getActionCommand());
      }
    };
  }
}
```