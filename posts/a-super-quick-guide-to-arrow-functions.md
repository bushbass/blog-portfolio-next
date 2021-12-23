---
title: "A Super quick guide to arrow functions"
date: "2020-02-14"
categories:
  - "javascript"
tags:
  - "arrow-function"
  - "es6"
  - "javascript"
---

I added a video version of this blog. If you prefer video, check it out: [https://youtu.be/HC2W75WMw6c](https://youtu.be/HC2W75WMw6c)

This is NOT a definitive guide to arrow functions. I'm writing a few other tutorials and blogs and want to have something to point people to so they can have a quick explanation and example of arrow functions since they are in so many of the modern frameworks. Just enough to be dangerous! To be clear, there are reasons where you should not use arrow functions, but they are not going to be discussed in this blog post. I just want you to be able to know how they work when you see them "in the wild".

Let's get started. I'm going to take you step by step converting a regular function into an arrow function.

Here's a regular function using the function keyword

![](/images/1-sayMyName.png)

Let's change that to an anonymous function expression

![](/images/2-sayExpressionName.png)

Should be nothing new here so far. No Arrows or ES6 yet, but here it comes...

First remove the function keyword and add the arrow

![](/images/3-sayArrowName.png)

The only thing going on there is removing the function keyword and adding the arrow. And that's it! You've gone and made an arrow function! Hurray! But wait, there's more!

If there is only one argument, you can get rid of the parentheses around it.

![](/images/4-sayParensName.png)

Getting pretty lean but we can take it even further. If the body of the code is only one line, we can get rid of the curly braces.

![](/images/5-sayNoBracesName.png)

Frequently, you'll see these used as a callback in another function so there is no const and no function name. This is the case that we see quite a bit and the real reason I wrote this all up in the first place

![](/images/6-anonymousArrow.png)

This doesn't do anything on its own, but as a callback it's useful. Here we're using as a callback for looping over an array with the forEach array method.

![](/images/7-forEach.png)

As a comparison, here's a regular old for loop. Sure, we understand this as programmers, but the arrow function just reads like a sentence in normal language. So much easier to understand!

![](/images/8-oldLoop.png)

I think that covers the basics. Again this is not meant to be the definitive guide, just an intro to figure out what they mean because we see them 'in the wild' in all the modern frameworks.
