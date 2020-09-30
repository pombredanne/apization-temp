---
title: "[Q#9108781][A#9108806] How to remove leading and trailing whitespace from the string in Java?"
---

https://stackoverflow.com/q/9108781

I want to remove the leading and trailing whitespace from string:
I want the result to be like:


```java
String s = "          Hello World                    ";
s == "Hello world";
```


## Original code snippet

https://stackoverflow.com/a/9108806

see String#trim()
Without any internal method, use regex like
or
or just use pattern in pure form

```java
s.trim()
s.replaceAll("^\\s+", "").replaceAll("\\s+$", "")
s.replaceAll("^\\s+|\\s+$", "")
String s="          Hello World                    ";
    Pattern trimmer = Pattern.compile("^\\s+|\\s+$");
    Matcher m = trimmer.matcher(s);
    StringBuffer out = new StringBuffer();
    while(m.find())
        m.appendReplacement(out, "");
    m.appendTail(out);
    System.out.println(out+"!");
```

## Produced APIzation

[`APIzator9108806.java`](/data/search/java/APIzator9108806.java)

```java
package com.stackoverflow.api;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * How to remove leading and trailing whitespace from the string in Java?
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/9108806">https://stackoverflow.com/a/9108806</a>
 */
public class APIzator9108806 {

  public static String remove(String s) throws RuntimeException {
    Pattern trimmer = Pattern.compile("^\\s+|\\s+$");
    Matcher m = trimmer.matcher(s);
    StringBuffer out = new StringBuffer();
    while (m.find()) m.appendReplacement(out, "");
    m.appendTail(out);
    return out + "!";
  }
}
```