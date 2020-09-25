---
title: "[Q#5054995][A#5055036] How to replace case-insensitive literal substrings in Java"
---

https://stackoverflow.com/q/5054995

Using the method replace(CharSequence target, CharSequence replacement) in String, how can I make the target case-insensitive?
For example, the way it works right now:
How can I make it so replace (or if there is a more suitable method) is case-insensitive so that both examples return "Bar"?


```java
String target = "FooBar";
target.replace("Foo", "") // would return "Bar"

String target = "fooBar";
target.replace("Foo", "") // would return "fooBar"
```


## Original code snippet

https://stackoverflow.com/a/5055036

Output:
It's worth mentioning that replaceAll treats the first argument as a regex pattern, which can cause unexpected results. To solve this, also use Pattern.quote as suggested in the comments.

```java
String target = "FOOBar";
target = target.replaceAll("(?i)foo", "");
System.out.println(target);
Bar
```

## Produced APIzation

[`APIzator5055036.java`](/data/search/java/APIzator5055036.java)

```java
package com.stackoverflow.api;

/**
 * How to replace case-insensitive literal substrings in Java
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/5055036">https://stackoverflow.com/a/5055036</a>
 */
public class APIzator5055036 {

  public static String replaceSubstring(String target) throws RuntimeException {
    target = target.replaceAll("(?i)foo", "");
    return target;
  }
}
```