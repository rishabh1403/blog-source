---
title: "Hackerrank | Solution of TODO in Golang"
description: "In this one we will solve question TODO from hackerrank in golang. Let's dive right into it."
author: "Rishabh Jain"
keywords: ["rishabh","jain","rishabh jain","rishabh1403","blog","competitive","coding","programming","tech","technology","go","golang","hackerrank","hackerrank solutions","solutions in golang","TODO"]
tags: ["hackerrank","coding","golang"]
categories: ["hackerrank","coding","golang"]
path: "posts/coding/hackerrank/2020/04/hackerrank-solution-of-TODO-in-golang/"
image: "./TODO.png"
date: 2020-04-07T02:44:34.563Z
draft: false
---
In this one we will solve question TODO from hackerrank in golang. Let's dive right into it.
<!--more-->

# Problem Statement
The question can be found here [Hackerrank TODO problem](TODO). 

The problem states that we are given a string which is repeated infinite number of times. For the first  n characters in this infinite string, we need to find the occurences of character a

# Constraints and Challenges

Looping infinite times is out of question, for this one, we will use simple logic and some basic maths.

# Solution

The approach is as follows
- First get the length of the string, lets call it len
- Now we will find the count of occurences of a in the string
- Next, we will find the number of time the string will repeat completely in the length n
- So, according to basic maths, if string has x occurences of a, and string is repeated y times; the occurences of a are x*y
- Now all that's left is finding the occurence of a in the part of string that is present in length n after cutting off the repetative parts.
- All we need here is division to find the number of repitions and modulus to find the length of string that is in the length n.
- We will loop over the left oversd and find occurences of a
- Finally, we return the sum of x*y and leftovers from the part string



We have discussed the approach, **I urge you to go ahead on hackerrank and give it another try**. :smile:

<hr />
<br />
If you are here, it means something went wrong in implementation or you are just too lazy :smile:. In any case, let's see a simple implementation of the above logic.

```go

package main

import "fmt"

func main() {
	var (
		n int
		s string
	)
	fmt.Scan(&s, &n)
	var l int = len(s)

	times := n / l
	itr := n % l

	count := 0

	for i := 0; i < l; i++ {
		if s[i] == 'a' {
			count++
		}
	}

	count = count * times

	for i := 0; i < itr; i++ {
		if s[i] == 'a' {
			count++
		}
	}
	fmt.Println(count)
}

```

The solution is the simple implementation of the above logic. Nothing fancy here :)

# Summary

So, we solved the TODO problem from hackerrank.

I hope you enjoyed solving this question. This is it for this one, complete source code for this post can be found on my [Github Repo](https://github.com/rishabh1403/hackerrank-golang-solutions). Will see you in the next one.

There you go guys, you made it to end of the post. Please check out the video below if you still have any doubts. Subscribe to my [youtube channel](https://www.youtube.com/rishabh1403) and my mailing list below for regular updates. Follow me on [twitter](https://www.twitter.com/rishabhjain1403), drop me a mail or leave a comment here if you still have any doubts and I will try my best to help you out. Thanks

Stay tuned and see you around :)
`youtube: TODO`  
