---
title: "[Q#6646467][A#6646535] How to find time taken to run java program?"
---

https://stackoverflow.com/q/6646467

For those out there that are familiar with java, I have an application that I've been working on and just realized that the program has to return a value in less than a minute, but don't know how to find or display the time taken to run the program. Any help with this would be greatly appreciated. Thanks



## Original code snippet

https://stackoverflow.com/a/6646535

See

```java
long startTime = System.nanoTime();
//code
long endTime = System.nanoTime();
System.out.println("Took "+(endTime - startTime) + " ns");
```

## Produced APIzation

[`APIzator6646535.java`](/data/search/java/APIzator6646535.java)

```java
package com.stackoverflow.api;

/**
 * How to find time taken to run java program?
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/6646535">https://stackoverflow.com/a/6646535</a>
 */
public class APIzator6646535 {

  public static long findTime() throws RuntimeException {
    long startTime = System.nanoTime();
    // code
    long endTime = System.nanoTime();
    return (endTime - startTime);
  }
}
```