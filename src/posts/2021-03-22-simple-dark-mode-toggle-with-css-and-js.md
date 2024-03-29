---
title: 'Simple Dark Mode Toggle with CSS and JS'
description: 'Dark mode is not a hot topic anymore, but I was still interested in
understanding the mechanic behind a dark mode. My goal was to create an easy
solution with pure CSS and JS. Not only should my dark mode respect the system
preference, but it should also provide a toggle to switch between the light and
dark mode as well as persist the choice somehow.'
author: henrik
thumbnail: '/img/thumbnails/2021-03-22-simple-dark-mode-toggle-with-css-and-js.png'
date: '2021-03-22T18:00:00.000Z'
layout: layouts/post.njk
---

Dark mode is not a hot topic anymore, but I was still interested in
understanding the mechanic behind a dark mode. My goal was to create an easy
solution with pure CSS and JS. Not only should my dark mode respect the system
preference, but it should also provide a toggle to switch between the light and
dark mode as well as persist the choice somehow. And here is what I got:

{% snippet url="https://examples.yetanother.blog/dark-mode-toggle/", title="Example showing a dark mode toggle", defaultTab="css", height="400" %}

Okay, I agree, it's just a button and you can click on it and it changes the
background color. Not special at all but let's take a look at the details and
how it actually works.

Let's get started by creating a simple button:

```html
<button class="toggle">Toggle</button>
```

The next bit is the CSS:

```css
html {
  --background-color: #fcfcfc;
  --primary-color: #fb00ff;
}

html[data-dark='true'] {
  --background-color: #0f0f0f;
}

body {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  background-color: var(--background-color);
}

.toggle {
  font-family: 'Source Code Pro', monospace;
  font-size: 20px;
  line-height: 1.3;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  background: none;
  padding: 16px 30px;
  cursor: pointer;
  border-radius: 30px;
  transition: 200ms transform ease-in-out;
}

.toggle:hover {
  transform: scale(0.95);
}
```

The most important thing to notice here is the CSS variables: By default, I set
some variables for the light mode, apply them to the _html_ element and use them
for the other parts of my example. Also, I set some variables for the dark mode.
As you can see, we need to set a data attribute to trigger the dark mode. That
brings us to JavaScript:

```js
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
const toggle = document.querySelector('.toggle');
const html = document.querySelector('html');

html.dataset.dark = localStorage.dark || prefersDarkMode.matches;

toggle.addEventListener('click', () => {
  localStorage.dark = !(html.dataset.dark == 'true');
  html.dataset.dark = localStorage.dark;
});
```

With _matchMedia_ we check the system preference for the dark mode, then we
check whether some preferences are stored in the local storage and use them in
favour of the system preference. Based on that, we set the data attribute.
Lastly, we flip the choice with every click on the toggle button. And that's all
we need for a dark mode toggle on our website. 🚀

The whole example is also available on
[GitHub](https://github.com/yetanother-blog/examples/tree/main/dark-mode-toggle).

Cheers ✌️
