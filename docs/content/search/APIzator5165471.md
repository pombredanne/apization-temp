---
title: "[Q#5165428][A#5165471] How to set time to a date object in java"
---

https://stackoverflow.com/q/5165428

I created a Date object in Java. When I do so, it shows something like: date=Tue Aug 09 00:00:00 IST 2011. As a result, it appears that my Excel file is lesser by one day (27 feb becomes 26 feb and so on) I think it must be because of time. How can I set it to something like 5:30 pm?



## Original code snippet

https://stackoverflow.com/a/5165471

Also See

```java
Calendar cal = Calendar.getInstance();
cal.set(Calendar.HOUR_OF_DAY,17);
cal.set(Calendar.MINUTE,30);
cal.set(Calendar.SECOND,0);
cal.set(Calendar.MILLISECOND,0);

Date d = cal.getTime();
```

## Produced APIzation

[`APIzator5165471.java`](/data/search/java/APIzator5165471.java)

```java
package com.stackoverflow.api;

import java.util.Calendar;
import java.util.Date;

/**
 * How to set time to a date object in java
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/5165471">https://stackoverflow.com/a/5165471</a>
 */
public class APIzator5165471 {

  public static Date setTime() throws RuntimeException {
    Calendar cal = Calendar.getInstance();
    cal.set(Calendar.HOUR_OF_DAY, 17);
    cal.set(Calendar.MINUTE, 30);
    cal.set(Calendar.SECOND, 0);
    cal.set(Calendar.MILLISECOND, 0);
    return cal.getTime();
  }
}
```