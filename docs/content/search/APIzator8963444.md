---
title: "[Q#8963413][A#8963444] How to run Windows commands in JAVA and return the result text as a string"
---

https://stackoverflow.com/q/8963413

Possible Duplicate:
Get output from a process
Executing DOS commands from Java
I am trying to run a cmd command from within a JAVA console program e.g.:
and then return the output of the command into a string in JAVA e.g. output:


```java
ver
string result = "Windows NT 5.1"
```


## Original code snippet

https://stackoverflow.com/a/8963444

You can use the following code for this

```java
import java.io.*; 

    public class doscmd 
    { 
        public static void main(String args[]) 
        { 
            try 
            { 
                Process p=Runtime.getRuntime().exec("cmd /c dir"); 
                p.waitFor(); 
                BufferedReader reader=new BufferedReader(
                    new InputStreamReader(p.getInputStream())
                ); 
                String line; 
                while((line = reader.readLine()) != null) 
                { 
                    System.out.println(line);
                } 

            }
            catch(IOException e1) {e1.printStackTrace();} 
            catch(InterruptedException e2) {e2.printStackTrace();} 

            System.out.println("Done"); 
        } 
    }
```

## Produced APIzation

[`APIzator8963444.java`](/data/search/java/APIzator8963444.java)

```java
package com.stackoverflow.api;

import java.io.*;

/**
 * How to run Windows commands in JAVA and return the result text as a string
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/8963444">https://stackoverflow.com/a/8963444</a>
 */
public class APIzator8963444 {

  public class doscmd {

    public static void runCommand() {
      try {
        Process p = Runtime.getRuntime().exec("cmd /c dir");
        p.waitFor();
        BufferedReader reader = new BufferedReader(
          new InputStreamReader(p.getInputStream())
        );
        String line;
        while ((line = reader.readLine()) != null) {
          System.out.println(line);
        }
      } catch (IOException e1) {
        e1.printStackTrace();
      } catch (InterruptedException e2) {
        e2.printStackTrace();
      }
      System.out.println("Done");
    }
  }
}
```