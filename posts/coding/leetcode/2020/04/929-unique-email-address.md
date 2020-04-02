---
title: "Leetcode | Solution of Unique Email Address in JavaScript"
description: "In this post, we will solve unique email address from leetcode and compute it's time and space complexities. Let's begin."
author: "Rishabh Jain"
keywords: ["leetcode","js","javascript","Solution of reverse string","rishabh","jain","rishabh
jain","rishabh1403","blog","competitive","coding","programming","tech","technology",
interview", "interview questions", leetcode]
tags: ["leetcode","coding","javascript"]
categories: ["leetcode","coding","javascript"]
date: 2020-04-01T05:08:30.428Z
path: "posts/coding/leetcode/2020/04/leetcode-unique-email-address"
image: "./reversestring.png"
draft: false
---

In this post, we will solve unique email address from leetcode and compute it's time and space complexities. Let's begin.
<!--more-->

# Problem Statement
The question can be found at [leetcode reverse string problem](https://leetcode.com/problems/reverse-string/).

The problem states that we are given multiple emails  in an array and we need to
return the number of unique emails in the array based on following conditions

# Constraints and challenges

The following constraints are given in the question for local names
- The local name of the email can have . or + in them
- a dot is ignored, so a.b and ab are same 
- everything  after first plus is ignore, so a+bc and a is same

None of these rules apply on domain name, so a.b and ab are not same when it
comes to domain names. a+bc and a are also not same.


# Solution

The solution includes some string/array processing. Here's the approach
- We'll declare an empty set to store our processed emails
- Next we'll iterate over all the emails in the array
- For every email, we'll split the email into local and domain name
- domain name needs no processing beacuse rules of dot or plus don't apply to
  them, so we'll divert our focus to local names
- first, we'll ignore everything after the first plus
- next we'll replace every dot with an empty string
- This will give us our processed local name
- At last, we'll join the email back and add to set
- since set only stores unique values, when the loop exists, the size of set is
  the number of unique emails 

We have discussed the approach, **I urge you to go ahead on leetcode and give it another try**. :smile:

<hr />
<br />
If you are here, it means something went wrong in implementation or you are just too lazy :smile:. In any case, let's see a simple implementation of the above logic.

```js

var numUniqueEmails = function (emails) {
  const set = new Set();

  for (const email of emails) {
    const arr = email.split("@");

    // ignore everything after first occurence of +
    arr[0] = (arr[0].split("+"))[0]; 

    // replace all dots with nothing i.e. empty string
    arr[0] = arr[0].replace(/\./g, "");

    // add final email ( processed ) to set
    set.add(arr.join("@"));
  }

  return set.size;
};

```

Let's discuss the solution. First we declare a set. Next, we loop over all the
emails and process them according to the logic discussed above. I guess the
comments are self explanatory in the code snippet about the processing of local
name.

At the end we return the size of the set, which would only hold unique values.

Here are the stats on submission

```yaml

Status: Accepted
Runtime: 150ms
Memory: 42.3MB

```

## Time and space complexity

### Time complexity

We are looping over the string array once, so time complexity
would be **O(n)**.

### Space complexity

We are using extra space to store unique emails. So space
complexity is linear, **O(n)**.

# Summary

So, we solved the unique email address problem by using two pointer method and calculated the time and space complexities.

I hope you enjoyed solving this question. This is it for this one, complete source code for this post can be found on my [Github Repo](https://github.com/rishabh1403/leetcode-javascript-solutions). Will see you in the next one.

There you go guys, you made it to end of the post.  Subscribe to my [youtube channel](https://www.youtube.com/rishabh1403) for regular updates. Follow me on [twitter](https://www.twitter.com/rishabhjain1403), drop me a mail or leave a comment here if you still have any doubts and I will try my best to help you out. Thanks

Stay tuned and see you around :)
`youtube: 8j24rPjGBwU`