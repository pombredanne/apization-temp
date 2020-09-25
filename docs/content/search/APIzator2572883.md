---
title: "[Q#2572868][A#2572883] How to time Java program execution speed"
---

https://stackoverflow.com/q/2572868

Sorry if this sounds like a dumb question but how do you time the execution of a java program? I'm not sure what class I should use to do this.
I'm kinda looking for something like:
Thanks


```java
//Some timer starts here
for (int i = 0; i < length; i++) {
  // Do something
}
//End timer here

System.out.println("Total execution time: " + totalExecutionTime);
```


## Original code snippet

https://stackoverflow.com/a/2572883

Hope this helped.

```java
final long startTime = System.currentTimeMillis();
for (int i = 0; i < length; i++) {
  // Do something
}
final long endTime = System.currentTimeMillis();

System.out.println("Total execution time: " + (endTime - startTime) );
```

## Produced APIzation

[`APIzator2572883.java`](/data/search/java/APIzator2572883.java)

```java
package com.stackoverflow.api;

/**
 * How to time Java program execution speed
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/2572883">https://stackoverflow.com/a/2572883</a>
 */
public class APIzator2572883 {

  public static String timeSpeed(int length) throws RuntimeException {
    final long startTime = System.currentTimeMillis();
    for (int i = 0; i < length; i++) {
      // Do something
    }
    final long endTime = System.currentTimeMillis();
    return (endTime - startTime);
  }
}
```