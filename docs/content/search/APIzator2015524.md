---
title: "[Q#2015463][A#2015524] How to view the current heap size that an application is using?"
---

https://stackoverflow.com/q/2015463

I think I increased my heap size to 1 GB in NetBeans since I changed the config to look like this:
After I restarted NetBeans, can I be sure that my app is given 1 GB now?
Is there a way to verify this?


```java
netbeans_default_options="-J-Xmx1g ......
```


## Original code snippet

https://stackoverflow.com/a/2015524

Use this code:
It was useful to me to know it.

```java
// Get current size of heap in bytes
long heapSize = Runtime.getRuntime().totalMemory(); 

// Get maximum size of heap in bytes. The heap cannot grow beyond this size.// Any attempt will result in an OutOfMemoryException.
long heapMaxSize = Runtime.getRuntime().maxMemory();

 // Get amount of free memory within the heap in bytes. This size will increase // after garbage collection and decrease as new objects are created.
long heapFreeSize = Runtime.getRuntime().freeMemory();
```

## Produced APIzation

[`APIzator2015524.java`](/data/search/java/APIzator2015524.java)

```java
package com.stackoverflow.api;

/**
 * How to view the current heap size that an application is using?
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/2015524">https://stackoverflow.com/a/2015524</a>
 */
public class APIzator2015524 {

  public static long viewSize() throws RuntimeException {
    // Get current size of heap in bytes
    long heapSize = Runtime.getRuntime().totalMemory();
    // Get maximum size of heap in bytes. The heap cannot grow beyond this size.// Any attempt will result in an OutOfMemoryException.
    long heapMaxSize = Runtime.getRuntime().maxMemory();
    return Runtime.getRuntime().freeMemory();
  }
}
```