---
title: "How to write your own forEach method in Javascript - Part 2"
date: "2017-11-07"
categories: 
  - "javascript"
---

So let's get started on writing our own version of .forEach.  Here is the starter code given in the git repo

1 // ===================== EACH ===================== 2 // Call iterator(value, key, collection) for each element of collection. 3 // Accepts both arrays and objects. 4 // 5 // Note: each() does not have a return value, but rather simply runs the 6 // iterator function over each item in the input collection. 7 8     var each = function(collection, iterator) { 9      // Write your code here 10   };

So there are a few things going on here.  The best thing to do when approaching a coding problem is to break the larger problem down into manageable chunks.  Let's start by understanding what they are really asking for here.

The first line tells us what is supposed to happen inside our function.  Call a function with some arguments for each element of a collection.  What do they mean by collection?  While forEach is typicall thought of as an array method, this challenge is asking for us to accept both arrays and objects so collection refers to whichever one is passed in.  Keeping with our simple chunks idea, let's start with only worrying about arrays.  We'll get to the other parts soon.

So we're doing something to every item in an array.  So if that doesn't make you say "we need some kind of a loop" then you're probably not ready for this blog post!

The term iterator was a bit confusing at first.  Dictionary.com doesn't even list it, even as a form of iterate.  thefreedictionary.com redirects it to the listing enumerator and gives us "a person or thing that enumerates".  Ok so we're getting the idea here, it's the thing that repeats.  In our case, what we are trying to repeat is a function. 

Ok, what about our parameters?  Value is referring to the current value of the array we are looping over.   Key is the position in the array.  Collection is the array we are working on.  This is a bit different than .forEach is a method that is attached to the array.  We're making a function of our own so we include the array as an argument.  So when we're done, instead of saying:

ourArray.forEach(someFunction)

we will say

each(ourArray, someFunction)

So for me, this would have have been much easier to grasp if they had said

// Call someFunction(value, key, collection)
or
// Call someFunction(currentArrayItem, index, ourArray)

But maybe I just need to work on my vocabulary!  So let's get some code down finally.  So we plug that function call into our starter code.

const each = function(collection, iterator) {
 someFunction(currentArrayItem, index, ourArray)
};

Great!  We've got a function that calls a function.  But it still doesn't do anything.  We are supposed to call this function for each item in our collection, in our case, an array.  So here comes the for loop with our function inside the block.

const each = function(collection, iterator) {
  for (let i = 0; i < collection.length; i++) {
    iterator(collection\[i\], i, collection)
  }
};

It doesn't satisfy all the requirements yet, but this basically works already.  Check it out here: [https://repl.it/NrWI/1](https://repl.it/NrWI/1)

We need this to work on objects too so let's make a version that works on objects.  Remember that arrays are actually objects, so this shouldn't be too much different.  We can use a "for in" loop which goes something like this:

const each = function(collection, iterator) { 
  for (let key in collection) { 
    iterator(collection\[key\], key, collection) 
  }
};

Pretty similar and here is the working example: [https://repl.it/NrYS/1](https://repl.it/NrYS/1)

All that's left if to test the input to decide if it an array or object.  We could use the typeof operator, but arrays are objects too in JS so that won't work.  Fortunately we can use Array.isArray().  For example:

Array.isArray(\[1, 2, 3\]); // returns true
Array.isArray({one:1, two:2}); // returns false

So we just us an if statement to decide which one to use and we're done.

const each = function(collection, iterator) {
 if (Array.isArray(collection)) {
   for (let i = 0; i < collection.length; i++) {
     iterator(collection\[i\], i, collection);
   }
 } else {
   for (let key in collection) {
     iterator(collection\[key\], key, collection);
   }
 }
};
// call the function with:
// each(collection, iterator);

What about the access to index and collection part?  That will depend on your iterator function.  If you only have one argument, it will only work with the current array or object item.  If you use two arguments, it will work with the current item and the index, and finally, if you use three arguments the third will use the original array (or object).  You can check it out here: [https://repl.it/Nv1q/2](https://repl.it/Nv1q/2)

Well, I hope this explanation can be of some help for anyone struggling to understand what is going on under the hood of forEach.  Please feel free to reach out to me if you have any questions, comments, or corrections.

This was my first attempt at a technical blog post, so be nice!  :)
