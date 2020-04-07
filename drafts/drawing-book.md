---
title: "Hackerrank | Solution of Sock Merchant in Golang"
description: "In this one we will solve question Sock Merchant from hackerrank in golang. Let's dive right into it."
author: "Rishabh Jain"
keywords: ["rishabh","jain","rishabh jain","rishabh1403","blog","competitive","coding","programming","tech","technology","go","golang","hackerrank","hackerrank solutions","solutions in golang","Sock Merchant"]
tags: ["hackerrank","coding","golang"]
categories: ["hackerrank","coding","golang"]
path: "posts/coding/hackerrank/2020/04/hackerrank-solution-of-sock-merchant-in-golang"
image: "./sock.png"
date: 2020-04-06T03:56:23.711Z
draft: false
---
In this one we will solve question Sock Merchant from hackerrank in golang. Let's dive right into it.
<!--more-->

# Problem Statement
The question can be found at this [link](https://www.hackerrank.com/challenges/sock-merchant/problem). 

The problem statement states that we are given a book with n pages. I we need to turn to page p, what is the minimum number of page turns would be required to reach page p given certain contarints

# Constraints and Challenges

The problem lists following constraints
- Pages can be turned from front or back
- Front always starts with Page 1 on the right page
- Back can have printed pages on both sides of one side depending on number of pages

# Solution

The only challenge here is to compute the number of page turns it will take from front and back. After that it's just about finding which is less. There are three cases here.

- Turning pages from front
- Tunrning pages from back when total pages is odd
- Turning pages from back when total pages is even

Let's look at all these individually.

## Turning pages from front

The first page always starts with 1. So if we need to turn to page 1, we need zero turns, for page 2, 1 turn, for page 3, 1 turn, page 4, 2 turns, page 5, 2 turns and so on...If we notice, if we divide page by 2, we get the number of turns.

## Tunrning pages from back when total pages is odd and even

If you form the same series on a peice of paper, you will come to conclusion that for odd pages the turns is equal to (n-p)/2 and for even (n+1-p)/2

Once this is done, it's just about finding which is less


We have discussed the approach, **I urge you to go ahead on hackerrank and give it another try**. :smile:

<hr />
<br />
If you are here, it means something went wrong in implementation or you are just too lazy :smile:. In any case, let's see a simple implementation of the above logic.

```go

package main

import "fmt"

func main() {
	var n, p int
	fmt.Scan(&n, &p)
	front := p / 2

	back := (n - p) / 2

	if n%2 == 0 {
		back = (n + 1 - p) / 2
	}

	if front < back {
		fmt.Println(front)
	} else {
		fmt.Println(back)
	}
}

```

Nothing very fancy in the code. We just converted our discussion into code.

# Summary

So, we solved the *drawing book* problem from hackerrank.

I hope you enjoyed solving this question. This is it for this one, complete source code for this post can be found on my [Github Repo](https://github.com/rishabh1403/hackerrank-golang-solutions). Will see you in the next one.

There you go guys, you made it to end of the post. Please check out the video below if you still have any doubts. Subscribe to my [youtube channel](https://www.youtube.com/rishabh1403) and my mailing list below for regular updates. Follow me on [twitter](https://www.twitter.com/rishabhjain1403), drop me a mail or leave a comment here if you still have any doubts and I will try my best to help you out. Thanks

Stay tuned and see you around :)
`youtube: 9s2ZlFjX-yw`  
