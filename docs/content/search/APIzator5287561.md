---
title: "[Q#5287538][A#5287561] How can I get the user input in Java?"
---

https://stackoverflow.com/q/5287538

I attempted to create a calculator, but I can not get it to work because I don't know how to get user input.
How can I get the user input in Java?



## Original code snippet

https://stackoverflow.com/a/5287561

One of the simplest ways is to use a Scanner object as follows:

```java
import java.util.Scanner;

Scanner reader = new Scanner(System.in);  // Reading from System.in
System.out.println("Enter a number: ");
int n = reader.nextInt(); // Scans the next token of the input as an int.
//once finished
reader.close();
```

## Produced APIzation

[`APIzator5287561.java`](/data/search/java/APIzator5287561.java)

```java
package com.stackoverflow.api;

import java.util.Scanner;

/**
 * How can I get the user input in Java?
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/5287561">https://stackoverflow.com/a/5287561</a>
 */
public class APIzator5287561 {

  public static void getInput() throws RuntimeException {
    // Reading from System.in
    Scanner reader = new Scanner(System.in);
    System.out.println("Enter a number: ");
    // Scans the next token of the input as an int.
    int n = reader.nextInt();
    // once finished
    reader.close();
  }
}
```