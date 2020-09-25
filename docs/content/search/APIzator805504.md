---
title: "[Q#794381][A#805504] How to find files that match a wildcard string in Java?"
---

https://stackoverflow.com/q/794381

This should be really simple. If I have a String like this:
then what is a generally-accepted way to get a list of files that match this pattern? (e.g. it should match ../Test1/sample22b.txt and ../Test4/sample-spiffy.txt but not ../Test3/sample2.blah or ../Test44/sample2.txt)
I've taken a look at org.apache.commons.io.filefilter.WildcardFileFilter and it seems like the right beast but I'm not sure how to use it for finding files in a relative directory path.
I suppose I can look the source for ant since it uses wildcard syntax, but I must be missing something pretty obvious here.
(edit: the above example was just a sample case. I'm looking for the way to parse general paths containing wildcards at runtime. I figured out how to do it based on mmyers' suggestion but it's kind of annoying. Not to mention that the java JRE seems to auto-parse simple wildcards in the main(String[] arguments) from a single argument to "save" me time and hassle... I'm just glad I didn't have non-file arguments in the mix.)


```java
../Test?/sample*.txt
```


## Original code snippet

https://stackoverflow.com/a/805504

Consider DirectoryScanner from Apache Ant:
You'll need to reference ant.jar (~ 1.3 MB for ant 1.7.1).

```java
DirectoryScanner scanner = new DirectoryScanner();
scanner.setIncludes(new String[]{"**/*.java"});
scanner.setBasedir("C:/Temp");
scanner.setCaseSensitive(false);
scanner.scan();
String[] files = scanner.getIncludedFiles();
```

## Produced APIzation

[`APIzator805504.java`](/data/search/java/APIzator805504.java)

```java
package com.stackoverflow.api;

import org.apache.tools.ant.DirectoryScanner;

/**
 * How to find files that match a wildcard string in Java?
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/805504">https://stackoverflow.com/a/805504</a>
 */
public class APIzator805504 {

  public static String[] findFile() throws RuntimeException {
    DirectoryScanner scanner = new DirectoryScanner();
    scanner.setIncludes(new String[] { "**/*.java" });
    scanner.setBasedir("C:/Temp");
    scanner.setCaseSensitive(false);
    scanner.scan();
    return scanner.getIncludedFiles();
  }
}
```