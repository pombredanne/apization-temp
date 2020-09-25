---
title: "[Q#2948444][A#2948453] How do you set a double value to a \"non-value\""
---

https://stackoverflow.com/q/2948444

I have two double data elements in an object.
Sometimes they are set with a proper value and sometimes not. When the form field from which they values are received is not filled I want to set them to some value that tells me, during the rest of the code that the form fields were left empty.
I can't set the values to null as that gives an error, is there some way I can make them 'Undefined'.
PS. Not only am I not sure that this is possible, it might not also make sense. But if there is some best practice for such a situation I would be keen to hear it.



## Original code snippet

https://stackoverflow.com/a/2948453

Two obvious options:
Use a "not a number" (NaN) value:
Note that some other operations on "normal" numbers could give you NaN values as well though (0 divided by 0 for example).

```java
double d = 5.5;
System.out.println(Double.isNaN(d)); // false
d = Double.NaN;
System.out.println(Double.isNaN(d)); // true
```

## Produced APIzation

[`APIzator2948453.java`](/data/search/java/APIzator2948453.java)

```java
package com.stackoverflow.api;

/**
 * How do you set a double value to a "non-value"
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/2948453">https://stackoverflow.com/a/2948453</a>
 */
public class APIzator2948453 {

  public static String setValue(double d) throws RuntimeException {
    // false
    System.out.println(Double.isNaN(d));
    d = Double.NaN;
    return Double.isNaN(d);
  }
}
```