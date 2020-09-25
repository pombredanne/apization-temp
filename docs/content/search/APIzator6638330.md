---
title: "[Q#6638321][A#6638330] How to exit two nested loops"
---

https://stackoverflow.com/q/6638321

I have been using java for quite some time, yet my education in loops is somewhat lacking.  I know how to create every loop that exists in java and break out of the loops as well. However, I've recently thought about this:
Say I have two nested loops. Could I break out of both loops using just one break statement?
Here is what I have so far.
Is there any way to achieve this?


```java
int points = 0;
int goal = 100;
while (goal <= 100) {
   for (int i = 0; i < goal; i++) {
      if (points > 50) {
         break; //for loop ends, while loop does not
      }
   //I know I could put a 'break' statement here and end the while loop but I want to do it using just one 'break' statement
   points += i;
   }
}
```


## Original code snippet

https://stackoverflow.com/a/6638330

In java you can use a label to specify which loop to break/continue:

```java
mainLoop:
while (goal <= 100) {
   for (int i = 0; i < goal; i++) {
      if (points > 50) {
         break mainLoop;
      }
      points += i;
   }
}
```

## Produced APIzation

[`APIzator6638330.java`](/data/search/java/APIzator6638330.java)

```java
package com.stackoverflow.api;

/**
 * How to exit two nested loops
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/6638330">https://stackoverflow.com/a/6638330</a>
 */
public class APIzator6638330 {

  public static void exitLoop(int goal) throws RuntimeException {
    int points = 0;
    mainLoop:while (goal <= 100) {
      for (int i = 0; i < goal; i++) {
        if (points > 50) {
          break mainLoop;
        }
        points += i;
      }
    }
  }
}
```