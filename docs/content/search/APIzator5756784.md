---
title: "[Q#5756748][A#5756784] Java how to replace backslash?"
---

https://stackoverflow.com/q/5756748

In java, I have a file path, like 'C:\A\B\C', I want it changed to ''C:/A/B/C'. how to replace the backslashes?



## Original code snippet

https://stackoverflow.com/a/5756784



```java
String text = "C:\\A\\B\\C";
    String newString = text.replace("\\", "/");
    System.out.println(newString);
```

## Produced APIzation

[`APIzator5756784.java`](/data/search/java/APIzator5756784.java)

```java
package com.stackoverflow.api;

/**
 * Java how to replace backslash?
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/5756784">https://stackoverflow.com/a/5756784</a>
 */
public class APIzator5756784 {

  public static String java(String text) throws RuntimeException {
    String newString = text.replace("\\", "/");
    return newString;
  }
}
```