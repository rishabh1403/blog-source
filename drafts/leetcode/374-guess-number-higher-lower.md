---
title: "Leetcode | Solution of Guess Number Higher or Lower in JavaScript"
description: "In this post, we will solve Guess Number Higher or Lower from leetcode and compute it's time and space complexities. Let's begin."
author: "Rishabh Jain"
keywords: ["leetcode","js","javascript","Solution of Guess Number Higher or Lower","rishabh","jain","rishabh
jain","rishabh1403","blog","competitive","coding","programming","tech","technology",
interview", "interview questions", leetcode]
tags: ["leetcode","coding","javascript"]
categories: ["leetcode","coding","javascript"]
date: 2020-04-01T05:08:30.428Z
path: "posts/coding/leetcode/2020/04/leetcode-guess-number-higher-or-lower"
image: "./TODO.png"
draft: false
---

In this post, we will solve Guess Number Higher or Lower from leetcode and compute it's time and space complexities. Let's begin.
<!--more-->

# Problem Statement
The question can be found at [leetcode Guess Number Higher or Lower problem](https://leetcode.com/problems/guess-number-higher-or-lower/).

The problem states that we need to guess the correct number between `1 to n` which the problem has picked based on the following rules

# Constraints and challenges

We are given a guess API which returns 
- `1` if the picked number is higher than our guessed number
- `0` if it is equal to the guessed number
- `-1` if the guessed number is lower than the picked number


# Solution

The problem is nothing but a **binary search**. In the series, `1...n` find a given number.
I wish I had more to explain here, but it is a simple binary search. If you don't recall the algorithm, please read about it and then you won't need to read further :smile:

Here is the solution is you are still reading this.

```js
var guessNumber = function (n) {

  if (guess(n) === 0) return n

  let low = 1, high = n;
  while (n > 0) {
    const pick = (parseInt(high + low) / 2);
    const res = guess(pick);

    if (res === 0) {
      return pick
    }
    if (res === -1) {
      high = pick;
    }
    if (res === 1) {
      low = pick;
    }
  }
};

```

First, take care of an edge case. If `n` is the picked number we return it first thing in the program. Next, we apply a binary search to find the number.


Here are the stats on submission

```yaml

Status: Accepted
Runtime: 48ms
Memory: 33.7MB

```

## Time and space complexity

### Time complexity

The time complexity here is logarithmic because the input size decreases by half every time. **O(log n)**.

### Space complexity

We are not using any extra space except for a couple of variables. So space
complexity is constant, **O(1)**.

# Summary

So, we solved the Guess Number Higher or Lower problem by using two pointer method and calculated the time and space complexities.

I hope you enjoyed solving this question. This is it for this one, complete source code for this post can be found on my [Github Repo](https://github.com/rishabh1403/leetcode-javascript-solutions). Will see you in the next one.

There you go guys, you made it to end of the post.  Subscribe to my [youtube channel](https://www.youtube.com/rishabh1403) for regular updates. Follow me on [twitter](https://www.twitter.com/rishabhjain1403), drop me a mail or leave a comment here if you still have any doubts and I will try my best to help you out. Thanks

Stay tuned and see you around :)
`youtube: TODO`