---
title: "Hackerrank | Solution of Counting Valleys in Golang"
description: "In this one we will solve question Counting Valleys from hackerrank in golang. Let's dive right into it."
author: "Rishabh Jain"
keywords: ["rishabh","jain","rishabh jain","rishabh1403","blog","competitive","coding","programming","tech","technology","go","golang","hackerrank","hackerrank solutions","solutions in golang","Counting Valleys"]
tags: ["hackerrank","coding","golang"]
categories: ["hackerrank","coding","golang"]
path: "posts/coding/hackerrank/2020/04/hackerrank-solution-of-counting-valleys-in-golang/"
image: "./TODO.png"
date: 2020-04-07T02:44:34.563Z
draft: false
---
In this one we will solve question Counting Valleys from hackerrank in golang. Let's dive right into it.
<!--more-->

# Problem Statement
The question can be found here [Hackerrank Counting Valleys problem](https://www.hackerrank.com/challenges/counting-valleys/problem). 

The problem states that, given a terrain that **starts and ends at sea level**. We need to print the number of valleys in the terrain.

# Solution

The question describes valleys as 

<blockquote>
  A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
  <span>Hackerrank</span>
</blockquote>

The statement itself is the answer to the problem. So note that, when the depth is **zero**(at sea level) and previous depth was **negative**, it would mean that we are coming out of the valley. Now, all we need is to convert this logic to code and find the count of valleys.

We have discussed the approach, **I urge you to go ahead on hackerrank and give it another try**. :smile:

<hr />
<br />
If you are here, it means something went wrong in implementation or you are just too lazy :smile:. In any case, let's see a simple implementation of the above logic.

```go
package main

import "fmt"

func main() {
  var n int
  var s string

  fmt.Scan(&n, &s)

  depth := 0
  valley := 0
  for i := 0; i < n; i++ {
    if s[i] == 'U' {
      depth++
    }
    if s[i] == 'D' {
      depth--
    }

    if depth == 0 && s[i] == 'U' {
      valley++
    }
  }
  fmt.Println(valley)
}


```

Let's look at the solution. We take the length of the string and the string itself as input. We declare and assign the valley count and initial depth to be **0**. We loop over the string and check is at any point depth becomes **0** and the last step was **uphill**. In case the condition is true, we increase the valley count.

At last, we print the valley count.


# Summary

So, we solved the Counting Valleys problem from hackerrank.

I hope you enjoyed solving this question. This is it for this one, complete source code for this post can be found on my [Github Repo](https://github.com/rishabh1403/hackerrank-golang-solutions). Will see you in the next one.

There you go guys, you made it to end of the post. Please check out the video below if you still have any doubts. Subscribe to my [youtube channel](https://www.youtube.com/rishabh1403) and my mailing list below for regular updates. Follow me on [twitter](https://www.twitter.com/rishabhjain1403), drop me a mail or leave a comment here if you still have any doubts and I will try my best to help you out. Thanks

Stay tuned and see you around :)
`youtube: TODO`  
