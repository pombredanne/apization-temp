---
title: "[Q#7427758][A#7427797] How to use SortedMap interface in Java?"
---

https://stackoverflow.com/q/7427758

I have a
What is the best way to keep the map sorted according to the float?
Is SortedMap the best answer? TreeMap? How do I use it?
I only create the map once and replace the MyObject frequently using myMap.put() and myMap.get().


```java
Map<Float, MyObject>
```


## Original code snippet

https://stackoverflow.com/a/7427797

I would use TreeMap, which implements SortedMap. It is designed exactly for that.
Example:
See the Java tutorial page for SortedMap.
And here a list of tutorials related to TreeMap.

```java
Map<Integer, String> map = new TreeMap<Integer, String>();

// Add Items to the TreeMap
map.put(1, "One");
map.put(2, "Two");
map.put(3, "Three");

// Iterate over them
for (Map.Entry<Integer, String> entry : map.entrySet()) {
    System.out.println(entry.getKey() + " => " + entry.getValue());
}
```

## Produced APIzation

[`APIzator7427797.java`](/data/search/java/APIzator7427797.java)

```java
package com.stackoverflow.api;

import java.util.Map;
import java.util.TreeMap;

/**
 * How to use SortedMap interface in Java?
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/7427797">https://stackoverflow.com/a/7427797</a>
 */
public class APIzator7427797 {

  public static void useInterface(Map<Integer, String> map)
    throws RuntimeException {
    // Iterate over them
    for (Map.Entry<Integer, String> entry : map.entrySet()) {
      System.out.println(entry.getKey() + " => " + entry.getValue());
    }
  }
}
```