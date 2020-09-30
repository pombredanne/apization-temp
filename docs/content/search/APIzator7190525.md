---
title: "[Q#7190208][A#7190525] How to read String Builder line by line"
---

https://stackoverflow.com/q/7190208

Can I read String Builder line by line? And Get the length of each line as well.
EDIT:
"I build string in StringBuilder and add "\n" within. And I need to read it again. I need to consider that every "\n" has a new line."



## Original code snippet

https://stackoverflow.com/a/7190525

Given your edit, it's as simple as invoking toString() on the StringBuilder instance, and then invoking split("\\n") on the returned String instance. And from there, you'll have a String array that you can loop through to access each "line" of the StringBuilder instance. And of course, invoke length() on each String instance, or "line" to get its length.

```java
StringBuilder sb = new StringBuilder();
sb.append("line 1");
sb.append("\\n");
sb.append("line 2");

String[] lines = sb.toString().split("\\n");
for(String s: lines){
    System.out.println("Content = " + s);
    System.out.println("Length = " + s.length());
}
```

## Produced APIzation

[`APIzator7190525.java`](/data/search/java/APIzator7190525.java)

```java
package com.stackoverflow.api;

/**
 * How to read String Builder line by line
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/7190525">https://stackoverflow.com/a/7190525</a>
 */
public class APIzator7190525 {

  public static void readLine(StringBuilder sb) throws RuntimeException {
    String[] lines = sb.toString().split("\\n");
    for (String s : lines) {
      System.out.println("Content = " + s);
      System.out.println("Length = " + s.length());
    }
  }
}
```