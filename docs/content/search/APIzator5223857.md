---
title: "[Q#5223815][A#5223857] How do I count the number of times a sequence occurs in a Java string?"
---

https://stackoverflow.com/q/5223815

I have a String that looks like:
I want to count the number of times is is in the string.
How can I do this in Java?


```java
"Hello my is Joeseph. It is very nice to meet you. What a wonderful day it is!".
```


## Original code snippet

https://stackoverflow.com/a/5223857



```java
int index = input.indexOf("is");
int count = 0;
while (index != -1) {
    count++;
    input = input.substring(index + 1);
    index = input.indexOf("is");
}
System.out.println("No of *is* in the input is : " + count);
```

## Produced APIzation

[`APIzator5223857.java`](/data/search/java/APIzator5223857.java)

```java
package com.stackoverflow.api;

/**
 * How do I count the number of times a sequence occurs in a Java string?
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/5223857">https://stackoverflow.com/a/5223857</a>
 */
public class APIzator5223857 {

  public static int countNumber(String input) throws RuntimeException {
    int index = input.indexOf("is");
    int count = 0;
    while (index != -1) {
      count++;
      input = input.substring(index + 1);
      index = input.indexOf("is");
    }
    return count;
  }
}
```