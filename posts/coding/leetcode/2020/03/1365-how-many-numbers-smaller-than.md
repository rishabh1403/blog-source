---
title: "Leetcode | Solution of How Many Numbers Are Smaller Than the Current Number in JavaScript"
description: "In this post, we will solve problem how many numbers are smaller
than the current number from leetcode and compute it's time and space complexities. Let's begin."
author: "Rishabh Jain"
keywords: ["leetcode","js","javascript","Solution of to lower case","rishabh","jain","rishabh jain","rishabh1403","blog","competitive","coding","programming","tech","technology", interview", "interview questions"]
tags: ["leetcode","coding","javascript"]
categories: ["leetcode","coding","javascript"]
date: 2020-03-24T07:42:44.675Z
path: "posts/coding/leetcode/2020/03/leetcode-jewels-and-stones"
image: "./jewels.png"
draft: true
---

In this post, we will solve problem how many numbers are smaller
than the current number from leetcode and compute it's time and space complexities. Let's begin.
<!--more-->

# Problem Statement
The question can be found at [leetcode How Many Numbers Are Smaller Than the Current Number problem](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/).

The problem states that we are given an array of numbers. We need to count how
many numbers are smaller than the number at any given number in the array

Example - 

```js
Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
```

First element is 8, and elements smaller than 8 are 1,2,2,3 i.e. 4 elements are
smaller than 8. Next number is 1, numbers smaller than 1 are none, so 0 is the
output and so on.


# Solution

Let's step back and think about the solution for a minute. If the array was
sorted, the index of the element would be the answer in case there are no
duplicates and first index of the element in case there were duplicates. 

In the same example taken above

```
Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]

Sorted array = [1,2,2,3,8]
```

The index of 1 is 0, index of 8 is 4 and so on. So all we need to do is sort the
array and find first index of all the elements. 

One thing to note is, we also need to preserve the initial index of the elements
in the array, becuase the output format has be in the same order. So, we need to
store the sorted array somewhere else.

We have discussed the approach, **I urge you to go ahead on leetcode and give it another try**. :smile:

<hr />
<br />
If you are here, it means something went wrong in implementation or you are just too lazy :smile: . In any case, let's see a simple implementation of the above logic.

```js

var smallerNumbersThanCurrent = function (nums) {
  const sorted = [...nums].sort((a, b) => a - b);

  return nums.map(num => sorted.indexOf(num));
};

```

Let's look at the solution. We have three functons here

On line 2, we use spread operator to create a new array and sort it in ascending
order and place it in variable sorted. We need to use spread here, because sort
method changes the array in place and if we do it on nums, we will loose our
initial array.

Once we have sorted array and initial array as sorted and nums, we loop over or
map over nums array and get the first index of the element in the sorted array
which we wanted all along. We return the array we generated from amap and that
is our answer.

On submission, here's teh stats


```yaml

Status: Accepted
Runtime: 76ms
Memory: 37MB

```

## Time and space complexity

### Time complexity

We are sorting the array once, so the worst time complexity becomes **O(n<sup>2</sup>)**.

### Space complexity

We are using extra space to store our sorted array, thus, space
complexity would be **O(n)**.

# Summary

So, we solved the how many numbers are smaller
than the current number using a temporary sorted array and some array methods and finally, calculated the time and space complexities.

I hope you enjoyed solving this question. This is it for this one, complete source code for this post can be found on my [Github Repo](https://github.com/rishabh1403/leetcode-javascript-solutions). Will see you in the next one.

There you go guys, you made it to end of the post.  Subscribe to my [youtube channel](https://www.youtube.com/rishabh1403) for regular updates. Follow me on [twitter](https://www.twitter.com/rishabhjain1403), drop me a mail or leave a comment here if you still have any doubts and I will try my best to help you out. Thanks

Stay tuned and see you around :)
`youtube: cNVJZF5UT1w`