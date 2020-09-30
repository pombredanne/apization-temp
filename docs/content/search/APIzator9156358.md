---
title: "[Q#9156156][A#9156358] How to get local time of different time zones?"
---

https://stackoverflow.com/q/9156156

I want to get local time of different time zones using Java code. Based on the time zone passed to the function I need that time zone's local time. How to achieve this?



## Original code snippet

https://stackoverflow.com/a/9156358



```java
java.util.TimeZone tz = java.util.TimeZone.getTimeZone("GMT+1");
java.util.Calendar c = java.util.Calendar.getInstance(tz);

System.out.println(c.get(java.util.Calendar.HOUR_OF_DAY)+":"+c.get(java.util.Calendar.MINUTE)+":"+c.get(java.util.Calendar.SECOND));
```

## Produced APIzation

[`APIzator9156358.java`](/data/search/java/APIzator9156358.java)

```java
package com.stackoverflow.api;

/**
 * How to get local time of different time zones?
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/9156358">https://stackoverflow.com/a/9156358</a>
 */
public class APIzator9156358 {

  public static void getTime() throws RuntimeException {
    java.util.TimeZone tz = java.util.TimeZone.getTimeZone("GMT+1");
    java.util.Calendar c = java.util.Calendar.getInstance(tz);
    System.out.println(
      c.get(java.util.Calendar.HOUR_OF_DAY) +
      ":" +
      c.get(java.util.Calendar.MINUTE) +
      ":" +
      c.get(java.util.Calendar.SECOND)
    );
  }
}
```