---
title: "[Q#5153811][A#5153956] How to convert a hexadecimal string to long in java?"
---

https://stackoverflow.com/q/5153811

I want to convert a hex string to long in java.
I have tried with general conversion.
But I am getting this error message:
Is there any way to convert String to long in java? Or am i trying which is not really possible!!
Thanks!


```java
String s = "4d0d08ada45f9dde1e99cad9";
long l = Long.valueOf(s).longValue();
System.out.println(l);
String ls = Long.toString(l);
java.lang.NumberFormatException: For input string: "4d0d08ada45f9dde1e99cad9"
```


## Original code snippet

https://stackoverflow.com/a/5153956

Long.decode(str) accepts a variety of formats:
Accepts decimal, hexadecimal, and octal
  numbers given by the following
  grammar:
  DecodableString:
Sign:
But in your case that won't help, your String is beyond the scope of what long can hold. You need a BigInteger:
Output:
23846102773961507302322850521
For Comparison, here's Long.MAX_VALUE:
9223372036854775807

```java
String s = "4d0d08ada45f9dde1e99cad9";
BigInteger bi = new BigInteger(s, 16);
System.out.println(bi);
```

## Produced APIzation

[`APIzator5153956.java`](/data/search/java/APIzator5153956.java)

```java
package com.stackoverflow.api;

import java.math.BigInteger;

/**
 * How to convert a hexadecimal string to long in java?
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/5153956">https://stackoverflow.com/a/5153956</a>
 */
public class APIzator5153956 {

  public static BigInteger convertString(String s) throws RuntimeException {
    BigInteger bi = new BigInteger(s, 16);
    return bi;
  }
}
```