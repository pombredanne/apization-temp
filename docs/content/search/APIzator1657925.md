---
title: "[Q#1657887][A#1657925] How should I throw a divide by zero exception in Java without actually dividing by zero?"
---

https://stackoverflow.com/q/1657887

I have an I2C device that wants two inputs: a denominator and a numerator. Both are written to separate addresses, so no actual calculation (numerator/denominator) is done. The problem with this is that a divide by zero could occur on the I2C device, so a divide by zero error needs to be checked for. Ideally, exactly the same thing would happen if the dividing were done by the java code.
At the moment, I've bodged an unused variable that does the division, but I'm worried it'll get optimized out:
Surely there's a better way!


```java
public void setKp(int numerator, int divisor)
{
    int zeroCheck = numerator / divisor;
    //... doesn't use zeroCheck
}
```


## Original code snippet

https://stackoverflow.com/a/1657925

You should not throw an ArithmeticException. Since the error is in the supplied arguments, throw an IllegalArgumentException. As the documentation says:
Thrown to indicate that a method has been passed an illegal or inappropriate argument.
Which is exactly what is going on here.

```java
if (divisor == 0) {
    throw new IllegalArgumentException("Argument 'divisor' is 0");
}
```

## Produced APIzation

[`APIzator1657925.java`](/data/search/java/APIzator1657925.java)

```java
package com.stackoverflow.api;

/**
 * How should I throw a divide by zero exception in Java without actually dividing by zero?
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/1657925">https://stackoverflow.com/a/1657925</a>
 */
public class APIzator1657925 {

  public static void throwDivide(int divisor) throws RuntimeException {
    if (divisor == 0) {
      throw new IllegalArgumentException("Argument 'divisor' is 0");
    }
  }
}
```