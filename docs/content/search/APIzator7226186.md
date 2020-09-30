---
title: "[Q#7226156][A#7226186] How to get day of the month?"
---

https://stackoverflow.com/q/7226156

I am trying to retrieve which day of the month it is.
Such as today is August 29,2011.
What i would like to do is just get the days number such as 29, or 30. Which ever day of the month it is.
How would i go about doing this?



## Original code snippet

https://stackoverflow.com/a/7226186

You'll want to do get a Calendar instance and get it's day of month
You can also get DAY_OF_WEEK, DAY_OF_YEAR, DAY_OF_WEEK_IN_MONTH, etc.

```java
Calendar cal = Calendar.getInstance();
int dayOfMonth = cal.get(Calendar.DAY_OF_MONTH);

String dayOfMonthStr = String.valueOf(dayOfMonth);
```

## Produced APIzation

[`APIzator7226186.java`](/data/search/java/APIzator7226186.java)

```java
package com.stackoverflow.api;

import java.util.Calendar;

/**
 * How to get day of the month?
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/7226186">https://stackoverflow.com/a/7226186</a>
 */
public class APIzator7226186 {

  public static String getDay() throws RuntimeException {
    Calendar cal = Calendar.getInstance();
    int dayOfMonth = cal.get(Calendar.DAY_OF_MONTH);
    return String.valueOf(dayOfMonth);
  }
}
```