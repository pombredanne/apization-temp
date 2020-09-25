---
title: "[Q#9515505][A#9515546] How to get the string after last comma in java?"
---

https://stackoverflow.com/q/9515505

How do I get the content after the last comma in a string using a regular expression?
Example:
The output should be cas
Note: There is a space between last comma and 'c' character  which also needs to be removed. 
Also the pattern contains only one space after last comma.


```java
abcd,fg;ijkl, cas
```


## Original code snippet

https://stackoverflow.com/a/9515546

Using regular expressions:
Outputs:
Or you can use simple String methods:

```java
Pattern p = Pattern.compile(".*,\\s*(.*)");
Matcher m = p.matcher("abcd,fg;ijkl, cas");

if (m.find())
    System.out.println(m.group(1));
cas
```

## Produced APIzation

[`APIzator9515546.java`](/data/search/java/APIzator9515546.java)

```java
package com.stackoverflow.api;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * How to get the string after last comma in java?
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/9515546">https://stackoverflow.com/a/9515546</a>
 */
public class APIzator9515546 {

  public static void getString() throws RuntimeException {
    Pattern p = Pattern.compile(".*,\\s*(.*)");
    Matcher m = p.matcher("abcd,fg;ijkl, cas");
    if (m.find()) System.out.println(m.group(1));
  }
}
```