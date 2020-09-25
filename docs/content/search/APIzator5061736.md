---
title: "[Q#5061721][A#5061736] How can I dynamically add items to a Java array?"
---

https://stackoverflow.com/q/5061721

In PHP, you can dynamically add elements to arrays by the following:
After this, $x would be an array like this: {1,2}.
Is there a way to do something similar in Java?


```java
$x = new Array();
$x[] = 1;
$x[] = 2;
```


## Original code snippet

https://stackoverflow.com/a/5061736

Look at java.util.LinkedList or java.util.ArrayList

```java
List<Integer> x = new ArrayList<Integer>();
x.add(1);
x.add(2);
```

## Produced APIzation

[`APIzator5061736.java`](/data/search/java/APIzator5061736.java)

```java
package com.stackoverflow.api;

import java.util.ArrayList;
import java.util.List;

/**
 * How can I dynamically add items to a Java array?
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/5061736">https://stackoverflow.com/a/5061736</a>
 */
public class APIzator5061736 {

  public static void addItem(List<Integer> x) throws RuntimeException {}
}
```