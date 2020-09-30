---
title: "[Q#635935][A#2796052] How can I calculate a time span in Java and format the output?"
---

https://stackoverflow.com/q/635935

I want to take two times (in seconds since epoch) and show the difference between the two in formats like:
How can I accomplish this??



## Original code snippet

https://stackoverflow.com/a/2796052

Since everyone shouts "YOODAA!!!" but noone posts a concrete example, here's my contribution.
You could also do this with Joda-Time. Use Period to represent a period. To format the period in the desired human representation, use PeriodFormatter which you can build by PeriodFormatterBuilder.
Here's a kickoff example:
Much more clear and concise, isn't it?
This prints by now
(Cough, old, cough)

```java
DateTime myBirthDate = new DateTime(1978, 3, 26, 12, 35, 0, 0);
DateTime now = new DateTime();
Period period = new Period(myBirthDate, now);

PeriodFormatter formatter = new PeriodFormatterBuilder()
    .appendYears().appendSuffix(" year, ", " years, ")
    .appendMonths().appendSuffix(" month, ", " months, ")
    .appendWeeks().appendSuffix(" week, ", " weeks, ")
    .appendDays().appendSuffix(" day, ", " days, ")
    .appendHours().appendSuffix(" hour, ", " hours, ")
    .appendMinutes().appendSuffix(" minute, ", " minutes, ")
    .appendSeconds().appendSuffix(" second", " seconds")
    .printZeroNever()
    .toFormatter();

String elapsed = formatter.print(period);
System.out.println(elapsed + " ago");
```

## Produced APIzation

[`APIzator2796052.java`](/data/search/java/APIzator2796052.java)

```java
package com.stackoverflow.api;

import com.google.appengine.repackaged.org.joda.time.DateTime;
import com.google.appengine.repackaged.org.joda.time.Period;
import com.google.appengine.repackaged.org.joda.time.format.PeriodFormatter;
import com.google.appengine.repackaged.org.joda.time.format.PeriodFormatterBuilder;

/**
 * How can I calculate a time span in Java and format the output?
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/2796052">https://stackoverflow.com/a/2796052</a>
 */
public class APIzator2796052 {

  public static String calculateSpan() throws RuntimeException {
    DateTime myBirthDate = new DateTime(1978, 3, 26, 12, 35, 0, 0);
    DateTime now = new DateTime();
    Period period = new Period(myBirthDate, now);
    PeriodFormatter formatter = new PeriodFormatterBuilder()
      .appendYears()
      .appendSuffix(" year, ", " years, ")
      .appendMonths()
      .appendSuffix(" month, ", " months, ")
      .appendWeeks()
      .appendSuffix(" week, ", " weeks, ")
      .appendDays()
      .appendSuffix(" day, ", " days, ")
      .appendHours()
      .appendSuffix(" hour, ", " hours, ")
      .appendMinutes()
      .appendSuffix(" minute, ", " minutes, ")
      .appendSeconds()
      .appendSuffix(" second", " seconds")
      .printZeroNever()
      .toFormatter();
    String elapsed = formatter.print(period);
    return elapsed + " ago";
  }
}
```