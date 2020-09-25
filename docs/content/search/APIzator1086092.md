---
title: "[Q#1086054][A#1086092] How to convert int[] to byte[]"
---

https://stackoverflow.com/q/1086054

I have an array of integers which represent a RGB image and would like to convert it to a byte array and save it to a file.
What's the best way to convert an array of integers to the array of bytes in Java?



## Original code snippet

https://stackoverflow.com/a/1086092

As Brian says, you need to work out how what sort of conversion you need.
Do you want to save it as a "normal" image file (jpg, png etc)?
If so, you should probably use the Java Image I/O API.
If you want to save it in a "raw" format, the order in which to write the bytes must be specified, and then use an IntBuffer and NIO.
As an example of using a ByteBuffer/IntBuffer combination:

```java
import java.nio.*;
import java.net.*;

class Test
{   
    public static void main(String [] args)
        throws Exception // Just for simplicity!
    {
        int[] data = { 100, 200, 300, 400 };

        ByteBuffer byteBuffer = ByteBuffer.allocate(data.length * 4);        
        IntBuffer intBuffer = byteBuffer.asIntBuffer();
        intBuffer.put(data);

        byte[] array = byteBuffer.array();

        for (int i=0; i < array.length; i++)
        {
            System.out.println(i + ": " + array[i]);
        }
    }
}
```

## Produced APIzation

[`APIzator1086092.java`](/data/search/java/APIzator1086092.java)

```java
package com.stackoverflow.api;

import java.net.*;
import java.nio.*;

/**
 * How to convert int[] to byte[]
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/1086092">https://stackoverflow.com/a/1086092</a>
 */
public class APIzator1086092 {

  public class Test {

    public static byte[] convertInt(int[] data)
      throws Exception { // Just for simplicity!
      ByteBuffer byteBuffer = ByteBuffer.allocate(data.length * 4);
      IntBuffer intBuffer = byteBuffer.asIntBuffer();
      intBuffer.put(data);
      for (int i = 0; i < array.length; i++) {
        System.out.println(i + ": " + array[i]);
      }
      return byteBuffer.array();
    }
  }
}
```