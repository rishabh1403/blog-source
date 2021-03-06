---
title: "Hackerrank | Solution of Utopian Tree in Golang"
description: "In this one we will solve question Utopian Tree from hackerrank in golang. Let's dive right into it."
author: "Rishabh Jain"
keywords: ["rishabh","jain","rishabh jain","rishabh1403","blog","competitive","coding","programming","tech","technology","go","golang","hackerrank","hackerrank solutions","solutions in golang","Utopian Tree"]
tags: ["hackerrank","coding","golang"]
categories: ["hackerrank","coding","golang"]
path: "posts/coding/hackerrank/2020/04/hackerrank-solution-of-utopian-tree-in-golang"
image: "./TODO.png"
date: 2020-04-07T02:44:34.563Z
draft: false
---
In this one we will solve question Utopian Tree from hackerrank in golang. Let's dive right into it.
<!--more-->

# Problem Statement
The question can be found here [Hackerrank Utopian Tree problem](https://www.hackerrank.com/challenges/utopian-tree/problem). 

The problem states that there is a tree that goes through **2 growth cycles** every year. In one of them, it doubles its height and in the next on it increases by 1 meter. The initial length of the tree is **1 meter** and we need to return the final length after **n** growth cycles.

# Solution

We are given many test cases. For each test case, we are given the number of growth cycles and we need to find the final length after those many growth cycles.

The approach is very simple. For every growth cycle, we will declare a height variable and assign a value `1` to it i.e. the initial height of the tree. Then we will loop till `n` times(the number of growth cycles) and keep on increasing the height according to the question.

Once the loop exits, we will print the final length of the tree.


We have discussed the approach, **I urge you to go ahead on hackerrank and give it another try**. :smile:

<hr />
<br />
If you are here, it means something went wrong in implementation or you are just too lazy :smile:. In any case, let's see a simple implementation of the above logic.

```go
package main

import "fmt"

func main() {
  var t int
  fmt.Scan(&t)
  for t > 0 {
    height := 1
    var n int

    fmt.Scan(&n)
    for i := 1; i <= n; i++ {
      if i%2 == 0 {
        height++
      } else {
        height = height * 2
      }
    }
    fmt.Println(height)
    t--
  }

}


```

There's nothing complicated with the code itself. Just the code counterpart of the logic discussed above. Notice how we used the `for loop` like we use `while loops` in other languages. In `GOLang`, `for` is used like `while` and `do-while`. Pretty cool!!! isn't it?

# Summary

So, we solved the Utopian Tree problem from hackerrank.

I hope you enjoyed solving this question. This is it for this one, complete source code for this post can be found on my [Github Repo](https://github.com/rishabh1403/hackerrank-golang-solutions). Will see you in the next one.

There you go guys, you made it to end of the post. Please check out the video below if you still have any doubts. Subscribe to my [youtube channel](https://www.youtube.com/rishabh1403) and my mailing list below for regular updates. Follow me on [twitter](https://www.twitter.com/rishabhjain1403), drop me a mail or leave a comment here if you still have any doubts and I will try my best to help you out. Thanks

Stay tuned and see you around :)
`youtube: TODO`  
