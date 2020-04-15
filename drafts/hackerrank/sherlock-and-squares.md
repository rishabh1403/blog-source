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

The problem states that we are given two number and we need to find the number of perfect squares between those numbers including those.

# Constraints and Challenges

Looping and checking if they are perfect squares are out of question. It will be very time consuming.

# Solution

For this one, we will use some maths. 
Let take a set [3, 25]. Now we find the square root of 3 and find the immediate next integer bigger to or equal the number we have a lower limit. Similary, if we find square root of 25 and find the immediate next integer smaller to or equal the number we have a upper limit. Now all we need to do is count the number from the lower limit to upper limit including thiose. Becuase theior squares will fall in range we took initially, we can easily find the count of perfect squares by just couting numbers in our lower and upper limit. 


We have discussed the approach, **I urge you to go ahead on hackerrank and give it another try**. :smile:

<hr />
<br />
If you are here, it means something went wrong in implementation or you are just too lazy :smile:. In any case, let's see a simple implementation of the above logic.

```go

package main

import (
	"fmt"
	"math"
)

func main() {
	var n int
	fmt.Scan(&n)
	for n > 0 {
		var a, b int
		fmt.Scan(&a, &b)

		low := math.Ceil(math.Sqrt(float64(a)))
		high := math.Floor(math.Sqrt(float64(b)))
		fmt.Printf("%.0f\n", (high + 1 - low))
		n--
	}
}

```

The only thing to discuss here is the last line. We need to print an integer, so , that explains the formatted print. Also, we don't need to count the numbers, just use simple maths to findf the count

# Summary

So, we solved the TODO problem from hackerrank.

I hope you enjoyed solving this question. This is it for this one, complete source code for this post can be found on my [Github Repo](https://github.com/rishabh1403/hackerrank-golang-solutions). Will see you in the next one.

There you go guys, you made it to end of the post. Please check out the video below if you still have any doubts. Subscribe to my [youtube channel](https://www.youtube.com/rishabh1403) and my mailing list below for regular updates. Follow me on [twitter](https://www.twitter.com/rishabhjain1403), drop me a mail or leave a comment here if you still have any doubts and I will try my best to help you out. Thanks

Stay tuned and see you around :)
`youtube: TODO`  
