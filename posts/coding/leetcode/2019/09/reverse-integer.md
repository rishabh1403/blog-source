---
title: "Leetcode | Solution of Reverse Integer in JavaScript"
description: "In this post, we will solve reverse integer problem from leetcode using a couple of methods and compare their time and space complexities. Let's begin."
author: "Rishabh Jain"
keywords: ["leetcode","js","javascript","solution of reverse integer","rishabh","jain","rishabh jain","rishabh1403","blog","competitive","coding","programming","tech","technology", interview", "interview questions"]
tags: ["leetcode","coding","javascript"]
categories: ["leetcode","coding","javascript"]
date: 2019-11-21T15:19:18.404Z
path: "posts/coding/leetcode/2019/11/leetcode-solution-of-reverse-integer-in-javascript"
image: "./reverse-integer.png"
draft: false
---

In this post, we will solve reverse integer problem from leetcode and compute it's time & space complexity. Let's begin.
<!--more-->

# Problem Statement
The question can be found at [leetcode reverse integer problem](https://leetcode.com/problems/reverse-integer/).

The problem states that we are given a **32-bit signed integer**, and we need to reverse its digits.

# Constraints and challenges

* If the absolute value of the number overflows **2<sup>31</sup> after reversing the number**, we need to return **0**.

# Solutions
 We will discuss two solutions in this article and compare their time & space complexities.

* String-based reversal
* Number based reversal

# String-based reversal

In this method, we will convert the number to a string and reverse it. We will also use some inbuilt methods in JavaScript for string manipulation and mathematical operation.

The idea is very simple

- Take the absolute value of the number
- convert to string
- create a character array
- reverse it
- join it back to a string
- parse the string to a number ( *not required in JavaScript* )


Let's see a simple implementation of the above logic.

```js

var reverse = function(x) {
    
  const reversedInt = parseInt(Math.abs(x).toString().split('').reverse().join(''));
  
  if (reversedInt > 2**31) return 0;
  
  return reversedInt * Math.sign(x);
    
};

```

Nothing fancy going on here, Let's look at the solution.

The first line has most of the logic here. We wrap everything inside a **parseInt** function, ( to convert string to integer ), now, steps are as follows
- we take the absolute value of the number
- convert the number to a string
- split the string, and convert it to an array
- reverse the array
- join the elements of the array

this gives us the reversed number in string format, and then parseInt converts it to a number.

Next, we check if the reversed integer is greater than the given constraint, if yes, we return 0 ( constraints in question )

In the last line, we check the sign of initial number X and multiply it with the reversed number to get the integer with the same sign.

This is all we need to solve the problem, once we submit it, these are the stats.
```yaml

Status: Accepted
Runtime: 68ms
Memory: 35.8MB

```

## Time and space complexity

### Time complexity

We use a bunch of methods with **linear complexity**, but they are chained as opposed to nested, so the runtime will be dependent on the number of digits in the input. We can say **O(len X)**

### Space complexity

We have a number as input, using another variable to store the reversed number, so space complexity is constant, **O(1)**

Now, we don't need to explicitly convert the string to a number, JavaScript can automatically do it for us ( for some extra cost, of course ). 

Look at the snippet below

```js

var reverse = function(x) {
    
    const reversedInt = Math.abs(x).toString().split('').reverse().join('');
    
    if (reversedInt > 2**31) return 0;
    
    return reversedInt * Math.sign(x);
    
};

```

Once we run this, these are the stats.

```yaml

Status: Accepted
Runtime: 84ms
Memory: 35.8MB

```

Now, why did it work? Well implicit typecasting. The string is converted to a number when we are comparing it with **2<sup>31</sup>** and multiplying with the sign. [Read More](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

## Time and space complexity

Well, asymptotically it's still the same, however, implicit type casting should add some more time to execution, which we see in the stats.


# Number based reversal

In this method, we will pick the digits of the number one by one and reverse the number without converting it to string

The idea is very simple

- check if the number is less than zero
- if the number is less than zero, take the absolute value of it
- initialize a variable `reversed` with 0
- loop over the number until it's less than or equal to zero (at one point it will be)
- now, multiply the reversed variable with 10 and add the last digit of the number to it
- remove the last digit of X
- when the loop ends, we will have our reversed number
- if the reversed number is more than 2<sup>31</sup>, return 0
- else, return the reversed integer with its actual sign


Let's see a simple implementation of the above logic.

```js

var reverse = function(x) {
    const isNegative = x< 0 ? true : false;
    
    if (isNegative){
        x = x *-1;
    }
    
    let reversed = 0;
    while(x>0){
        reversed = (reversed * 10) + (x % 10);
        
        x = parseInt(x/10);
    }
    
    if(reversed > 2**31){
        return 0;
    }
    
    return isNegative? reversed * -1 : reversed;
};

```

So as discussed above, first we determine if the number is negative, and take the absolute of the number.

Iteratively take the last digit of the number and add it to the reversed number. For example, if we have `1` and we want to append `3` to it so that it becomes `13`, we will multiply *1 with 10 and add 3* to it. This holds true for any number, if we need to append anything to the end of the number, we multiply by 10 and add the number which had to be appended. 

Dividing by 10 and taking integer counterpart, just removes the last digit of the number. ( Try it your self :smile: )

Next, the logic is pretty straight forward if the reversed number is greater than 2<sup>31</sup> return 0 else return the reversed number with the sign.

Here are the stats one we run this code

```yaml

Status: Accepted
Runtime: 72ms
Memory: 35.9MB

```

## Time and Space complexity

Unfortunately, we didn't improve the time complexity. It's **O(len X)** ( notice the loop runs len X times).
Same goes for space, **O(1)**.

# Summary

So, we solved the reverse integer problem using 2 methods, although the complexity is the same, it's good to know both approaches. In an interview you may be asked to not use Math/ String/ Array methods, then you can go for integer based reversal method.

I hope you enjoyed solving this question. This is it for this one, complete source code for this post can be found on my [Github Repo](https://github.com/rishabh1403/leetcode-javascript-solutions). Will see you in the next one.

There you go guys, you made it to end of the post.  Subscribe to my [youtube channel](https://www.youtube.com/channel/UC4syrEYE9_fzeVBajZIyHlA) for regular updates. Follow me on [twitter](https://www.twitter.com/rishabhjain1403), drop me a mail or leave a comment here if you still have any doubts and I will try my best to help you out. Thanks

Stay tuned and see you around :)
`youtube: cIBwTqjh6VQ`