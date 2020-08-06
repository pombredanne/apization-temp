---
title: '[Q#29324][A#29334] How do I create a hash table in Java?'
---

https://stackoverflow.com/q/29324

What is the most straightforward way to create a hash table (or associative array...) in Java?  My google-fu has turned up a couple examples, but is there a standard way to do this?
And is there a way to populate the table with a list of key->value pairs without individually calling an add method on the object for each pair?



## Original code snippet

https://stackoverflow.com/a/29334



```java
import java.util.HashMap;

Map map = new HashMap();
```

## Produced APIzation

[`APIzator29334.java`](/data/search/java/APIzator29334.java)

```java
package com.stackoverflow.api;

import java.util.HashMap;
import java.util.Map;

/**
 * How do I create a hash table in Java?
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/29334">https://stackoverflow.com/a/29334</a>
 */
public class APIzator29334 {

  public static Map createTable() throws RuntimeException {
    Map map = new HashMap();
    return map;
  }
}

```