---
title: "Leetcode | Solution of Two Sum in JavaScript"
description: "In this post we will solve two sum problem from leetcode using couple of methods, compare their time and space complexities. Let's begin."
author: "Rishabh Jain"
keywords: ["leetcode","js","javascript","solution of two sum","rishabh","jain","rishabh jain","rishabh1403","blog","competitive","coding","programming","tech","technology", interview", "interview questions"]
tags: ["leetcode","coding","javascript"]
categories: ["leetcode","coding","javascript"]
date: 2019-07-31T21:39:05.667Z
path: "Leetcode-Solution-of-Two-Sum-in-JavaScript"
image: "./migratory-birds.jpg"
draft: false
---
In this post we will solve two sum problem from leetcode using couple of methods, compare their time and space complexities. Let's begin.
<!--more-->

# Problem Statement
The question can be found at [leetcode two sum problem](https://leetcode.com/problems/two-sum/).

The problem states that we are given an array of integers and a target number, our task is to return the indices of the two numbers
which add upto the target.

# Constraints and challenges

* Assumption in question that each input set will have **exactly one solution**
* We cannot use the **same element twice**
* Nothing else to worry about as of now :smile:

# Solutions
 We will discuss three solutions in this article, compare their time & space complexities. 
 We will also see if any of these methods have any constraints under which the solution fails.

- Two nested loops
- One loop with a hashmap
- Two pointer method


# Two nested loops

As the name suggests we are going to use two loops (nested) to solve the problem.

The idea is very simple, we will pick one element ( lets say **key** ) from the array, and see if we can find another number in array where

- Sum of both is equal to the target ( so we are looking for a number  which is equal to`js$ target-key` )

Let's see a simple implementation of the above logic

```js
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    // highlight-next-line
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
```

Nothing fancy going on here, 
















I hope you enjoyed solving this question. This appproach of using array to store count of something where index becomes the key is very common. It helps in faster lookup for results. This is it for this one, complete source code for this post can be found on my [Github Repo](https://github.com/rishabh1403/hackerrank-golang-solutions). Will see you in the next one.

There you go guys, you made it to end of the post. Please check out the video below if you still have any doubts. Subscribe to my [youtube channel](https://www.youtube.com/channel/UC4syrEYE9_fzeVBajZIyHlA) and my mailing list below for regular updates. Follow me on [twitter](https://www.twitter.com/rishabhjain1403) , drop me a mail or leave a comment here if you still have any doubts and I will try my best to help you out. Thanks

Stay tuned and see you around :)
`youtube: IoX_OBCVIOw`  
