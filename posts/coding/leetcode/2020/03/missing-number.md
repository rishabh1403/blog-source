---
title: "Leetcode | Solution of Missing Number in JavaScript"
description: "In this post, we will solve problem missing number from leetcode and compute the time and space complexities. Let's begin."
author: "Rishabh Jain"
keywords: ["leetcode","js","javascript","Solution of missing number","rishabh","jain","rishabh jain","rishabh1403","blog","competitive","coding","programming","tech","technology", interview", "interview questions"]
tags: ["leetcode","coding","javascript"]
categories: ["leetcode","coding","javascript"]
date: 2020-03-25T06:10:25.976Z
path: "posts/coding/leetcode/2020/03/leetcode-missing-number"
image: "./missing.png"
draft: false
---

In this post, we will solve the problem missing number from leetcode and compute the time and space complexities. Let's begin.
<!--more-->

# Problem Statement
The question can be found at [leetcode missing number problem](https://leetcode.com/problems/missing-number/).

The problem states that we need to determine a missing number from a series
`0,1,2,3,4,...n` of length `n`.


# Solution

Before discussing a solution let's agree on the fact that a series `0,1,2,3,...n`
has length `n+1` *(numbers from 1 to n and a zero)*, so if we are given a series of
length `n`, a number from the series is missing for sure.

Agreed? Good...let's proceed.

The approach is as follows

- First, we'll calculate the sum of all numbers in a series of length `n+1`
- Next, we'll subtract all the numbers in the given series from the calculated sum
- The remaining number after we subtract all the number from the input is the
  missing number

We have discussed the approach, **I urge you to go ahead on leetcode and give it another try**. :smile:

<hr />
<br />
If you are here, it means something went wrong in implementation or you are just too lazy :smile: . In any case, let's see a simple implementation of the above logic.

```js


var missingNumber = function (nums) {
  const length = nums.length;
  let sum = ((length + 1) * length) / 2;

  for (let i = 0; i < length; i++) {
    sum = sum - nums[i];
  }

  return sum;
};

```

The code is here is pretty simple, the only thing to note is, *on line 3*, we
calculated sum using a famous formula instead of looping through all numbers. It
saves us some time in terms of computation. 

After submission, here's the result

```yaml

Status: Accepted
Runtime: 52ms
Memory: 36MB

```

## Time and space complexity

### Time complexity

We are looping over the num array once, so the time complexity is **O(n)**.

### Space complexity

We are using extra space only to keep for some variables, thus, space
complexity would be **O(1)**.

# Summary

So, we solved the missing number problem by using a
simple mathematical formula and a for loop. Finally, calculated the time and space complexities.

I hope you enjoyed solving this question. This is it for this one, complete source code for this post can be found on my [Github Repo](https://github.com/rishabh1403/leetcode-javascript-solutions). Will see you in the next one.

There you go guys, you made it to end of the post.  Subscribe to my [youtube channel](https://www.youtube.com/rishabh1403) for regular updates. Follow me on [twitter](https://www.twitter.com/rishabhjain1403), drop me a mail or leave a comment here if you still have any doubts and I will try my best to help you out. Thanks

Stay tuned and see you around :)
`youtube: I6AUMvi13fc`