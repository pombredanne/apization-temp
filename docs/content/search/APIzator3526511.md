---
title: "[Q#3526485][A#3526511] How do you subtract Dates in Java?"
---

https://stackoverflow.com/q/3526485

My heart is bleeding internally after having to go so deep to subtract two dates to calculate the span in number of days:
where it's only 2 lines of code in .NET, or any modern language you name.
Is this atrocious of java? Or is there a hidden method I should know?
Instead of using GregorianCalendar, is it okay to use Date class in util? If so, should I watch out for subtle things like the year 1970?
Thanks


```java
GregorianCalendar c1 = new GregorianCalendar();
    GregorianCalendar c2 = new GregorianCalendar();
    c1.set(2000, 1, 1);
    c2.set(2010,1, 1);
    long span = c2.getTimeInMillis() - c1.getTimeInMillis();
    GregorianCalendar c3 = new GregorianCalendar();
    c3.setTimeInMillis(span);
    long numberOfMSInADay = 1000*60*60*24;
    System.out.println(c3.getTimeInMillis() / numberOfMSInADay); //3653
```


## Original code snippet

https://stackoverflow.com/a/3526511

It's indeed one of the biggest epic failures in the standard Java API. Have a bit of patience, then you'll get your solution in flavor of the new Date and Time API specified by JSR 310 / ThreeTen which is (most likely) going to be included in the upcoming Java 8.
Until then, you can get away with JodaTime.
Its creator, Stephen Colebourne, is by the way the guy behind JSR 310, so it'll look much similar.

```java
DateTime dt1 = new DateTime(2000, 1, 1, 0, 0, 0, 0);
DateTime dt2 = new DateTime(2010, 1, 1, 0, 0, 0, 0);
int days = Days.daysBetween(dt1, dt2).getDays();
```

## Produced APIzation

[`APIzator3526511.java`](/data/search/java/APIzator3526511.java)

```java
package com.stackoverflow.api;

import com.google.appengine.repackaged.org.joda.time.DateTime;
import com.google.appengine.repackaged.org.joda.time.Days;

/**
 * How do you subtract Dates in Java?
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/3526511">https://stackoverflow.com/a/3526511</a>
 */
public class APIzator3526511 {

  public static int subtractDate() throws RuntimeException {
    DateTime dt1 = new DateTime(2000, 1, 1, 0, 0, 0, 0);
    DateTime dt2 = new DateTime(2010, 1, 1, 0, 0, 0, 0);
    return Days.daysBetween(dt1, dt2).getDays();
  }
}
```