---
title: "Leetcode | Solution of Valid Parentheses in JavaScript"
description: "In this post, we will solve valid parentheses problem from leetcode and compute the time and space complexities. Let's begin."
author: "Rishabh Jain"
keywords: ["leetcode","js","javascript","solution of valid parentheses problem","rishabh","jain","rishabh jain","rishabh1403","blog","competitive","coding","programming","tech","technology", interview", "interview questions"]
tags: ["leetcode","coding","javascript"]
categories: ["leetcode","coding","javascript"]
date: 2019-09-17T23:16:18.404Z
path: "leetcode-solution-of-valid-parentheses-in-javascript"
image: "./palindrome.png"
draft: false
---

In this post, we will solve valid parentheses problem from leetcode and compute it's time & space complexity. Let's begin.
<!--more-->

# Problem Statement
The question can be found at [leetcode valid parentheses problem](https://leetcode.com/problems/valid-parentheses/).

The problem states that we need to determine if a given string has all it's parentheses balanced.

# Constraints and challenges

A string is valid if
- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.

# Solution

 We will discuss a solution using a stack and a hash map.

In this method, we will follow the following approach

- we will create a map of parentheses with opening parenthese as key and corresponding closing ones as value
- will declare a empty array to use as stack
- will check the string character by character
- if the character is an opening bracket, will push it to stack
- is it's a closing bracket, will check the last entry in stack
- if the last entry is an opening bracket of same type, will delete that last entry from stack
- else, the string is not balanced
- at last when we have checked all the characters, the stack should be empty, why? :thinking:
- to keep the string balanced, each closing bracket will have an opening one, and since when this case occurs, we clear the last entry from stack. Hence the stack should be empty after the iteration to ensure the string is balanced.

We have discussed the approach, I urge you to go ahead on leetcode and give it another try. :smile:

If you are here, it means something went wrong in implementation or you are just too lazy. In any case, let's see a simple implementation of the above logic.

```js


var isValid = function (s) {

  const obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  }

  const stack = [];

  for (const paran of s) {
    if (obj.hasOwnProperty(paran)) {
      stack.push(paran)
    } else {
      const closeParan = stack.pop();
      if (paran !== obj[closeParan]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

```

Notice the `==` as opposed to `===` becuase we want to check if both sides are equal regardless of their type. In this case X is a number while the computed value is a string.

Some of the methods chained are

- toString() to convert the number to string
- split() to convert the string to an array of characters
- reverse() to reverse the array
- join() to join the array back to a string

This will also solve the problem with the sign of the number. When we convert the number to string, the minus sign becomes the part of the string and on reversal goes to end. For example -123 becomes 321-.

This is all we need to solve the problem, once we submit it, these are the stats.
```yaml

Status: Accepted
Runtime: 212ms
Memory: 46MB

```

## Time and space complexity

### Time complexity

We use a bunch of methods, all with linear time compexity, but they are chained as opposed to nested, so the runtime will be dependent on number of digits in the input. We can say **O(len X)**

### Space complexity

We have a number as input, not using any other temporary variable to store the result, so space complexity is constatnt, **O(1)**


# Summary

So, we solved the palindrome number problem using 3 methods, although the complexity is same, it's good to know these different approaches. In an interview you may be asked to solve using two pinter method, who knows.

I hope you enjoyed solving this question. This is it for this one, complete source code for this post can be found on my [Github Repo](https://github.com/rishabh1403/leetcode-javascript-solutions). Will see you in the next one.

There you go guys, you made it to end of the post.  Subscribe to my [youtube channel](https://www.youtube.com/channel/UC4syrEYE9_fzeVBajZIyHlA) for regular updates. Follow me on [twitter](https://www.twitter.com/rishabhjain1403) , drop me a mail or leave a comment here if you still have any doubts and I will try my best to help you out. Thanks

Stay tuned and see you around :)
