---
title: 'Quick Tip: First Letter Selector in CSS'
author: andre
thumbnail: './thumbnail.png'
date: '2021-04-07T11:50:12.613Z'
layout: layouts/post.njk
---

The first-letter pseudo-selector in CSS allows you to create an accessible and
decorative initial letter without wrapping the first character into a span
element. I prepared a code example and two possible solutions to demonstrate
when it makes sense to use the first-letter pseudo-selector.

## Fairy Tale Example

The first use case which came into my mind was a fairy tale. That's why I
created a little code snippet where I can demonstrate how to apply styles by
using the `::first-letter` selector:

import { Snippet } from '../../../src/components/Snippet/Snippet';

<Snippet
  url="https://examples.yetanother.blog/first-letter-selector/"
  title="First Letter CSS Selector"
  height={400}
  defaultTab="css"
/>

Check out the example on
[GitHub](https://github.com/yetanother-blog/examples/tree/main/first-letter-selector).

## First Letter Selector

This is the code you need to apply to style the initial character:

```html
<h1 class="headline">Once upon a time...</h1>
```

The good part here is you don't need a span element and the content is
accessible by default.

```css
:root {
  --accent-color: #cf4242;
}

.headline::first-letter {
  font-size: 80px;
  margin-right: 4px;
  color: var(--accent-color);
  vertical-align: middle;
}
```

The two things you have to keep in mind are that the pseudo-selector isn't
working if the parent element is set to `display: inline` or `display: flex`.
The second thing is that digraphs (e.g `IJ`) aren't supported, because they
usually contain two characters.

```css
/* This isn't working... */
a::first-child {
  font-size: 150%;
}
```

This won't work, because anchors are inline elements by default.

## Alternative Solution with ARIA Attributes

Let's assume you are in a situation where you might end up with digraphs and you
want to apply styles to the initial character. Then I can show you how to make
this accessible by using span elements and ARIA attributes:

```html
<h1 class="headline">
  <span class="headline__initial-letter">IJ</span>
  muiden
</h1>
```

Visually we already can achieve our goal by adding styles to the initial
character, but this solution isn't accessible for everyone. With some screen
reader software, this would be a bad experience because some screen readers
interpret the initial character separately. This would come across as if someone
is trying to spell a word to you. Let's fix this:

```html
<h1 class="headline" aria-labelledby="IJmuiden">
  <span aria-hidden="true" class="headline__initial-letter">IJ</span>
  <span aria-hidden="true">muiden</span>
</h1>
```

Now the screen reader will ignore the span elements and just provide text from
the `aria-labelledby` attribute.

FYI: IJmuiden (Dutch pronunciation: **[ˌɛi̯ˈmœy̯də(n)]** 🙃) is a small port city
in the Dutch province of North Holland.

## Conclusion

Try to use the `::first-letter` selector as much as possible, because it keeps
the code clean and it's accessible by default. As soon as you run into edge
cases like digraphs, then you should use the span element variant, but don't
forget to make it accessible for everyone.

Happy coding 👾

## More Information

- [browser support](https://caniuse.com/css-first-letter)
- [digraphs](<https://en.wikipedia.org/wiki/Digraph_(orthography)>)
- [aria-hidden](https://www.w3.org/TR/wai-aria-1.1/#aria-hidden)
- [aria-labelledby](https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby)
