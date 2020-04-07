---
title: "Leetcode | Solution of Majority Element in JavaScript"
description: "In this post, we will solve Majority Element from leetcode and compute it's time and space complexities. Let's begin."
author: "Rishabh Jain"
keywords: ["leetcode","js","javascript","Solution of Majority Element","rishabh","jain","rishabh
jain","rishabh1403","blog","competitive","coding","programming","tech","technology",
interview", "interview questions", leetcode]
tags: ["leetcode","coding","javascript"]
categories: ["leetcode","coding","javascript"]
date: 2020-04-05T06:36:43.014Z
path: "posts/coding/leetcode/2020/04/leetcode-majority-element"
image: "./maj.png"
draft: false
---

In this post, we will solve Majority Element from leetcode and compute it's time and space complexities. Let's begin.
<!--more-->

# Problem Statement
The question can be found at [leetcode Majority Element problem](https://leetcode.com/problems/majority-element/).

The problem states that we are given an array of numbers and we need to return the coun tof numbers which have even number of digits.

# Solution

The approach for this problem is very straight forward. We loop over the array and for each number, we count the number of digits in the number and check if it is even. 

To get all the digits in the number we can take modulus of the number by 10 and that would give us the last digit. Next, we divide the number by 10 and it gives the new number without the last digit and we repeat the process until number is 0.

We have discussed the approach, **I urge you to go ahead on leetcode and give it another try**. :smile:

<hr />
<br />
If you are here, it means something went wrong in implementation or you are just too lazy :smile:. In any case, let's see a simple implementation of the above logic.

```js
var findNumbers = function (nums) {
  let count = 0;
  for (let num of nums) {
    let digit = 0;

    while (num > 0) {
      digit++;
      num = parseInt(num / 10);
    }

    if (digit % 2 === 0) count++;
  }

  return count;
};

```

Let's look at the solution. First, we declare a variable count and assign it the value 0 to store the result i.e. the count of numbers with even digits. 
Next, we loop over the nums array and process each number. In the while loop we count the number of digits in each number. Next, we check if the number of digits is even and increase the count. At last, we return the count.

Here are the stats on submission

```yaml

Status: Accepted
Runtime: 68ms
Memory: 36.5MB

```

## Time and space complexity

### Time complexity

We are looping over the nums array once and have a nexted while loop inside the outer loop. On first loop the complexity looks quadratic. If we look closely, each number is the array is in the rang t to 100000 i.e. the while loop will run maximum 6 times for the largest num is array. In worst case the complexity would be **O(6*n)**, here 6 is a constant, so time complexity would be **O(n)**.

### Space complexity

We are using extra space to store a couple of variables. So space
complexity would be constant, **O(1)**.

# Summary

So, we solved the Majority Element problem by using Boyer-Moore Majority Voting Algorithm and calculated the time and space complexities.

I hope you enjoyed solving this question. This is it for this one, complete source code for this post can be found on my [Github Repo](https://github.com/rishabh1403/leetcode-javascript-solutions). Will see you in the next one.

There you go guys, you made it to end of the post.  Subscribe to my [youtube channel](https://www.youtube.com/rishabh1403) for regular updates. Follow me on [twitter](https://www.twitter.com/rishabhjain1403), drop me a mail or leave a comment here if you still have any doubts and I will try my best to help you out. Thanks

Stay tuned and see you around :)
`youtube: p0vvs4Gq8qY`