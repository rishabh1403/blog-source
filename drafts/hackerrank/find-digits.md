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

The problem states that we are given a number and we need to find the digits in the number which divide the number perfectly.

# Constraints and Challenges

- Keep division with 0 in mind

# Solution

The approach is as follows
- For each number, we get the digits of the number
- We keep a count variable to keep the count of digits that divide the number perfectly
- we can find the digits of the number by taking modulus of the number by 10 iteratively
- Make sure to keep zero in mind which checking the divisibility


We have discussed the approach, **I urge you to go ahead on hackerrank and give it another try**. :smile:

<hr />
<br />
If you are here, it means something went wrong in implementation or you are just too lazy :smile:. In any case, let's see a simple implementation of the above logic.

```go
package main

import (
	"bufio"
	"fmt"
	"io"
	"os"
	"strconv"
	"strings"
)

// Complete the findDigits function below.
func findDigits(n int32) int32 {
	num := n
	var count int32 = 0
	for n > 0 {

		if digit := n % 10; digit != 0 && num%digit == 0 {
			count++
		}
		n = n / 10
	}

	return count

}

func main() {
	reader := bufio.NewReaderSize(os.Stdin, 1024*1024)

	stdout, err := os.Create(os.Getenv("OUTPUT_PATH"))
	checkError(err)

	defer stdout.Close()

	writer := bufio.NewWriterSize(stdout, 1024*1024)

	tTemp, err := strconv.ParseInt(readLine(reader), 10, 64)
	checkError(err)
	t := int32(tTemp)

	for tItr := 0; tItr < int(t); tItr++ {
		nTemp, err := strconv.ParseInt(readLine(reader), 10, 64)
		checkError(err)
		n := int32(nTemp)

		result := findDigits(n)

		fmt.Fprintf(writer, "%d\n", result)
	}

	writer.Flush()
}

func readLine(reader *bufio.Reader) string {
	str, _, err := reader.ReadLine()
	if err == io.EOF {
		return ""
	}

	return strings.TrimRight(string(str), "\r\n")
}

func checkError(err error) {
	if err != nil {
		panic(err)
	}
}


```

Lets look at the solution. We have update the findDigits function. First we keep a copy of the initial number because the number will converge to zero while finding the digits. We need the initial number for checking the divisibility. 

Next, we find the digits of the number and if the digit is not zero, we check for the divisibility. If all goes well, we update our counter. At the end we return the counter. 

Notice the clever if statement. This is one of the manmy fewature in GoLang that I love. It reduces the scope of digits and gets the work done :) 

# Summary

So, we solved the TODO problem from hackerrank.

I hope you enjoyed solving this question. This is it for this one, complete source code for this post can be found on my [Github Repo](https://github.com/rishabh1403/hackerrank-golang-solutions). Will see you in the next one.

There you go guys, you made it to end of the post. Please check out the video below if you still have any doubts. Subscribe to my [youtube channel](https://www.youtube.com/rishabh1403) and my mailing list below for regular updates. Follow me on [twitter](https://www.twitter.com/rishabhjain1403), drop me a mail or leave a comment here if you still have any doubts and I will try my best to help you out. Thanks

Stay tuned and see you around :)
`youtube: TODO`  
