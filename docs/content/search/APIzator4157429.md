---
title: "[Q#4157303][A#4157429] How to execute cmd commands via Java"
---

https://stackoverflow.com/q/4157303

I am trying to execute command line arguments via Java. For example:
The above opens the command line but does not execute cd or dir. Any ideas? I am running Windows XP, JRE6.
(I have revised my question to be more specific. The following answers were helpful but do not answer my question.)


```java
// Execute command
String command = "cmd /c start cmd.exe";
Process child = Runtime.getRuntime().exec(command);

// Get output stream to write from it
OutputStream out = child.getOutputStream();

out.write("cd C:/ /r/n".getBytes());
out.flush();
out.write("dir /r/n".getBytes());
out.close();
```


## Original code snippet

https://stackoverflow.com/a/4157429

The code you posted starts three different processes each with it's own command. To open a command prompt and then run a command try the following (never tried it myself):

```java
try {
    // Execute command
    String command = "cmd /c start cmd.exe";
    Process child = Runtime.getRuntime().exec(command);

    // Get output stream to write from it
    OutputStream out = child.getOutputStream();

    out.write("cd C:/ /r/n".getBytes());
    out.flush();
    out.write("dir /r/n".getBytes());
    out.close();
} catch (IOException e) {
}
```

## Produced APIzation

[`APIzator4157429.java`](/data/search/java/APIzator4157429.java)

```java
package com.stackoverflow.api;

import java.io.IOException;
import java.io.OutputStream;

/**
 * How to execute cmd commands via Java
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/4157429">https://stackoverflow.com/a/4157429</a>
 */
public class APIzator4157429 {

  public static void executeCommand(String command) throws RuntimeException {
    try {
      Process child = Runtime.getRuntime().exec(command);
      // Get output stream to write from it
      OutputStream out = child.getOutputStream();
      out.write("cd C:/ /r/n".getBytes());
      out.flush();
      out.write("dir /r/n".getBytes());
      out.close();
    } catch (IOException e) {}
  }
}
```