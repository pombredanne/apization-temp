---
title: '[Q–28428][A–28726] How do I get the path where the user installed my Java application?'
---

https://stackoverflow.com/q/28428

I want to bring up a file dialog in Java that defaults to the application installation directory.
What's the best way to get that information programmatically?



## Original code snippet

https://stackoverflow.com/a/28726

The above method gets the user's working directory when the application was launched. This is fine if the application is launched by a script or shortcut that ensures that this is the case.
However, if the app is launched from somewhere else (entirely possible if the command line is used), then the return value will be wherever the user was when they launched the app.
A more reliable method is to work out the application install directory using ClassLoaders.

```java
System.getProperty("user.dir");
```

## Produced APIzation

[`APIzator28726.java`](/data/search/java/APIzator28726.java)

```java
package com.stackoverflow.api;

/**
 * How do I get the path where the user installed my Java application?
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/28726">https://stackoverflow.com/a/28726</a>
 */
public class APIzator28726 {

  public static void getPath() throws RuntimeException {
    System.getProperty("user.dir");
  }
}

```