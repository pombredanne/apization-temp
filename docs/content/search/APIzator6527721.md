---
title: "[Q#6527664][A#6527721] How do you upload a file to an FTP server?"
---

https://stackoverflow.com/q/6527664

I created a function to download files from an FTP server that I have access to.  How would I upload files back to the FTP server?
Below is the download_files method i used:


```java
public static void download_files(String un, String pw, String ip, String dir, String fn, String fp){

    URLConnection con;
    BufferedInputStream in = null;
    FileOutputStream out = null;

    try{
        URL url = new URL("ftp://"+un+":"+pw+"@"+ip+"/"+dir+"/"+fn+";type=i");
        con = url.openConnection();
        in = new BufferedInputStream(con.getInputStream());
        out = new FileOutputStream(fp+fn);

        int i = 0;
        byte[] bytesIn = new byte[1024];

        while ((i = in.read(bytesIn)) >= 0) {
            out.write(bytesIn, 0, i);
        }

    }catch(Exception e){
        System.out.print(e);
        e.printStackTrace();
        System.out.println("Error while FTP'ing "+fn);
    }finally{
        try{
            out.close();
            in.close();
        }catch(IOException e){
            e.printStackTrace();
            System.out.println("Error while closing FTP connection");
        }
    }
}
```


## Original code snippet

https://stackoverflow.com/a/6527721

Use the FTPClient Class from the Apache Commons Net library.
This is a snippet with an example:
Snippet taken from http://www.kodejava.org/examples/356.html

```java
FTPClient client = new FTPClient();
FileInputStream fis = null;

try {
    client.connect("ftp.domain.com");
    client.login("admin", "secret");

    //
    // Create an InputStream of the file to be uploaded
    //
    String filename = "Touch.dat";
    fis = new FileInputStream(filename);

    //
    // Store file to server
    //
    client.storeFile(filename, fis);
    client.logout();
} catch (IOException e) {
    e.printStackTrace();
} finally {
    try {
        if (fis != null) {
            fis.close();
        }
        client.disconnect();
    } catch (IOException e) {
        e.printStackTrace();
    }
}
```

## Produced APIzation

[`APIzator6527721.java`](/data/search/java/APIzator6527721.java)

```java
package com.stackoverflow.api;

import java.io.FileInputStream;
import java.io.IOException;
import org.apache.commons.net.ftp.FTPClient;

/**
 * How do you upload a file to an FTP server?
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/6527721">https://stackoverflow.com/a/6527721</a>
 */
public class APIzator6527721 {

  public static void uploadFile(String filename) throws RuntimeException {
    FTPClient client = new FTPClient();
    FileInputStream fis = null;
    try {
      client.connect("ftp.domain.com");
      client.login("admin", "secret");
      //
      // Create an InputStream of the file to be uploaded
      fis = new FileInputStream(filename);
      //
      // Store file to server
      //
      client.storeFile(filename, fis);
      client.logout();
    } catch (IOException e) {
      e.printStackTrace();
    } finally {
      try {
        if (fis != null) {
          fis.close();
        }
        client.disconnect();
      } catch (IOException e) {
        e.printStackTrace();
      }
    }
  }
}
```