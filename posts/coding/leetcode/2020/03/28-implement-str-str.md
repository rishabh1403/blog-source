---
title: "Leetcode | Solution of implement strStr() in JavaScript"
description: "In this post, we will solve problem implement strStr() from
leetcode and compute it's time and space complexities. Let's begin."
author: "Rishabh Jain"
keywords: ["leetcode","js","javascript","Solution of implement strStr()","rishabh","jain","rishabh jain","rishabh1403","blog","competitive","coding","programming","tech","technology", interview", "interview questions"]
tags: ["leetcode","coding","javascript"]
categories: ["leetcode","coding","javascript"]
date: 2020-03-24T07:42:44.675Z
path: "posts/coding/leetcode/2020/03/leetcode-jewels-and-stones"
image: "./tolowercase.png"
draft: true
---

In this post, we will solve problem implement strStr() from
leetcode and compute it's time and space complexities. Let's begin.
<!--more-->

# Problem Statement
The question can be found at [leetcode implement strStr() problem](https://leetcode.com/problems/implement-strstr/).

The problem states that we are given a haystack(big string) and a needle(small
string). We need to find the first index of the needle in the haystack.

# Constraints and challenges

- Return 0 if the needle is empty
- Return -1 if the needle is not present in haystack
- Playijg with string length in for loop can be tricky

# Solution

One funny solution is to use indexOf method. But we cant use that as that's the
method we need to implement.

The approach is very simple

- we will loop over haystack and for every index check if needle is equal to
  haystack sub string from that index
- we can optimize a bit as we don't need to loop till the end of haystack, only
  till hay stack length minus needle length as beyond that there's not enough
  charcaters in haystack to be equal to needle
- we will use substring method and simple equalirty operations to write the
  logic in loop body

We have discussed the approach, **I urge you to go ahead on leetcode and give it another try**. :smile:

<hr />
<br />
If you are here, it means something went wrong in implementation or you are just too lazy :smile: . In any case, let's see a simple implementation of the above logic.

```js

var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0;

  if (needle === haystack) return 0;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (needle === haystack.substring(i, i + needle.length)) {
      return i;
    }
  }

  return -1;
};

```

Let's look at the solution.

First we handle two edge cases. If the needle is empty return 0. If the needle
is equal to haystack, no point in searching the haystack, so we return 0 i.e.
the index in haystack where needle exists.

Next we loop over the haystack but notice the condition in for loop. We are only
looping till haystack.length - needle.length because as discussed above, that's
the last index where you can have a needle. In the body we are checking of the
equality of needle and haystack sybstring.

At the end, if we could not find any match we return -1;

On submission, here's the stats


```yaml

Status: Accepted
Runtime: 52ms
Memory: 34MB

```

## Time and space complexity

### Time complexity

We are using a simple for loop to loop over the haystack, however we are also
using a substring method inside the loop with also has a linear complexity, so
complexity becomes **O(n*m)**. where n is the length of haystack and m is the
length of nedle

### Space complexity

We are not using extra space, thus, space
complexity would be **O(1)**.

# Summary

So, we solved the implement strStr() using simple loop and substring method and finally, calculated the time and space complexities.

I hope you enjoyed solving this question. This is it for this one, complete source code for this post can be found on my [Github Repo](https://github.com/rishabh1403/leetcode-javascript-solutions). Will see you in the next one.

There you go guys, you made it to end of the post.  Subscribe to my [youtube channel](https://www.youtube.com/rishabh1403) for regular updates. Follow me on [twitter](https://www.twitter.com/rishabhjain1403), drop me a mail or leave a comment here if you still have any doubts and I will try my best to help you out. Thanks

Stay tuned and see you around :)
`youtube: cNVJZF5UT1w`