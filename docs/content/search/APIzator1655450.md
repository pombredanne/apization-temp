---
title: "[Q#1655357][A#1655450] How do I say 5 seconds from now in Java?"
---

https://stackoverflow.com/q/1655357

I am looking at the Date documentation and trying to figure out how I can express NOW + 5 seconds. Here's some pseudocode:


```java
import java.util.Date
public class Main {

    public static void main(String args[]) {
         Date now = new Date();
         now.setSeconds(now.getSeconds() + 5);
    }
}
```


## Original code snippet

https://stackoverflow.com/a/1655450

Date is almost entirely deprecated and is still there for backward compatibility reasons. If you need to set particular dates or do date arithmetic, use a Calendar:

```java
Calendar calendar = Calendar.getInstance(); // gets a calendar using the default time zone and locale.
calendar.add(Calendar.SECOND, 5);
System.out.println(calendar.getTime());
```

## Produced APIzation

[`APIzator1655450.java`](/data/search/java/APIzator1655450.java)

```java
package com.stackoverflow.api;

import java.util.Calendar;
import java.util.Date;

/**
 * How do I say 5 seconds from now in Java?
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/1655450">https://stackoverflow.com/a/1655450</a>
 */
public class APIzator1655450 {

  public static Date saySecond() throws RuntimeException {
    // gets a calendar using the default time zone and locale.
    Calendar calendar = Calendar.getInstance();
    calendar.add(Calendar.SECOND, 5);
    return calendar.getTime();
  }
}
```