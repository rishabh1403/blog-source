---
title: "Leetcode | Solution of Two Sum in JavaScript"
description: "In this post, we will solve two sum problem from leetcode using a couple of methods, compare their time and space complexities. Let's begin."
author: "Rishabh Jain"
keywords: ["leetcode","js","javascript","solution of two sum","rishabh","jain","rishabh jain","rishabh1403","blog","competitive","coding","programming","tech","technology", interview", "interview questions"]
tags: ["leetcode","coding","javascript"]
categories: ["leetcode","coding","javascript"]
date: 2019-08-01T22:19:33.921Z
path: "leetcode-solution-of-two-sum-in-javascript"
image: "./two-sum.png"
draft: false
---

In this post, we will solve two sum problem from leetcode using a couple of methods, compare their time and space complexities. Let's begin.
<!--more-->

# Problem Statement
The question can be found at [leetcode two sum problem](https://leetcode.com/problems/two-sum/).

The problem states that we are given an array of integers and a target number, our task is to return the indices of the two numbers
which add up to the target.

# Constraints and challenges

* Each input set will have **exactly one solution**
* We cannot use the **same element twice**

# Solutions
 We will discuss three solutions in this article and compare their time & space complexities. 
 We will also see if any of these methods have any constraints under which the solution fails.

* Two nested loops
* One loop with a hashmap
* Two pointer method

# Two nested loops

As the name suggests we are going to use two loops (*nested*) to solve the problem.

The idea is very simple, we will pick one element (let's say **key**) from the array, and see if we can find another number in the array where

- Sum of both numbers is equal to the target (so we are looking for a number which is equal to`js$ target-key`)

Let's see a simple implementation of the above logic.

```js

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if(i !== j){
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }
}

```

Nothing fancy going on here, Let's look at the solution.

We are iterating over the array and picking one number (the `js$ i` loop or *the outer loop*). We are then
iterating over the array once more choosing another number. Now that we have our numbers, we check 
if their sum is equal to the *target*. 

The only catch, **the if statement** `js$ if(i !== j)`. If you remember from the constraints, 
we cannot use the same number twice, so it's just a safety check to see if both
the numbers are not the same. 

This is all we need to solve the problem, once we submit it, these are the stats.
```yaml

Status: Accepted
Runtime: 172ms
Memory: 34.8MB

```

Can we do something better but still using the two loops? When we pick a number, let's say ***i = 0***, and don't find a match for that number, we need not pick that again in **inner loop**. Why? 

Let's take an example, if the number is **2** and the target is **6**, the number we are looking for is **4**. If we don't find it, that means **2** can never be a part of the result, we don't have a **4**. So, no point looping the inner loop from **0** every time, we can start from `js$ i+1` very safely. We can also remove the check where `js$ i!===j`, because now `j` will always be greater than `i`. 

Let's see how this refactoring looks.

```js

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

```

Once we run this, these are the stats.

```yaml

Status: Accepted
Runtime: 108ms
Memory: 34.8MB

```

If you notice, we see a decrease in runtime from **172ms to 108ms**, because, when the input size is large the inner loop is doing one less iteration each time the outer loop runs for next index. Small optimization but still something. Also got rid of the **if statement** :muscle:

## Time and space complexity

**Space complexity** 

Well, we have an array and a number as input, only two variables used (**i, j**) to store indices, so space complexity is in the order of N, **O(n)**, remember we are talking about space complexity, not Auxiliary Space, auxiliary Space, in this case, will of order of 1.

**Time Complexity**

First solution, in the worst case both loop will run n times, and since it's nested, it will run n*n times, so **O(n^2)**

Second solution, we have optimized a bit, but still, the inner solution runs n-1 times in the first iteration
if the result is not found. Outer is loop is running n times, so worst case it still would be the order of n^2, **O(n^2)**. It will indeed be a bit faster but the asymptotic complexity is still n^2. Sucks!!! :disappointed:

Well nothing to worry, we are going to optimize it next. Let's look into that.

# One loop with a hashmap

Hashmap is a great way to optimize some of the algorithms at the cost of some space. 

Let's see a solution where we use hashmap to solve the problem.

```js

var twoSum = function (nums, target) {
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in obj) {
      return [obj[target - nums[i]], i]
    } else {
      obj[nums[i]] = i;
    }
  }
};

```

Before you all start shouting at me about the usage of an object vs map in javascript, yes, you can 
use both, just make sure leetcode supports that, considering it's newer( if you are reading in 2025, well it was new in 2019, I hope :joy: ) syntax.

Well, what do we have here, looping over the array, picking a number. Take the difference of the number and target, if that difference is present in the object, we found a match, else, add the number and it's index in the map, for future use. Simple right? 

Stats?

```yaml

Status: Accepted
Runtime: 60ms
Memory: 34.7MB

```

Wow!!! **60ms from 108ms**. That's almost **40% optimization**. Before we discuss complexities let's discuss some gotchas and conditions under which it won't work.

Consider an array `js$ arr = [5,2,3,3,6]`, now if the target is **9** we have two solutions ( because of duplicate 3), so which index should we return? Thankfully if you remember the constraints from the question, there will be exactly one solution. So our solution holds!!!. What if we wanted 6? it would still work, when the pointer is at first occurrence of 3, it won't find any 3 in the map so it will save the index of 3.

On the next occurrence of 3, it will have an entry in the map, hence the result. Something to keep in mind, constraints make life **easy and hard** ( next example :wink: )

## Time and space complexity

**Space complexity** 

Well we have an array as input and a number, and we are also using an object of length same as the array in the worst case, so space complexity is in the order of (N + N), **O(n)**.

**Time Complexity**

We are loping over the array only once, finding an element in a map is constant time, so time complexity, **O(n)**.

The last one, bit more tricky, but we'll get through it :smile:

# Two pointer method

Two pointer ( finger ) method is still another very famous method of solving problems where you take two elements on opposite ends of the array and move inwards, in turn covering all elements.

Let's take an example.

In the following array

```js

let arr = [1,2,3,4,5,6,7,8]

```

Notice the sorted array.

If we were given a target and had to find the indices of numbers, instead of iterating on one end, we can have two pointers, one at index 0 other at the end. 

Take the sum, if the sum is more than the target, we need to decrease the sum. Well if we move the left pointer to the next right position, it will take us to a number larger than the earlier one, because of  the sorted array. So we move our right pointer to next left position, thus decreasing the sum. 

Similarly, if the sum is less than the target, we need to increase the sum. Well if we move the right pointer to the next left position, it will take us to a number smaller than the earlier one. So we move our left pointer to next right position, thus increasing the sum.

If the sum is equal to the target, we find the sum. All good. If lower pointer (left one) becomes equal to right one, we stop because we have already covered all elements and no solution found. 

Advantage of this solution, Still **O(n)** time complexity but no hashmap, thus **saving us space**.

Unfortunately, in our case we don't have a sorted array, so to use this approach we need to sort our array first. Let's look at a snippet of code.

```js

var twoSum = function (nums, target) {
  const clone = [...nums];
  nums.sort((a, b) => a - b);

  let low = 0, high = nums.length - 1;

  while (low < high) {
    if (nums[low] + nums[high] < target) {
      low++;
    } else if (nums[low] + nums[high] > target) {
      high--;
    } else {
      return [clone.indexOf(nums[low]), clone.indexOf(nums[high])];
    }
  }
}

```

Don't copy and run the solution just yet. Why? because it won't work. :joy: Edge cases!!!

Let's first understand the code, and why it won't work.

First, we are cloning the array to another array, because when we sort it, we'll lose original indexing, and we need to return correct indices. In the sort function passing a comparator, to make sure it gets sorted in ascending order.

Next, fix the pointers at the lower and higher-end. The `js$ if and else-if` should be easy to understand. It is the same logic that we discussed in the example above. In the return section, we find the index of the numbers and return it. All good? Should work? 

Well look at this example

```js

let arr = [3,2,2,5]
target = 4

```

The sorted array is `js$ [2,2,3,5]`, when low and high are at indices `js$ [0,1]`, we find the index of the numbers and since the **indexOf method** returns the first index of the number, the output will be `js$ [0,0]` instead of `js$ [0,1]`. Let's fix this.

```js

var twoSum = function (nums, target) {
  const clone = [...nums];
  nums.sort((a, b) => a - b);
  let low = 0, high = nums.length - 1;
  while (low < high) {
    if (nums[low] + nums[high] < target) {
      low++;
    } else if (nums[low] + nums[high] > target) {
      high--;
    } else {
      if (nums[low] === nums[high]) {
        return [clone.indexOf(nums[low]), clone.indexOf(nums[high], clone.indexOf(nums[low]) + 1)];
      }
      return [clone.indexOf(nums[low]), clone.indexOf(nums[high])];
    }
  }
}

```

You can run this and check, it will pass, but hold on and understand what just happened :joy: 
The only thing that has changed is last `js$ else` part. If the numbers are equal only then the problem will occur. So if that's the case, we find the index of the number, and then for the next number start our search from next index in the cloned array, `js$ clone.indexOf(nums[low]) + 1`. 

Refer to this [mdn docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) for more info & examples. 

Stats

```yaml

Status: Accepted
Runtime: 88ms
Memory: 38.7MB

```

So if you notice, the runtime is between the hashmap method and the nested loop method. Better than nested loops for sure. If the array would have been sorted it would have been the best solution, but good to know all your options,isn't it? Who knows, someday you'll find the input sorted :wink: 

## Time and space complexity

**Space complexity** 

Well we have an array as input and a number, and we are also using an array (clone) of length same as the array, so space complexity is in the order of (N + N), **O(n)**.

**Time Complexity**

Depending on sorting algorithm it is either **O(n^2) or O(nlog n)**. Looks like in this case it's **O(nlog n)**. We are loping over the array only once, we are also using the `js$indexOf` method, which has a complexity if O(n). However, it is only used in one case, where we find a match, not every time, so the time complexity becomes the order of NlogN + N + CN, so **O(nlogn)**. 

# Summary

I guess it would have made more sense to do the two-pointer method one before hashmap, I mean **n^2 > nlogn > n**, but wanted to make sure to end with two pointer method, hopefully, will stick with you longer :smile: . Here you have it, a comprehensive discussion on two sum problem.


I hope you enjoyed solving this question. This is it for this one, complete source code for this post can be found on my [Github Repo](https://github.com/rishabh1403/leetcode-javascript-solutions). Will see you in the next one.

There you go guys, you made it to end of the post.  Subscribe to my [youtube channel](https://www.youtube.com/channel/UC4syrEYE9_fzeVBajZIyHlA) for regular updates. Follow me on [twitter](https://www.twitter.com/rishabhjain1403) , drop me a mail or leave a comment here if you still have any doubts and I will try my best to help you out. Thanks

Stay tuned and see you around :)
