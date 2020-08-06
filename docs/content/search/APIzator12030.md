---
title: '[Q–11930][A–12030] How can I determine the IP of my router/gateway in Java?'
---

https://stackoverflow.com/q/11930

How can I determine the IP of my router/gateway in Java? I can get my IP easily enough. I can get my internet IP using a service on a website. But how can I determine my gateway's IP?
This is somewhat easy in .NET if you know your way around. But how do you do it in Java?



## Original code snippet

https://stackoverflow.com/a/12030

Java doesn't make this as pleasant as other languages, unfortunately. Here's what I did:
This presumes that the gateway is the second token and not the third. If it is, you need to add an extra st.nextToken(); to advance the tokenizer one more spot.

```java
import java.io.*;
import java.util.*;

public class ExecTest {
    public static void main(String[] args) throws IOException {
        Process result = Runtime.getRuntime().exec("traceroute -m 1 www.amazon.com");

        BufferedReader output = new BufferedReader(new InputStreamReader(result.getInputStream()));
        String thisLine = output.readLine();
        StringTokenizer st = new StringTokenizer(thisLine);
        st.nextToken();
        String gateway = st.nextToken();
        System.out.printf("The gateway is %s\n", gateway);
    }
}
st.nextToken();
```

## Produced APIzation

[`APIzator12030.java`](/data/search/java/APIzator12030.java)

```java
package com.stackoverflow.api;

import java.io.*;
import java.util.*;

/**
 * How can I determine the IP of my router/gateway in Java?
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/12030">https://stackoverflow.com/a/12030</a>
 */
public class APIzator12030 {

  public static String determineGateway() throws IOException {
    Process result = Runtime
      .getRuntime()
      .exec("traceroute -m 1 www.amazon.com");
    BufferedReader output = new BufferedReader(
      new InputStreamReader(result.getInputStream())
    );
    String thisLine = output.readLine();
    StringTokenizer st = new StringTokenizer(thisLine);
    st.nextToken();
    String gateway = st.nextToken();
    System.out.printf("The gateway is %s\n", gateway);
    return gateway;
  }
}

```