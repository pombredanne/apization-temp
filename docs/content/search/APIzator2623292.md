---
title: "[Q#2622725][A#2623292] how to take user input in Array using java?"
---

https://stackoverflow.com/q/2622725

how to take user input in Array using Java? 
i.e we are not initializing it by ourself in our program but the user is going to give its value..
please guide!!



## Original code snippet

https://stackoverflow.com/a/2623292

Here's a simple code that reads strings from stdin, adds them into List<String>, and then uses toArray to convert it to String[] (if you really need to work with arrays).

```java
import java.util.*;

public class UserInput {
    public static void main(String[] args) {
        List<String> list = new ArrayList<String>();
        Scanner stdin = new Scanner(System.in);

        do {
            System.out.println("Current list is " + list);
            System.out.println("Add more? (y/n)");
            if (stdin.next().startsWith("y")) {
                System.out.println("Enter : ");
                list.add(stdin.next());
            } else {
                break;
            }
        } while (true);
        stdin.close();
        System.out.println("List is " + list);
        String[] arr = list.toArray(new String[0]);
        System.out.println("Array is " + Arrays.toString(arr));
    }
}
```

## Produced APIzation

[`APIzator2623292.java`](/data/search/java/APIzator2623292.java)

```java
package com.stackoverflow.api;

import java.util.*;

/**
 * how to take user input in Array using java?
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/2623292">https://stackoverflow.com/a/2623292</a>
 */
public class APIzator2623292 {

  public class UserInput {

    public static String[] takeInput() {
      List<String> list = new ArrayList<String>();
      Scanner stdin = new Scanner(System.in);
      do {
        System.out.println("Current list is " + list);
        System.out.println("Add more? (y/n)");
        if (stdin.next().startsWith("y")) {
          System.out.println("Enter : ");
          list.add(stdin.next());
        } else {
          break;
        }
      } while (true);
      stdin.close();
      System.out.println("List is " + list);
      String[] arr = list.toArray(new String[0]);
      return arr;
    }
  }
}
```