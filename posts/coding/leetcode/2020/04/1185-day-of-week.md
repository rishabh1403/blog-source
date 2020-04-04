---
title: "Leetcode | Solution of Day of Week in JavaScript"
description: "In this post, we will solve day of week from leetcode and compute it's time and space complexities. Let's begin."
author: "Rishabh Jain"
keywords: ["leetcode","js","javascript","Solution of reverse string","rishabh","jain","rishabh
jain","rishabh1403","blog","competitive","coding","programming","tech","technology",
interview", "interview questions", leetcode]
tags: ["leetcode","coding","javascript"]
categories: ["leetcode","coding","javascript"]
date: 2020-04-04T03:57:51.074Z
path: "posts/coding/leetcode/2020/04/leetcode-day-of-week"
image: "./day-of-week.png"
draft: false
---

In this post, we will solve the day of the week from leetcode and compute it's time and space complexities. Let's begin.
<!--more-->

# Problem Statement
The question can be found at [leetcode day of week problem](https://leetcode.com/problems/day-of-the-week/).

The problem states that we are given a date and we need to identify which day of
the week falls on that particular date.

# Solution

The approach for this one is pretty simple. We are given a date, so we can use
the `Date` function from JavaScript and get the actual day. The only problem is
the day is represented as numbers from `0 to 6` for `Sunday through Saturday`. So,
we'll keep an array to keep our days and return the day at the index returned from
the date function.

We have discussed the approach, **I urge you to go ahead on leetcode and give it another try**. :smile:

<hr />
<br />
If you are here, it means something went wrong in implementation or you are just too lazy :smile:. In any case, let's see a simple implementation of the above logic.

```js

var dayOfTheWeek = function (day, month, year) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    return days[(new Date(year, month - 1, day)).getDay()]
};

```

The solution is very straight forward. We use the date in the arguments to get
the day using JavaScript `Date` function. Notice, the month is subtracted by `1`,
because, javascript dates start from `0` as opposed to `1`. Next, we return the day
at the index returned from the date function.


Here are the stats on submission

```yaml

Status: Accepted
Runtime: 120ms
Memory: 33.5MB

```

## Time and space complexity

### Time complexity

We are only doing constant operations, so time complexity would be **O(1)**.

### Space complexity

We are using extra space only to store the days in an array, but the length of the array is constant. So space
complexity is constant, **O(1)**.

# Summary

So, we solved the day of week problem using JavaScript Date function and calculated the time and space complexities.

I hope you enjoyed solving this question. This is it for this one, complete source code for this post can be found on my [Github Repo](https://github.com/rishabh1403/leetcode-javascript-solutions). Will see you in the next one.

There you go guys, you made it to end of the post.  Subscribe to my [youtube channel](https://www.youtube.com/rishabh1403) for regular updates. Follow me on [twitter](https://www.twitter.com/rishabhjain1403), drop me a mail or leave a comment here if you still have any doubts and I will try my best to help you out. Thanks

Stay tuned and see you around :)
`youtube: LiJ9H7I6AU0`