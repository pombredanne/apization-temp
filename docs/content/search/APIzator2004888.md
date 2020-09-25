---
title: "[Q#2000722][A#2004888] How to right align buttons on a HorizontalPanel (GWT)"
---

https://stackoverflow.com/q/2000722

I am trying to implement a simple dialog. I would like to have OK and cancel buttons aligned right at the bottom of the dialog. I embed the buttons into the HorizontalPanel and try to set horizontal alignment to RIGHT. However, this does not work. How to make the buttons align right? Thank you.
Here's the snippet:


```java
private Widget createButtonsPanel() {
    HorizontalPanel hp = new HorizontalPanel();
    hp.setCellHorizontalAlignment(saveButton, HasHorizontalAlignment.ALIGN_RIGHT);
    hp.setCellHorizontalAlignment(cancelButton, HasHorizontalAlignment.ALIGN_RIGHT);
    hp.add(saveButton);
    hp.add(cancelButton);       

    return hp;
}
```


## Original code snippet

https://stackoverflow.com/a/2004888

The point is to call setHorizontalAlignment before adding your buttons as shown below:
If you want your buttons to be tight together - put them both into some new container, and them put the container inside the right-alighned HorizontalPanel

```java
final HorizontalPanel hp = new HorizontalPanel();
final Button saveButton = new Button("save");
final Button cancelButton = new Button("cancel");

// just to see the bounds of the HorizontalPanel
hp.setWidth("600px");
hp.setBorderWidth(2);

// It only applies to widgets added after this property is set.
hp.setHorizontalAlignment(HasHorizontalAlignment.ALIGN_RIGHT);

hp.add(saveButton);
hp.add(cancelButton);

RootPanel.get().add(hp);
```

## Produced APIzation

[`APIzator2004888.java`](/data/search/java/APIzator2004888.java)

```java
package com.stackoverflow.api;

import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.RootPanel;

/**
 * How to right align buttons on a HorizontalPanel (GWT)
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/2004888">https://stackoverflow.com/a/2004888</a>
 */
public class APIzator2004888 {

  public static void rightButton() throws RuntimeException {
    final HorizontalPanel hp = new HorizontalPanel();
    final Button saveButton = new Button("save");
    final Button cancelButton = new Button("cancel");
    // just to see the bounds of the HorizontalPanel
    hp.setWidth("600px");
    hp.setBorderWidth(2);
    // It only applies to widgets added after this property is set.
    hp.setHorizontalAlignment(HasHorizontalAlignment.ALIGN_RIGHT);
    hp.add(saveButton);
    hp.add(cancelButton);
    RootPanel.get().add(hp);
  }
}
```