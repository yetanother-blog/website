---
title: Why should I use a UI library?
date: '2021-03-14T17:29:17.970Z'
author: andre
thumbnail: '/img/thumbnails/2021-03-14-why-should-i-use-a-ui-library.png'
layout: layouts/post.njk
---

In this post, I want to point out what advantages you can gain from an
open-source UI library and how it can make your life easier.

---

{% image "./src/img/thumbnails/2021-03-14-why-should-i-use-a-ui-library.png", "ui components with thinking emoji" %}

## Material Design Tab Example

A while ago I decided to rebuild a React Tab component from
[Material UI](https://material-ui.com/) with Vanilla Javascript to get an
overview of the complexity and the effort. My main goal there was to focus on
accessibility like navigating with arrows keys or tab index handling. Here's the
result:

{% snippet url="https://examples.yetanother.blog/material-design-tab/", title="Example showing a material design tab component", defaultTab="result", height="450" %}

_Source:
[GitHub](https://github.com/yetanother-blog/examples/tree/main/material-design-tab)_

I came to my conclusion that it takes a lot of effort and knowledge to build a
rock-solid UI component from scratch. Especially when it comes to:

- accessibility
- responsive design
- edges cases
- browser compatibility

Some details like tab focus with arrow keys haven't been on my mind at that
time. Due to my lack of knowledge, I wasn't even capable to fulfill all the
points you see above. If you compare my example with the Material UI component
you'll see that there is much more logic in place which makes their UI component
even more rock-solid.

## Don't Reinvent The Wheel

You don't have to write each time the same code when you start a new project. I
often underestimate the complexity of a seemingly easy UI component. In most
cases, I decide to use an open-source library. The main advantages for me are:

- don't have to write and maintain complex javascript logic
- fewer bugs in a project
- accessibility is taken into account
- UI is way more solid and cover edge cases for me
- power of an open-source community

Hundreds of people polishing components, finding bugs, and fixing them. Just
take a look at this open-source UI library on
[GitHub](https://github.com/mui-org/material-ui) and check out how many people
are contributing. Isn't that awesome?!

## Conclusion

For sure there is a situation where it makes sense to write a UI component from
scratch because there is simply no perfect solution on the internet. But you
should always evaluate this step carefully and keep in mind that you have to be
aware of the complexity and effort it takes to write solid UI components.
Nevertheless, I recommend building UI from scratch in an encapsulated
environment like [CodePen](https://codepen.io/). I've always wondered what new
things can be learned on this path. Keep learning!
