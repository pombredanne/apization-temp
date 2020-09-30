---
title: "[Q#203984][A#203992] How do I remove repeated elements from ArrayList?"
---

https://stackoverflow.com/q/203984

I have an ArrayList of Strings, and I want to remove repeated strings from it. How can I do this?



## Original code snippet

https://stackoverflow.com/a/203992

If you don't want duplicates in a Collection, you should consider why you're using a Collection that allows duplicates. The easiest way to remove repeated elements is to add the contents to a Set (which will not allow duplicates) and then add the Set back to the ArrayList:
Of course, this destroys the ordering of the elements in the ArrayList.

```java
List<String> al = new ArrayList<>();
// add elements to al, including duplicates
Set<String> hs = new HashSet<>();
hs.addAll(al);
al.clear();
al.addAll(hs);
```

## Produced APIzation

[`APIzator203992.java`](/data/search/java/APIzator203992.java)

```java
package com.stackoverflow.api;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * How do I remove repeated elements from ArrayList?
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/203992">https://stackoverflow.com/a/203992</a>
 */
public class APIzator203992 {

  public static void removeElement() throws RuntimeException {
    List<String> al = new ArrayList<>();
    // add elements to al, including duplicates
    Set<String> hs = new HashSet<>();
    hs.addAll(al);
    al.clear();
    al.addAll(hs);
  }
}
```