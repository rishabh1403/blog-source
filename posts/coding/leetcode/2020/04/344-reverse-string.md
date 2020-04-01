---
title: "Leetcode | Solution of Reverse String in JavaScript"
description: "In this post, we will solve Reverse String from leetcode and compute it's time and space complexities. Let's begin."
author: "Rishabh Jain"
keywords: ["leetcode","js","javascript","Solution of reverse string","rishabh","jain","rishabh
jain","rishabh1403","blog","competitive","coding","programming","tech","technology",
interview", "interview questions", leetcode]
tags: ["leetcode","coding","javascript"]
categories: ["leetcode","coding","javascript"]
date: 2020-04-01T05:08:30.428Z
path: "posts/coding/leetcode/2020/04/leetcode-reverse-string"
image: "./reversestring.png"
draft: false
---

In this post, we will solve reverse string from leetcode and compute it's time and space complexities. Let's begin.
<!--more-->

# Problem Statement
The question can be found at [leetcode reverse string problem](https://leetcode.com/problems/reverse-string/).

The problem states that we need to reverse a string which is in a format of a
*character array*

# Constraints and challenges

The following constraints are given in the question
- We have to do it in **O(n)** memory


# Solution

We will discuss a solution using *two pointer* method

We'll take the following approach

- We'll start with two pointers i.e. `left` and `right` which will point to start
  and end of the array respectively
- We will loop over array till left pointer is less than right pointer and swap
  the value at both the pointers iteratively

We have discussed the approach, **I urge you to go ahead on leetcode and give it another try**. :smile:

<hr />
<br />
If you are here, it means something went wrong in implementation or you are just too lazy :smile:. In any case, let's see a simple implementation of the above logic.

```js

var reverseString = function (s) {
  let left = 0, right = s.length - 1;

  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    left++;
    right--;
  }
};

```

The solution is very straight forward. It's just the code counterpart of the
approach above. 


Here are the stats on submission

```yaml

Status: Accepted
Runtime: 100ms
Memory: 46MB

```

## Time and space complexity

### Time complexity

We are looping over the string array once, so time complexity
would be **O(n)**.

### Space complexity

We are not using any extra space. So space
complexity is constant, **O(1)**.

# Summary

So, we solved the reverse string problem by using two pointer method and calculated the time and space complexities.

I hope you enjoyed solving this question. This is it for this one, complete source code for this post can be found on my [Github Repo](https://github.com/rishabh1403/leetcode-javascript-solutions). Will see you in the next one.

There you go guys, you made it to end of the post.  Subscribe to my [youtube channel](https://www.youtube.com/rishabh1403) for regular updates. Follow me on [twitter](https://www.twitter.com/rishabhjain1403), drop me a mail or leave a comment here if you still have any doubts and I will try my best to help you out. Thanks

Stay tuned and see you around :)
`youtube: 8j24rPjGBwU`