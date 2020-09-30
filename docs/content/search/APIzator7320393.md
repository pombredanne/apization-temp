---
title: "[Q#7320315][A#7320393] How to test for blank line with Java Scanner?"
---

https://stackoverflow.com/q/7320315

I am expecting input with the scanner until there is nothing (i.e. when user enters a blank line). How do I achieve this?
I tried:
But that will get me stuck in the loop


```java
while (scanner.hasNext()) {
    // process input
}
```


## Original code snippet

https://stackoverflow.com/a/7320393

Here's a way:

```java
Scanner keyboard = new Scanner(System.in);
String line = null;
while(!(line = keyboard.nextLine()).isEmpty()) {
  String[] values = line.split("\\s+");
  System.out.print("entered: " + Arrays.toString(values) + "\n");
}
System.out.print("Bye!");
```

## Produced APIzation

[`APIzator7320393.java`](/data/search/java/APIzator7320393.java)

```java
package com.stackoverflow.api;

import java.util.Arrays;
import java.util.Scanner;

/**
 * How to test for blank line with Java Scanner?
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/7320393">https://stackoverflow.com/a/7320393</a>
 */
public class APIzator7320393 {

  public static void test() throws RuntimeException {
    Scanner keyboard = new Scanner(System.in);
    String line = null;
    while (!(line = keyboard.nextLine()).isEmpty()) {
      String[] values = line.split("\\s+");
      System.out.print("entered: " + Arrays.toString(values) + "\n");
    }
    System.out.print("Bye!");
  }
}
```