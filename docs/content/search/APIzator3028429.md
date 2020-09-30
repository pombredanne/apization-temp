---
title: "[Q#3028380][A#3028429] How to convert BigInteger to String in java"
---

https://stackoverflow.com/q/3028380

I converted a String to BigInteger as follows:
Now I want my string back. I'm using m.toString() but that's giving me the desired result.
Why? Where is the bug and what can I do about it?


```java
Scanner sc=new Scanner(System.in);
System.out.println("enter the message");
String msg=sc.next();
byte[] bytemsg=msg.getBytes();
BigInteger m=new BigInteger(bytemsg);
```


## Original code snippet

https://stackoverflow.com/a/3028429

You want to use BigInteger.toByteArray()
The way I understand it is that you're doing the following transformations:
And you want the reverse:
Note that you probably want to use overloads of String.getBytes() and String(byte[]) that specifies an explicit encoding, otherwise you may run into encoding issues.

```java
String msg = "Hello there!";
BigInteger bi = new BigInteger(msg.getBytes());
System.out.println(new String(bi.toByteArray())); // prints "Hello there!"
String  -----------------> byte[] ------------------> BigInteger
          String.getBytes()         BigInteger(byte[])
BigInteger ------------------------> byte[] ------------------> String
             BigInteger.toByteArray()          String(byte[])
```

## Produced APIzation

[`APIzator3028429.java`](/data/search/java/APIzator3028429.java)

```java
package com.stackoverflow.api;

import java.math.BigInteger;

/**
 * How to convert BigInteger to String in java
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/3028429">https://stackoverflow.com/a/3028429</a>
 */
public class APIzator3028429 {

  public static String convertBiginteger(String msg) throws RuntimeException {
    BigInteger bi = new BigInteger(msg.getBytes());
    return new String(bi.toByteArray());
  }
}
```