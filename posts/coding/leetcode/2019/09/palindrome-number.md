---
title: "Leetcode | Solution of Palindrome Number in JavaScript"
description: "In this post, we will solve palindrome number problem from leetcode using a couple of methods and compare their time and space complexities. Let's begin."
author: "Rishabh Jain"
keywords: ["leetcode","js","javascript","solution of palindrome number","rishabh","jain","rishabh jain","rishabh1403","blog","competitive","coding","programming","tech","technology", interview", "interview questions"]
tags: ["leetcode","coding","javascript"]
categories: ["leetcode","coding","javascript"]
date: 2019-09-17T23:16:18.404Z
path: "leetcode-solution-of-palindrome-number-in-javascript"
image: "./palindrome.png"
draft: false
---

In this post, we will solve palindrome number problem from leetcode and compute it's time & space complexity. Let's begin.
<!--more-->

# Problem Statement
The question can be found at [leetcode palindrome number problem](https://leetcode.com/problems/palindrome-number/).

The problem states that we need to determine if a given integer is palindrome.

# Constraints and challenges

* We need to take sign of number into account while solving the problem. -2 is not a palindrome as 2 is not equal to -2.

# Solutions
 We will discuss three solutions in this article and compare their time & space complexities.

* String based reversal
* Number based reversal
* Two pointer method

# String based reversal

In this method, we will convert the number to a string, reverse it and check if the initial number is equal to the new one. We will use some built in JavaScript methods.

The idea is very simple

- convert to string
- create a character array
- reverse it
- join it back to a string
- check for equality


Let's see a simple implementation of the above logic.

```js

var isPalindrome = function(x) {
  return x == x.toString().split('').reverse().join('');
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

# Number based reversal

In this method, we will pick the digits of the number one by one and reverse the number without converting it to string

The idea is very simple

- check is the number is less than zero
- if the number is less than zero, return false
- initialize a variable temp with X ( because we lose the initial value of X in the logic)
- initialize the reverse variable with 0
- loop over the number until it's less than or equal to zero (at one point it will be)
- now, muliply the reversed variable with 10 and add the last digit of the number to it
- remove the last digit of x
- when the loop ends, we will have our reversed number
- if the reversed number is equal to temp ( initial number ), return true
- else, false


Let's see a simple implementation of the above logic.

```js

var isPalindrome = function(x) {
  const isNegative = x< 0 ? true : false;
    
  if (isNegative){
      return false;
  }
    
  const temp = x;
  let reversed = 0;
    
  while(x>0){
      reversed = (reversed * 10) + (x%10);
      x = parseInt(x/10);
  }
    
  return reversed == temp;
};


```

So as discussed above, first we determine if the number is negative, and return false. 

Next, iteratively take last digit of the number and add it to the reversed number. For example, if we have 1 and we want to append 3 to it, so this it becomes 13, we will multiply 1 with 10 and add 3 to it. This hold true for any number, if we need to append anything to the end of the number, we multiply by 10 and add the number which had to be appended. 

Dividing by 10 and taking integer counterpart, just removes the last digit of the number. ( Try it your self :smile: )

Next the logic is pretty straight forward, check if the reversed number is equal to temp, and return the result.

Here are the stats one we run this code

```yaml

Status: Accepted
Runtime: 192ms
Memory: 45.2MB

```

## Time and Space complexity

Unfortunately we didn't really improve a lot in time complexity. It's **O(len X)** ( notice the loop runs len X times).
Same goes for space, **O(1)**.

# Two pointer method

In this solution, we will take care of some of the simple cases before writing out logic. Once those are taken care of, we will follow the two pointer method to check if the number is a palindrome. 

The idea is, we will take one digit from the start, and another from the last. Check if both are equal, if not, the number is not a palindrome.

Let's see a simple implementation of the above logic.

```js

var isPalindrome = function (x) {

  if (x < 0) {
    return false;
  }

  if (x < 10) {
    return true;
  }

  if (x % 10 === 0 && x !== 0) {
    return false;
  }

  const str = String(x);
  let i = 0, j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
};

```

First we took care of following cases

- if X is negative ( not a palindrome )
- if X is less than ten ( always a palindrome )
- if X has 0 at it's last digit and X is not 0 itself ( not a palindrome ) e.g. 10, 130 whose reverse will be 01, 031 respectively

Next the logic is straight forward

- convert the number to string
- take two pointers, at the start and end of string
- if the digits at the both pointers are different, it's not a palindrome
- we increment starting pointer and decrement the end pointer iteratively
- if the loop exits, then it was a palindrome

This is all we need to solve the problem, once we submit it, these are the stats.
```yaml

Status: Accepted
Runtime: 188ms
Memory: 45.8MB

```

## Time and space complexity

### Time complexity

We see a bit of improvement in run time. We are running logic only for positive numbers greater than 9. Also, in the loop we are taking two steps instead of 1. However, asymptotically the running time complexity is still **O(len x)** :disappointed:

### Space complexity

We have a number as input, using couple of more temporary variables, so space complexity is constatnt, **O(1)**


# Summary

So, we solved the palindrome number problem using 3 methods, although the complexity is same, it's good to know these different approaches. In an interview you may be asked to solve using two pinter method, who knows.

I hope you enjoyed solving this question. This is it for this one, complete source code for this post can be found on my [Github Repo](https://github.com/rishabh1403/leetcode-javascript-solutions). Will see you in the next one.

There you go guys, you made it to end of the post.  Subscribe to my [youtube channel](https://www.youtube.com/channel/UC4syrEYE9_fzeVBajZIyHlA) for regular updates. Follow me on [twitter](https://www.twitter.com/rishabhjain1403) , drop me a mail or leave a comment here if you still have any doubts and I will try my best to help you out. Thanks

Stay tuned and see you around :)
