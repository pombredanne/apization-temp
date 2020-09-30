---
title: "[Q#9650992][A#9652143] How to change text color in the JtextArea?"
---

https://stackoverflow.com/q/9650992

I need to know how to do this:
Let's say: I have a code in the jtextArea like this,
LOAD R1, 1
DEC R1
STORE M, R1
ADD R4, R1,8
I wanted to change the color of LOAD, DEC, STORE and ADD to color BLUE
R1, R4 to color green
M to RED
numbers to ORANGE
How to change the color of this text?
These text were from notepad or can be directly type to the textArea.
Thank you in advance.



## Original code snippet

https://stackoverflow.com/a/9652143

JTextArea is meant to entertain Plain Text. The settings applied to a single character applies to whole of the document in JTextArea. But with JTextPane or JEditorPane you have the choice, to colour your String Literals as per your liking. Here with the help of JTextPane, you can do it like this :
here is the Output :


```java
import java.awt.*;

import java.awt.event.*;

import javax.swing.*;

import javax.swing.border.*;

import javax.swing.text.AttributeSet;
import javax.swing.text.SimpleAttributeSet;
import javax.swing.text.StyleConstants;
import javax.swing.text.StyleContext;

public class TextPaneTest extends JFrame
{
    private JPanel topPanel;
    private JTextPane tPane;

    public TextPaneTest()
    {
        topPanel = new JPanel();        

        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);            

        EmptyBorder eb = new EmptyBorder(new Insets(10, 10, 10, 10));

        tPane = new JTextPane();                
        tPane.setBorder(eb);
        //tPane.setBorder(BorderFactory.createLineBorder(Color.DARK_GRAY));
        tPane.setMargin(new Insets(5, 5, 5, 5));

        topPanel.add(tPane);

        appendToPane(tPane, "My Name is Too Good.\n", Color.RED);
        appendToPane(tPane, "I wish I could be ONE of THE BEST on ", Color.BLUE);
        appendToPane(tPane, "Stack", Color.DARK_GRAY);
        appendToPane(tPane, "Over", Color.MAGENTA);
        appendToPane(tPane, "flow", Color.ORANGE);

        getContentPane().add(topPanel);

        pack();
        setVisible(true);   
    }

    private void appendToPane(JTextPane tp, String msg, Color c)
    {
        StyleContext sc = StyleContext.getDefaultStyleContext();
        AttributeSet aset = sc.addAttribute(SimpleAttributeSet.EMPTY, StyleConstants.Foreground, c);

        aset = sc.addAttribute(aset, StyleConstants.FontFamily, "Lucida Console");
        aset = sc.addAttribute(aset, StyleConstants.Alignment, StyleConstants.ALIGN_JUSTIFIED);

        int len = tp.getDocument().getLength();
        tp.setCaretPosition(len);
        tp.setCharacterAttributes(aset, false);
        tp.replaceSelection(msg);
    }

    public static void main(String... args)
    {
        SwingUtilities.invokeLater(new Runnable()
            {
                public void run()
                {
                    new TextPaneTest();
                }
            });
    }
}
```

## Produced APIzation

[`APIzator9652143.java`](/data/search/java/APIzator9652143.java)

```java
package com.stackoverflow.api;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.border.*;
import javax.swing.text.AttributeSet;
import javax.swing.text.SimpleAttributeSet;
import javax.swing.text.StyleConstants;
import javax.swing.text.StyleContext;

/**
 * How to change text color in the JtextArea?
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/9652143">https://stackoverflow.com/a/9652143</a>
 */
public class APIzator9652143 {

  public class TextPaneTest extends JFrame {
    private JPanel topPanel;

    private JTextPane tPane;

    public TextPaneTest() {
      topPanel = new JPanel();
      setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
      setLocationRelativeTo(null);
      EmptyBorder eb = new EmptyBorder(new Insets(10, 10, 10, 10));
      tPane = new JTextPane();
      tPane.setBorder(eb);
      // tPane.setBorder(BorderFactory.createLineBorder(Color.DARK_GRAY));
      tPane.setMargin(new Insets(5, 5, 5, 5));
      topPanel.add(tPane);
      appendToPane(tPane, "My Name is Too Good.\n", Color.RED);
      appendToPane(tPane, "I wish I could be ONE of THE BEST on ", Color.BLUE);
      appendToPane(tPane, "Stack", Color.DARK_GRAY);
      appendToPane(tPane, "Over", Color.MAGENTA);
      appendToPane(tPane, "flow", Color.ORANGE);
      getContentPane().add(topPanel);
      pack();
      setVisible(true);
    }

    private void appendToPane(JTextPane tp, String msg, Color c) {
      StyleContext sc = StyleContext.getDefaultStyleContext();
      AttributeSet aset = sc.addAttribute(
        SimpleAttributeSet.EMPTY,
        StyleConstants.Foreground,
        c
      );
      aset = sc.addAttribute(aset, StyleConstants.FontFamily, "Lucida Console");
      aset =
        sc.addAttribute(
          aset,
          StyleConstants.Alignment,
          StyleConstants.ALIGN_JUSTIFIED
        );
      int len = tp.getDocument().getLength();
      tp.setCaretPosition(len);
      tp.setCharacterAttributes(aset, false);
      tp.replaceSelection(msg);
    }

    public static void changeColor() {
      SwingUtilities.invokeLater(
        new Runnable() {

          public void run() {
            new TextPaneTest();
          }
        }
      );
    }
  }
}
```