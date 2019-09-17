---
title: "Leetcode | Solution of Reverse Integer in JavaScript"
description: "In this post, we will solve two sum problem from leetcode using a couple of methods, compare their time and space complexities. Let's begin."
author: "Rishabh Jain"
keywords: ["leetcode","js","javascript","solution of two sum","rishabh","jain","rishabh jain","rishabh1403","blog","competitive","coding","programming","tech","technology", interview", "interview questions"]
tags: ["leetcode","coding","javascript"]
categories: ["leetcode","coding","javascript"]
date: 2019-09-17T23:16:18.404Z
path: "leetcode-solution-of-reverse-integer-in-javascript"
image: "./reverse-integer.png"
draft: false
---

In this post, we will solve palindrome number problem from leetcode and compute it's time & space complexity. Let's begin.
<!--more-->

# Problem Statement
The question can be found at [leetcode reverse integer problem](https://leetcode.com/problems/palindrome-number/).

The problem states that we need to determine if a given integer is palindrome.

# Constraints and challenges

* We need to take sign of number into account while solving the problem. -2 is not a palindrome as 2 is not equal to -2.

# Solutions
 We will discuss three solutions in this article and compare their time & space complexities.

* String based reversal
* Number based reversal
* Two pointer method

# String based reversal

In this method, we will convert the number to a string, reverse it. We will also use some inbuilt methods in JavaScript for string manipulation as well as for some mathematical operation.

The idea is very simple

- Take absolute value of number
- convert to string
- create a character array
- reverse it
- join it back to a string
- parse the string to a number ( not required in JavaScript )


Let's see a simple implementation of the above logic.

```js

var isPalindrome = function(x) {
  return x == x.toString().split('').reverse().join('');
};

```

Nothing fancy going on here, Let's look at the solution.

First line has most of the logic here. We wrap everything inside a *parseInt* function, ( to convert string to integer ), now, steps are as follows
- we take the absolute value of the number
- convert the number to a string
- split the string, and convert it to an array
- reverse the array
- join the elements of array

this gives us the reversed number in string format, and then parseInt converts it to a number.

Next, we check if the reversed integer is greater than the given constraint, if yes, we retrun 0 ( constaints in question )

In the last line, we check the sign of initial number X and mulitply it with reversed number to get the integer with same sign.

This is all we need to solve the problem, once we submit it, these are the stats.
```yaml

Status: Accepted
Runtime: 212ms
Memory: 46MB

```

## Time and space complexity

### Time complexity

We use a bunch of methods, but they are chained as opposed to nested, so the runtime will be dependent on number of digits in the input. We can say **O(len X)**

### Space complexity

We have a number as input, using another variable to store the reversed number, so space complexity is constatnt, **O(1)**

# Number based reversal

In this method, we will pick the digits of the number one by one and reverse the number without converting it to string

The idea is very simple

- check is the number is less than zero
- if the number is less than zero, take the absolute value of it
- initialize a variable `reversed` with 0
- loop over the number until it's less than or equal to zero (at one point it will be)
- now, muliply the reversed variable with 10 and add the last digit of the number to it
- remove the last digit of x
- when the loop ends, we will have our reversed number
- if the reversed number is more than 2<sup>31</sup>, return 0
- else, return the reversed integer with it's actual sign


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

So as discussed above, first we determine if the number is negative, and take the absolute of the number.

Iteratively take last digit of the number and add it to the reversed number. For example, if we have 1 and we want to append 3 to it, so this it becomes 13, we will multiply 1 with 10 and add 3 to it. This hold true for any number, if we need to append anything to the end of the number, we multiply by 10 and add the number which had to be appended. 

Dividing by 10 and taking integer counterpart, just removes the last digit of the number. ( Try it your self :smile: )

Next the logic is pretty straight forward, if the reversed number is greater than 2<sup>31</sup> retrun 0 else return the reversed number with the sign.

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

In this method, we will convert the number to a string, reverse it. We will also use some inbuilt methods in JavaScript for string manipulation as well as for some mathematical operation.

The idea is very simple

- Take absolute value of number
- convert to string
- create a character array
- reverse it
- join it back to a string
- parse the string to a number ( not required in JavaScript )


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

Nothing fancy going on here, Let's look at the solution.

First line has most of the logic here. We wrap everything inside a *parseInt* function, ( to convert string to integer ), now, steps are as follows
- we take the absolute value of the number
- convert the number to a string
- split the string, and convert it to an array
- reverse the array
- join the elements of array

this gives us the reversed number in string format, and then parseInt converts it to a number.

Next, we check if the reversed integer is greater than the given constraint, if yes, we retrun 0 ( constaints in question )

In the last line, we check the sign of initial number X and mulitply it with reversed number to get the integer with same sign.

This is all we need to solve the problem, once we submit it, these are the stats.
```yaml

Status: Accepted
Runtime: 188ms
Memory: 45.8MB

```

## Time and space complexity

### Time complexity

We use a bunch of methods, but they are chained as opposed to nested, so the runtime will be dependent on number of digits in the input. We can say **O(len X)**

### Space complexity

We have a number as input, using another variable to store the reversed number, so space complexity is constatnt, **O(1)**


# Summary

So, we solved the reverse integer problem using 2 methods, although the complexity is same, it's goot to know both approaches. In an interview you may be asked to not use Math/ String/ Array methods, then you can go for integer based reversal method.

I hope you enjoyed solving this question. This is it for this one, complete source code for this post can be found on my [Github Repo](https://github.com/rishabh1403/leetcode-javascript-solutions). Will see you in the next one.

There you go guys, you made it to end of the post.  Subscribe to my [youtube channel](https://www.youtube.com/channel/UC4syrEYE9_fzeVBajZIyHlA) for regular updates. Follow me on [twitter](https://www.twitter.com/rishabhjain1403) , drop me a mail or leave a comment here if you still have any doubts and I will try my best to help you out. Thanks

Stay tuned and see you around :)
