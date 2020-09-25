---
title: "[Q#2071682][A#2071743] How to Execute SQL Script File in Java?"
---

https://stackoverflow.com/q/2071682

I want to execute an SQL script file in Java without reading the entire file content into a big query and executing it.
Is there any other standard way?



## Original code snippet

https://stackoverflow.com/a/2071743

There is no portable way of doing that. You can execute a native client as an external program to do that though:

```java
import java.io.*;
public class CmdExec {

  public static void main(String argv[]) {
    try {
      String line;
      Process p = Runtime.getRuntime().exec
        ("psql -U username -d dbname -h serverhost -f scripfile.sql");
      BufferedReader input =
        new BufferedReader
          (new InputStreamReader(p.getInputStream()));
      while ((line = input.readLine()) != null) {
        System.out.println(line);
      }
      input.close();
    }
    catch (Exception err) {
      err.printStackTrace();
    }
  }
}
```

## Produced APIzation

[`APIzator2071743.java`](/data/search/java/APIzator2071743.java)

```java
package com.stackoverflow.api;

import java.io.*;

/**
 * How to Execute SQL Script File in Java?
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/2071743">https://stackoverflow.com/a/2071743</a>
 */
public class APIzator2071743 {

  public class CmdExec {

    public static void executeFile() {
      try {
        String line;
        Process p = Runtime
          .getRuntime()
          .exec("psql -U username -d dbname -h serverhost -f scripfile.sql");
        BufferedReader input = new BufferedReader(
          new InputStreamReader(p.getInputStream())
        );
        while ((line = input.readLine()) != null) {
          System.out.println(line);
        }
        input.close();
      } catch (Exception err) {
        err.printStackTrace();
      }
    }
  }
}
```