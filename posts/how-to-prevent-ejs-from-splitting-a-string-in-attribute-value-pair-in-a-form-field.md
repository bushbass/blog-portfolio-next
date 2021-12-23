---
title: "How to prevent ejs from splitting a string in attribute-value pair in a form field"
date: "2019-07-24"
tags: 
  - "javascript"
---

TL:DR - put quotes around your EJS value when it is being used as an HTML attribute

I was making a simple Express app with EJS templating and MongoDB for my REST API. I passed the response, which was a few strings and a date, to the view in the typical fashion, and I could verify that the data was being passed by outputting the object to the view like this:

```
<%=responseObject%>
//which displayed this:
{ 
  _id: 5d347b004b0c201108909a55, 
  name: 'hot dogs', 
  description: 'costco dogs', 
  dateOnBag: '3/4/19', __v: 0 
}
```

This displayed the entire object on the screen. Additionally, I could display one of the object's values using dot notation with no problem.

```
<h1>Edit <%=responseObject.name%></h1>
// which displayed this
```

**Edit hot dogs**

However, when I tried to use the same syntax to prefill a form field like this:

```
<li>
  <input type="text" name="name" value=<%-responeseObject.name%>><br />
  <label for="name">Item Name </label>
<li>
```

It pre-filled only the first word, "hot" instead of both words "hot dog"

  
Item Name

I finally figured out that I needed to put quotes around it. When Express renders the page it simply replaces the EJS syntax with a string of text so the resulting HTML looked more like this:

```
  <input type="text" name="name" value=hot dog><br />
```

I later learned that HTML attribute values do not always need quotes. (basically, when there are no spaces) [https://mathiasbynens.be/notes/unquoted-attribute-values](https://mathiasbynens.be/notes/unquoted-attribute-values) So in the example above,

```
value=hot dog
//is equivalent to 
value="hot" dog
```

which leaves dog just hanging out there, an attribute without any value which HTML just ignores in this case. Actually, if I'm interpreting the spec correctly, it is setting the value of dog to true which is any case is not used so again it is ignored. [https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)
