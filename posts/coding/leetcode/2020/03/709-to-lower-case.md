---
title: "Leetcode | Solution of To Lower Case in JavaScript"
description: "In this post, we will solve problem to lower case from leetcode. Let's begin."
author: "Rishabh Jain"
keywords: ["leetcode","js","javascript","Solution of to lower case","rishabh","jain","rishabh jain","rishabh1403","blog","competitive","coding","programming","tech","technology", interview", "interview questions"]
tags: ["leetcode","coding","javascript"]
categories: ["leetcode","coding","javascript"]
date: 2020-03-24T07:42:44.675Z
path: "posts/coding/leetcode/2020/03/leetcode-jewels-and-stones"
image: "./tolowercase.png"
draft: true
---

In this post, we will solve problem to lower case from leetcode. Let's begin.
<!--more-->

# Problem Statement
The question can be found at [leetcode to lower case problem](https://leetcode.com/problems/to-lower-case/).

The problem states that we are given a string, and we need to convert it to
lower case. 

# Solution

One funny solution is to use toLowerCase method of string. But that is the
method we need to imlpement so we cannot use library methods.

The approach is as follows

- we will loop through each character in the string
- if the character is in upper case, we'll convert it to lower case else move on
  to next character
- we will need to convert the characters to ascii and back to string in the operation

We have discussed the approach, **I urge you to go ahead on leetcode and give it another try**. :smile:

<hr />
<br />
If you are here, it means something went wrong in implementation or you are just too lazy :smile: . In any case, let's see a simple implementation of the above logic.

```js

const isUpperCase = char => {
  let ascii = char.charCodeAt(0);

  if (ascii >= 65 && ascii <= 90) {
    return true;
  }
  return false
}

const toLower = char => {
  let ascii = char.charCodeAt(0);

  ascii = String.fromCharCode(ascii + 32);

  return ascii
}

var toLowerCase = function (str) {
  return str.split("").map(s => isUpperCase(s) ? toLower(s) : s).join("");
};

```

Let's look at the solution. We have three functons here

### isUpperCase

This function checks is the character in argument is uppercase or not. We first
convert the character into ascii and check if the value is between 65 and 90
i.e. ascii values of 'A' and 'Z'.

### toLower

This function converts the given character into lower case.

### toLowerCase

It is the function provided in leetcode editor by default which we need to
implement. First we convert the string into an string array, then we map (loop
over) the array of sinfle string characters. Inside map we have a ternary
operation which we use to check if the chracter is upper case or not. Then, we
convert the charcater to lowercase or return it as it is respectively. At last
we join all the charcters to form a string.

On submission, here's teh stats


```yaml

Status: Accepted
Runtime: 48ms
Memory: 34MB

```

## Time and space complexity

### Time complexity

We are using map, split, join methods but they are chained as opposed to nested.
So time complexity would be **O(n)**.

### Space complexity

We are not using extra space except for some variable to store ascii values and characters, thus, space
complexity would be **O(1)**.

# Summary

So, we solved the to lower case using some ascii operations and finally, calculated the time and space complexities.

I hope you enjoyed solving this question. This is it for this one, complete source code for this post can be found on my [Github Repo](https://github.com/rishabh1403/leetcode-javascript-solutions). Will see you in the next one.

There you go guys, you made it to end of the post.  Subscribe to my [youtube channel](https://www.youtube.com/rishabh1403) for regular updates. Follow me on [twitter](https://www.twitter.com/rishabhjain1403), drop me a mail or leave a comment here if you still have any doubts and I will try my best to help you out. Thanks

Stay tuned and see you around :)
`youtube: cNVJZF5UT1w`