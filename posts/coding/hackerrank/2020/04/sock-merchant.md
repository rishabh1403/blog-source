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

The problem statement states that we are given a list of socks of different colors. We need to find how many pairs of socks exists in the list.

# Solution

The approach here is very simple. We need to find the number of pairs of each color, sum it and return the sum. We can use a map to keep track of all the numbers and their count and in the end calculate the pairs. 

For this question since the range of the numbers are very small, we will create a **slice** of length `101` because the range will only be from `1 to 100` inclusive and slice has zero-based indexing. Next, we will loop over the socks array and for every sock, we will increase its count in the slice i.e. the count at the index represented by sock color in the slice. 

After we are done with all the socks, we will loop over the slice and see how many pairs exist in the slice and return it.

```go

package main

import "fmt"

func main() {
  var n int
  fmt.Scan(&n)

  socks := make([]int, 101)

  for i := 0; i < n; i++ {
    var t int
    fmt.Scan(&t)

    socks[t]++
  }

  count := 0

  for _, v := range socks {
    count += v / 2
  }

  fmt.Println(count)
}

```

Nothing very fancy in the code. We have a socks slice to keep count of all the socks. Next, we find the count of even pairs and return it. 

# Summary

So, we solved the *sock merchant* problem from hackerrank.

I hope you enjoyed solving this question. This is it for this one, complete source code for this post can be found on my [Github Repo](https://github.com/rishabh1403/hackerrank-golang-solutions). Will see you in the next one.

There you go guys, you made it to end of the post. Please check out the video below if you still have any doubts. Subscribe to my [youtube channel](https://www.youtube.com/rishabh1403) and my mailing list below for regular updates. Follow me on [twitter](https://www.twitter.com/rishabhjain1403), drop me a mail or leave a comment here if you still have any doubts and I will try my best to help you out. Thanks

Stay tuned and see you around :)
`youtube: 9s2ZlFjX-yw`  
