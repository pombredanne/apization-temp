---
title: "[Q#3799130][A#3799176] How to iterate through a String"
---

https://stackoverflow.com/q/3799130

How can I iterate through a string in Java?
I'm trying to use a foreach style for loop


```java
for(char x : examplestring)
{
    //action
}
```


## Original code snippet

https://stackoverflow.com/a/3799176

If you want to use enhanced loop, you can convert the string to charArray

```java
for (char ch : exampleString.toCharArray()){
        System.out.println(ch);
    }
```

## Produced APIzation

[`APIzator3799176.java`](/data/search/java/APIzator3799176.java)

```java
package com.stackoverflow.api;

/**
 * How to iterate through a String
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/3799176">https://stackoverflow.com/a/3799176</a>
 */
public class APIzator3799176 {

  public static void iterate(String exampleString) throws RuntimeException {
    for (char ch : exampleString.toCharArray()) {
      System.out.println(ch);
    }
  }
}
```