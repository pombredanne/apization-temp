---
title: "[Q#3501126][A#3501210] How to draw a filled triangle in android canvas?"
---

https://stackoverflow.com/q/3501126

So I'm drawing this triangle in android maps using the code below in my draw method:
The pointX_returned are the coordinates which I'm getting from the fields. They are basically latitudes and longitudes.
The result is a nice triangle but the insider is empty and therefore I can see the map. Is there a way to fill it up somehow?


```java
paint.setARGB(255, 153, 29, 29);
paint.setStyle(Paint.Style.FILL_AND_STROKE);
paint.setAntiAlias(true);

Path path = new Path();
path.moveTo(point1_returned.x, point1_returned.y);
path.lineTo(point2_returned.x, point2_returned.y);
path.moveTo(point2_returned.x, point2_returned.y);
path.lineTo(point3_returned.x, point3_returned.y);
path.moveTo(point3_returned.x, point3_returned.y);
path.lineTo(point1_returned.x, point1_returned.y);
path.close();

canvas.drawPath(path, paint);
```


## Original code snippet

https://stackoverflow.com/a/3501210

You probably need to do something like :
And use this color for your path, instead of your ARGB. Make sure the last point of your path ends on the first one, it makes sense also.
Tell me if it works please !

```java
Paint red = new Paint();

red.setColor(android.graphics.Color.RED);
red.setStyle(Paint.Style.FILL);
```

## Produced APIzation

[`APIzator3501210.java`](/data/search/java/APIzator3501210.java)

```java
package com.stackoverflow.api;

import android.graphics.Paint;

/**
 * How to draw a filled triangle in android canvas?
 *
 * @author APIzator
 * @see <a href="https://stackoverflow.com/a/3501210">https://stackoverflow.com/a/3501210</a>
 */
public class APIzator3501210 {

  public static void drawTriangle() throws RuntimeException {
    Paint red = new Paint();
    red.setColor(android.graphics.Color.RED);
    red.setStyle(Paint.Style.FILL);
  }
}
```