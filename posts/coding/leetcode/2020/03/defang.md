---
title: "Leetcode | Solution of Defanging an IP Address"
description: "In this post, we will solve defanging an IP address from leetcode
using two methods. Let's begin."
author: "Rishabh Jain"
keywords: ["leetcode","js","javascript","Solution of Defanging an IP Address","rishabh","jain","rishabh jain","rishabh1403","blog","competitive","coding","programming","tech","technology", interview", "interview questions"]
tags: ["leetcode","coding","javascript"]
categories: ["leetcode","coding","javascript"]
date: 2020-03-21T07:46:33.144Z
path: "posts/coding/leetcode/2020/03/leetcode-defang-ip-address"
image: "./defang.png"
draft: false
---

In this post, we will solve defanging an IP address from leetcode using two methods. Let's begin.
<!--more-->

# Problem Statement
The question can be found at [leetcode defanging an IP address problem](https://leetcode.com/problems/defanging-an-ip-address/).

The problem states that we need to replace all the occurrences of `.` in an IP
address by `[.]`.

# Solutions

We'll solve this using two approaches

- Array Methods
- Regex

# Array Methods

The problem is very simple. In this approach, we'll split the IP string by `.`.
It will convert the string in an array, which we'll join again by `[.]` and that
would give us our desired output.

Let's see the code for this approach.


```js


var defangIPaddr = function(address) {
  return address.split(".").join("[.]");
};

```

Next, we'll solve the problem using regex.

# Regex

If we had a `replaceAll` method in JavaScript, we could have used that to solve
the problem. However, we only get a `replace` method which replaces the first
occurrence of the provided argument.

Thus, we'll use regex along with `replace` method, to replace all the occurrences
of the `.` in the string.

Let's see the code for this approach.


```js


var defangIPaddr = function(address) {
  return address.replace(/\./g,"[.]");
};

```

Here, we are using the replace method and are providing a global regex to
search and replace in the argument.

`/.../` represents a regex expression, and `g` at the end means a global search.
`\.` means we need to search for a `.`, but it is escaped because regex has a
special meaning for `.`. 

The given regex expression will search for all the occurrences of `.` and replace
it with `[.]`.

# Summary

So, we solved the defanging an IP address problem by using array methods and
regex expression.

I hope you enjoyed solving this question. This is it for this one, complete source code for this post can be found on my [Github Repo](https://github.com/rishabh1403/leetcode-javascript-solutions). Will see you in the next one.

There you go guys, you made it to end of the post.  Subscribe to my [youtube channel](https://www.youtube.com/rishabh1403) for regular updates. Follow me on [twitter](https://www.twitter.com/rishabhjain1403), drop me a mail or leave a comment here if you still have any doubts and I will try my best to help you out. Thanks

Stay tuned and see you around :)
`youtube: s_CepLCQHNY`