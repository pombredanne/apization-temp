---
title: '[Q–29324][A–29336] How do I create a hash table in Java?'
---

https://stackoverflow.com/q/29324

What is the most straightforward way to create a hash table (or associative array...) in Java?  My google-fu has turned up a couple examples, but is there a standard way to do this?
And is there a way to populate the table with a list of key->value pairs without individually calling an add method on the object for each pair?



## Original code snippet

https://stackoverflow.com/a/29336

Both classes can be found from the java.util package. The difference between the 2 is explained in the following jGuru FAQ entry.

```java
Map map = new HashMap();
Hashtable ht = new Hashtable();
```

## Produced APIzation

[`APIzator29336.java`](/data/search/java/APIzator29336.java)

```java
package com.stackoverflow.api;

import java.util.HashMap;
import java.util.Hashtable;
import java.util.Map;

/**
 * How do I create a hash table in Java?
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/29336">https://stackoverflow.com/a/29336</a>
 */
public class APIzator29336 {

  public static Hashtable createTable(Map map) throws RuntimeException {
    Hashtable ht = new Hashtable();
    return ht;
  }
}

```