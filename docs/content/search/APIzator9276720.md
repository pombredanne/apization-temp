---
title: "[Q#9276639][A#9276720] Java: How to split a string by a number of characters?"
---

https://stackoverflow.com/q/9276639

I tried to search online to solve this question but I didn't found anything.
I wrote the following abstract code to explain what I'm asking:
The method splitByNumber splits the string "text" every 4 characters. How I can create this method??
Many Thanks


```java
String text = "how are you?";

String[] textArray= text.splitByNumber(4); //this method is what I'm asking
textArray[0]; //it contains "how "
textArray[1]; //it contains "are "
textArray[2]; //it contains "you?"
```


## Original code snippet

https://stackoverflow.com/a/9276720

I think that what he wants is to have a string split into substrings of size 4. Then I would do this in a loop:

```java
List<String> strings = new ArrayList<String>();
int index = 0;
while (index < text.length()) {
    strings.add(text.substring(index, Math.min(index + 4,text.length())));
    index += 4;
}
```

## Produced APIzation

[`APIzator9276720.java`](/data/search/java/APIzator9276720.java)

```java
package com.stackoverflow.api;

import java.util.ArrayList;
import java.util.List;

/**
 * Java: How to split a string by a number of characters?
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/9276720">https://stackoverflow.com/a/9276720</a>
 */
public class APIzator9276720 {

  public static void java(String text) throws RuntimeException {
    List<String> strings = new ArrayList<String>();
    int index = 0;
    while (index < text.length()) {
      strings.add(text.substring(index, Math.min(index + 4, text.length())));
      index += 4;
    }
  }
}
```