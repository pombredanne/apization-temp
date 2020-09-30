---
title: "[Q#8756377][A#8756596] how to pass command line arguments to main method dynamically"
---

https://stackoverflow.com/q/8756377

I am passing my main class as a command line argument to launch VM
Now i need to pass command line arguments to that main class
Is there any way to do this?
this is the way i am doing it
here userVMargs is classpath of my main class and the also classpath of the class which is being used to invoke the method of class inside my main class
and cmdLine is having my main class along with the class and its function
and i am using eclipse as IDE to develop my project


```java
VirtualMachineManager manager = Bootstrap.virtualMachineManager();
    LaunchingConnector connector = manager.defaultConnector();
    Map arguments = connector.defaultArguments();
    ((Connector.Argument)arguments.get("options")).setValue(userVMArgs);
    ((Connector.Argument)arguments.get("main")).setValue(cmdLine);
```


## Original code snippet

https://stackoverflow.com/a/8756596

If you want to launch VM by sending arguments, you should send VM arguments and not Program arguments.
Program arguments are arguments that are passed to your application, which are accessible via the "args" String array parameter of your main method. VM arguments are arguments such as System properties that are passed to the JavaSW interpreter. The Debug configuration above is essentially equivalent to:
The VM arguments go after the call to your Java interpreter (ie, 'java') and before the Java class. Program arguments go after your Java class.
Consider a program ArgsTest.java:
If given input as,
in the commandline, in project bin folder would give the following result:

```java
java -DsysProp1=sp1 -DsysProp2=sp2 test.ArgsTest pro1 pro2 pro3
package test;

import java.io.IOException;

    public class ArgsTest {

        public static void main(String[] args) throws IOException {

            System.out.println("Program Arguments:");
            for (String arg : args) {
                System.out.println("\t" + arg);
            }

            System.out.println("System Properties from VM Arguments");
            String sysProp1 = "sysProp1";
            System.out.println("\tName:" + sysProp1 + ", Value:" + System.getProperty(sysProp1));
            String sysProp2 = "sysProp2";
            System.out.println("\tName:" + sysProp2 + ", Value:" + System.getProperty(sysProp2));

        }
    }
java -DsysProp1=sp1 -DsysProp2=sp2 test.ArgsTest pro1 pro2 pro3
Program Arguments:
  pro1
  pro2
  pro3
System Properties from VM Arguments
  Name:sysProp1, Value:sp1
  Name:sysProp2, Value:sp2
```

## Produced APIzation

[`APIzator8756596.java`](/data/search/java/APIzator8756596.java)

```java
package com.stackoverflow.api;

import java.io.IOException;

/**
 * how to pass command line arguments to main method dynamically
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/8756596">https://stackoverflow.com/a/8756596</a>
 */
public class APIzator8756596 {

  public class ArgsTest {

    public static void passArgument(String sysProp1, String sysProp2)
      throws IOException {
      System.out.println("Program Arguments:");
      for (String arg : args) {
        System.out.println("\t" + arg);
      }
      System.out.println("System Properties from VM Arguments");
      System.out.println(
        "\tName:" + sysProp1 + ", Value:" + System.getProperty(sysProp1)
      );
      System.out.println(
        "\tName:" + sysProp2 + ", Value:" + System.getProperty(sysProp2)
      );
    }
  }
}
```