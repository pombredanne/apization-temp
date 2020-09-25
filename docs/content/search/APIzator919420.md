---
title: "[Q#919387][A#919420] How can I calculate the difference between two ArrayLists?"
---

https://stackoverflow.com/q/919387

I have two ArrayLists.
ArrayList A contains
ArrayList B Contains ['2009-05-18','2009-05-18','2009-05-19','2009-05-19','2009-05-20','2009-05-21','2009-05-21','2009-05-22']
I have to compare ArrayLst A and ArrayLst B . The result ArrayList
 should contain the  List which does not exist in ArrayList A.
ArrayList result should be
['2009-05-20','2009-05-22']
how to compare ?


```java
['2009-05-18','2009-05-19','2009-05-21']
```


## Original code snippet

https://stackoverflow.com/a/919420

In Java, you can use the Collection interface's removeAll method.
The above code will produce the following output:

```java
// Create a couple ArrayList objects and populate them
// with some delicious fruits.
Collection firstList = new ArrayList() {{
    add("apple");
    add("orange");
}};

Collection secondList = new ArrayList() {{
    add("apple");
    add("orange");
    add("banana");
    add("strawberry");
}};

// Show the "before" lists
System.out.println("First List: " + firstList);
System.out.println("Second List: " + secondList);

// Remove all elements in firstList from secondList
secondList.removeAll(firstList);

// Show the "after" list
System.out.println("Result: " + secondList);
First List: [apple, orange]
Second List: [apple, orange, banana, strawberry]
Result: [banana, strawberry]
```

## Produced APIzation

[`APIzator919420.java`](/data/search/java/APIzator919420.java)

```java
package com.stackoverflow.api;

import java.util.ArrayList;
import java.util.Collection;

/**
 * How can I calculate the difference between two ArrayLists?
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/919420">https://stackoverflow.com/a/919420</a>
 */
public class APIzator919420 {

  public static void calculateDifference(
    Collection firstList,
    Collection secondList
  )
    throws RuntimeException {
    // Create a couple ArrayList objects and populate them
    // Show the "before" lists
    System.out.println("First List: " + firstList);
    System.out.println("Second List: " + secondList);
    // Remove all elements in firstList from secondList
    secondList.removeAll(firstList);
    // Show the "after" list
    System.out.println("Result: " + secondList);
  }
}
```