---
title: "[Q#6563258][A#6563306] How to initialise BigInteger after creating instantces (constructor can't be called)"
---

https://stackoverflow.com/q/6563258

Imagine an instance of BigInteger, then how to initialize it after creating instance?
For example:
How to put a value in t?
If the constructor cannot be called, then what can be done, to put the value in the object?


```java
BigInteger t = new BigInteger();
```


## Original code snippet

https://stackoverflow.com/a/6563306

I'm not 100% sure of what specifically is confusing you as you'd initialize the items in the BigInteger array as you would any other object array. e.g.,
Edit 1:
Ah, now I understand your problem: you want to create a BigInteger instance and then later set its value.  The answer is the same as for Strings: you can't, and that it is because BigIntegers like Strings are immutable and can't be changed once created. For this reason the class has no "setter" methods. The way to change the value of a BigInteger variable is to set it to a new BigInteger instance.

```java
BigInteger t2 [] = new BigInteger[2];

  t2[0] = new BigInteger("2");
  t2[1] = BigInteger.ZERO; // ZERO, ONE, and TEN are defined by constants

  // or

  BigInteger[] t3 = {new BigInteger("2"), BigInteger.ZERO};
```

## Produced APIzation

[`APIzator6563306.java`](/data/search/java/APIzator6563306.java)

```java
package com.stackoverflow.api;

import java.math.BigInteger;

/**
 * How to initialise BigInteger after creating instantces (constructor can't be called)
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/6563306">https://stackoverflow.com/a/6563306</a>
 */
public class APIzator6563306 {

  public static void call(BigInteger[] t2, BigInteger[] t3)
    throws RuntimeException {
    // or
  }
}
```