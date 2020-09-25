---
title: "[Q#5287252][A#5287521] how to put Image on JPanel using Netbeans"
---

https://stackoverflow.com/q/5287252

And how do I put Image on a JPanel using Netbeans?



## Original code snippet

https://stackoverflow.com/a/5287521

Have a look at this tutorial: Handling Images in a Java GUI Application
At the same time you could code as well:

```java
JPanel panel = new JPanel(); 
ImageIcon icon = new ImageIcon("image.jpg"); 
JLabel label = new JLabel(); 
label.setIcon(icon); 
panel.add(label);
```

## Produced APIzation

[`APIzator5287521.java`](/data/search/java/APIzator5287521.java)

```java
package com.stackoverflow.api;

import javax.swing.ImageIcon;
import javax.swing.JLabel;
import javax.swing.JPanel;

/**
 * how to put Image on JPanel using Netbeans
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/5287521">https://stackoverflow.com/a/5287521</a>
 */
public class APIzator5287521 {

  public static void putImage(String str1) throws RuntimeException {
    JPanel panel = new JPanel();
    ImageIcon icon = new ImageIcon(str1);
    JLabel label = new JLabel();
    label.setIcon(icon);
    panel.add(label);
  }
}
```