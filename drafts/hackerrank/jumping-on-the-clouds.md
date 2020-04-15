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

The problem states that we are given a path of clouds that are either safe or dangerous. The path starts from and ends at a safe cloud. We can take either one jump to the next cloud or two jumps to next to next cloud. Given that the path is always valid, we need to find the minimum number of jumps to reach the end of the path

# Constraints and Challenges

Managing indices of the path can be a little tricky here

# Solution

Before solving the problem, let's agree that there won't two consecutive dangerous clouds. Because it that were the case you can never take a jump without being zapped which is contradictory to what questions says i.e. a path always exists. 

So the approach is simple, we will start from the first position and check if two jumps are possible. It it is possible, we wil take two jumps or one. We will also increase a counter iteratively to keep jumps count. 

Be extra careful on the second last index. A check for two jumps there might throw error as it would be out of bound of the initial path.


We have discussed the approach, **I urge you to go ahead on hackerrank and give it another try**. :smile:

<hr />
<br />
If you are here, it means something went wrong in implementation or you are just too lazy :smile:. In any case, let's see a simple implementation of the above logic.

```go
package main

import "fmt"

func main() {
	var n int
	fmt.Scan(&n)

	clouds := make([]int, n)
	for i := 0; i < n; i++ {
		fmt.Scan(&clouds[i])
	}

	position, jumps := 0, 0
	for position < n-1 {
		if position != n-2 {
			if clouds[position+2] == 0 {
				position += 2
			} else {
				position++
			}
		} else {
			position++
		}
		jumps++

	}
	fmt.Println(jumps)
}


```

A very staright forward implementation. Notice the little nasty if else with indices. Just checking for the second last index there. If yes, only posible option is 1 step jump else normal logic of check if two jumps are possible and increasing the jump count in the end.

At last we print the number of jumps. Simple enough, isn't it?

# Summary

So, we solved the TODO problem from hackerrank.

I hope you enjoyed solving this question. This is it for this one, complete source code for this post can be found on my [Github Repo](https://github.com/rishabh1403/hackerrank-golang-solutions). Will see you in the next one.

There you go guys, you made it to end of the post. Please check out the video below if you still have any doubts. Subscribe to my [youtube channel](https://www.youtube.com/rishabh1403) and my mailing list below for regular updates. Follow me on [twitter](https://www.twitter.com/rishabhjain1403), drop me a mail or leave a comment here if you still have any doubts and I will try my best to help you out. Thanks

Stay tuned and see you around :)
`youtube: TODO`  
