---
title: "Leetcode | Solution of Day of Week in JavaScript"
description: "In this post, we will solve day of week from leetcode and compute it's time and space complexities. Let's begin."
author: "Rishabh Jain"
keywords: ["leetcode","js","javascript","Solution of reverse string","rishabh","jain","rishabh
jain","rishabh1403","blog","competitive","coding","programming","tech","technology",
interview", "interview questions", leetcode]
tags: ["leetcode","coding","javascript"]
categories: ["leetcode","coding","javascript"]
date: 2019-04-01T05:08:30.428Z
path: "posts/coding/leetcode/2020/04/leetcode-maj"
image: "./maj.png"
draft: true
---

In this post, we will solve day of week from leetcode and compute it's time and space complexities. Let's begin.
<!--more-->

# Problem Statement
The question can be found at [leetcode day of week problem](https://leetcode.com/problems/day-of-the-week/).

The problem states that we are given an array and we need to find the majority
element in the array. Majority element is the element which is present more than
n/2 times in the array, where n is the length of the array.

# Solution

Since question mentions that majority element does exist in the array, we can
sort the array and the middle element is the majority element, since the number
has to be more than n/2 times, it has to be in the center. A solution would look
something like this

```js
var majorityElement = function (nums) {
  nums.sort((a, b) => a - b);

  const l = nums.length;

  if (l % 2 === 0) {
    return nums[l / 2]
  } else {
    return nums[(l - 1) / 2]
  }
};
```

First we sort the array, and next we find the middle element. If the length is
even , we find the center by dividing the length by 2 else we subtract 1 from
length and then find the center.

This would be **O(n<sup>2</sup>)** in worst case due to sorting, in terms of
time complexity. Can we do better?

# Boyer–Moore majority vote algorithm

We will use [Boyer–Moore majority vote algorithm](https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm) to find the majority element in
linear time complexity. 

The algorithm works when there is a guarantee that the majority element exists.
It is based on a very simple concept that the count of majority will be greater
than the combined count of all the other values in the array. Here's the
algorithm

- First we assume thet element at index 0 is our majority element
- We declare two variables maj and count to keep the index of majority element
  and its count
- We will initialize these variuables with value 0,1 respectively i.e the index
  at which majority element exists is 0 and it's count is 1
- Now we will iterate over the array from index one
- When we encounter an element, if it is same as the number at majority index,
  we increase the count else decrease it
- If at any point the count becomes 0, we change majority index to that current
  index and change count back to 1
- At last, we have our index where majority element exists

If majority index exists, it's count will be more than count of all the numbers
combined. Hence we always get the index at which majority index exists

We have discussed the approach, **I urge you to go ahead on leetcode and give it another try**. :smile:

<hr />
<br />
If you are here, it means something went wrong in implementation or you are just too lazy :smile:. In any case, let's see a simple implementation of the above logic.

```js
var majorityElement = function (nums) {
  let maj = 0, count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[maj]) {
      count++
    } else {
      count--;
    }

    if (count === 0) {
      maj = i;
      count = 1;
    }
  }
  return nums[maj]
};

```

The code here is straight forward implementaion of the algorithm. In case you
still have doubts, please check the video below.

Here are the stats on submission

```yaml

Status: Accepted
Runtime: 64ms
Memory: 37.5MB

```

## Time and space complexity

### Time complexity

We are looping over the array once, so time complexity would be **O(n)**.

### Space complexity

We are using extra space to store a couple of variables. So space
complexity would be constant, **O(1)**.

# Summary

So, we solved the transpose matrix problem by using two pointer method and calculated the time and space complexities.

I hope you enjoyed solving this question. This is it for this one, complete source code for this post can be found on my [Github Repo](https://github.com/rishabh1403/leetcode-javascript-solutions). Will see you in the next one.

There you go guys, you made it to end of the post.  Subscribe to my [youtube channel](https://www.youtube.com/rishabh1403) for regular updates. Follow me on [twitter](https://www.twitter.com/rishabhjain1403), drop me a mail or leave a comment here if you still have any doubts and I will try my best to help you out. Thanks

Stay tuned and see you around :)
`youtube: 8j24rPjGBwU`