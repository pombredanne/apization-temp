---
title: "[Q#9115897][A#9115920] How do I convert a java.sql.Date object into a GregorianCalendar?"
---

https://stackoverflow.com/q/9115897

I thought I'd be able to create a GregorianCalendar using the constructor that takes the year, month, and day, but I can't reliably get those fields from an instance of the java.sql.Date class.  The methods that get those values from java.sql.Date are deprecated, and the following code shows why they can't be used:
Here's the output, showing that the month and year are not returned correctly from the deprecated getYear() and getMonth() methods of Date:
Year: 111
  Month: 11
  Day: 25
  2011-12-25
  Thu Dec 25 00:00:00 EST 111
Since I can't use the constructor that I tried above, and there's no GregorianCalendar constructor that just takes a Date, how can I convert a java.sql.Date object into a GregorianCalendar?


```java
import java.sql.Date;
import java.util.Calendar;
import java.util.GregorianCalendar;

public class DateTester {

    public static void main(String[] args) {
        Date date = Date.valueOf("2011-12-25");
        System.out.println("Year: " + date.getYear());
        System.out.println("Month: " + date.getMonth());
        System.out.println("Day: " + date.getDate());
        System.out.println(date);

        Calendar cal = new GregorianCalendar(date.getYear(), date.getMonth(), date.getDate());
        System.out.println(cal.getTime());
    }
}
```


## Original code snippet

https://stackoverflow.com/a/9115920

You have to do this in two steps.  First create a GregorianCalendar using the default constructor, then set the date using the (confusingly named) setTime method.
Here's the output:
2011-12-25
  Sun Dec 25 00:00:00 EST 2011

```java
import java.sql.Date;
import java.util.Calendar;
import java.util.GregorianCalendar;

public class DateTester {

    public static void main(String[] args) {
        Date date = Date.valueOf("2011-12-25");
        System.out.println(date);

        Calendar cal = new GregorianCalendar();
        cal.setTime(date);
        System.out.println(cal.getTime());
    }
}
```

## Produced APIzation

[`APIzator9115920.java`](/data/search/java/APIzator9115920.java)

```java
package com.stackoverflow.api;

import java.sql.Date;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

/**
 * How do I convert a java.sql.Date object into a GregorianCalendar?
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/9115920">https://stackoverflow.com/a/9115920</a>
 */
public class APIzator9115920 {

  public class DateTester {

    public static Date convertJavasql() {
      Date date = Date.valueOf("2011-12-25");
      System.out.println(date);
      Calendar cal = new GregorianCalendar();
      cal.setTime(date);
      return cal.getTime();
    }
  }
}
```