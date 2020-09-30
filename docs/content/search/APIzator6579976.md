---
title: "[Q#6579921][A#6579976] How to type \":\" (\"colon\") in regexp?"
---

https://stackoverflow.com/q/6579921

: ("colon") has a special meaning in regexp
But i need to use it as is, like [A-Za-z0-9.,-:]*
I've tried to escape it, but this doesn't work [A-Za-z0-9.,-\:]*



## Original code snippet

https://stackoverflow.com/a/6579976

In most regex implementations (including Java's), : has no special meaning, neither inside nor outside a character class.
Your problem is most likely due to the fact the - acts as a range operator in your class:
where ,-: matches all ascii characters between ',' and ':'. Note that it still matches the literal ':' however!
Try this instead:
By placing - at the start or the end of the class, it matches the literal "-". As mentioned in the comments by Keoki Zee, you can also escape the - inside the class, but most people simply add it at the end.
A demo:

```java
[A-Za-z0-9.,-:]*
[A-Za-z0-9.,:-]*
public class Test {
    public static void main(String[] args) {
        System.out.println("8:".matches("[,-:]+"));      // true: '8' is in the range ','..':'
        System.out.println("8:".matches("[,:-]+"));      // false: '8' does not match ',' or ':' or '-'
        System.out.println(",,-,:,:".matches("[,:-]+")); // true: all chars match ',' or ':' or '-'
    }
}
```

## Produced APIzation

[`APIzator6579976.java`](/data/search/java/APIzator6579976.java)

```java
package com.stackoverflow.api;

/**
 * How to type ":" ("colon") in regexp?
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/6579976">https://stackoverflow.com/a/6579976</a>
 */
public class APIzator6579976 {

  public class Test {

    public static boolean type() {
      // true: '8' is in the range ','..':'
      System.out.println("8:".matches("[,-:]+"));
      // false: '8' does not match ',' or ':' or '-'
      System.out.println("8:".matches("[,:-]+"));
      return ",,-,:,:".matches("[,:-]+");
    }
  }
}
```