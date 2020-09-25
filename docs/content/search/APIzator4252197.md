---
title: "[Q#4252187][A#4252197] How to stop execution after a certain time in Java?"
---

https://stackoverflow.com/q/4252187

In the code, the variable timer would specify the duration after which to end the while loop, 60 sec for example.


```java
while(timer) {
    //run
    //terminate after 60 sec
   }
```


## Original code snippet

https://stackoverflow.com/a/4252197



```java
long start = System.currentTimeMillis();
long end = start + 60*1000; // 60 seconds * 1000 ms/sec
while (System.currentTimeMillis() < end)
{
    // run
}
```

## Produced APIzation

[`APIzator4252197.java`](/data/search/java/APIzator4252197.java)

```java
package com.stackoverflow.api;

/**
 * How to stop execution after a certain time in Java?
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/4252197">https://stackoverflow.com/a/4252197</a>
 */
public class APIzator4252197 {

  public static void stopExecution() throws RuntimeException {
    long start = System.currentTimeMillis();
    // 60 seconds * 1000 ms/sec
    long end = start + 60 * 1000;
    while (System.currentTimeMillis() < end) {
      // run
    }
  }
}
```