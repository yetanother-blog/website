---
title:
  "Let's build an accordion with plain HTML and CSS"
author: andre
thumbnail: '/img/thumbnails/2022-01-13-lets-build-an-accordion-with-plain-html-and-css.png'
date: '2022-01-13T15:55:17.241Z'
description:
  "This article is about how to build an accordion element with plain HTML and CSS. There will be no JavaScript, I promise. I'll explain why you should use semantic HTML and how to customize it with CSS."
layout: layouts/post.njk
---

Today, I'll show you how to build an accordion with plain HTML and CSS. There will be no JavaScript, I promise. In the past, I used to build countless accordions using React or Vue. I ended up using a lot of JavaScript and div elements all over the place. Things got weird. Every so often, I forget about semantic HTML elements which might solve our problems without any JavaScript or headache.

## Let's look into the details

By details, I mean the actual HTML **details** element and the **summary** element. All you need to do here is to put the **summary** element into the **details** element as a first child:

{% snippet url="https://examples.yetanother.blog/accordion/first-example/", title="Example showing a accordion with plain HTML and CSS – first example", defaultTab="result", height="150" %}

```html
<details>
  <summary>What's this?</summary>
  It's an accordion.
</details>
```

And that's it. With just four lines of HTML, you have a lightweight solution for an accordion.

### Accessible by default

The best part is that it's working out of the box with assistive technologies such as screen readers. Be aware, though, this won't prevent you from building something that isn't accessible. One thing you should definitely need to know is that the **summary** element acts like a **button** and strips all roles from its child elements. That means you should avoid doing stuff like this:

```html
<summary>
  <h3>Don't do this please</h3>
</summary>
```

### No JavaScript

Another good reason is that this solution doesn't need JavaScript. No JavaScript means less code and less complexity.

### The details open attribute

Besides all common HTML attributes, the details element contains an `open` attribute, which is by default not present. In fact, you will see only the content inside the summary element. In case you would like to change the default behavior, you can add the open attribute to the details element and your accordion will be expanded by default:

{% snippet url="https://examples.yetanother.blog/accordion/second-example/", title="Example showing a accordion with plain HTML and CSS – second example", defaultTab="result", height="150" %}

```html
<details open>
  <summary>What's this?</summary>
  It's an accordion.
</details>
```

## Customization with CSS

Let's add some custom styles. Therefore, we need to get rid of the `::marker` pseudo-element:

```css
/* Get rid of the marker pseudo-element from all browser for good */
details > summary {
  list-style: none;
}

details > summary::-webkit-details-marker {
  display: none;
}
```

Since we know that the **summary** element acts like a **button** we should change the appearance of the cursor:

```css
details > summary {
  cursor: pointer;
}
```

The `details[open]` selector allows you to apply styling to the open state. In my contrived example, I used this selector to animate an icon:

```css
/* Access the active state with the open attribute */
details[open] .chevron-icon {
  transform: rotate(90deg);
}
```

I'll leave the rest to you and your creativity.

## Demo

That's my final example:

{% snippet url="https://examples.yetanother.blog/accordion/", title="Example showing a accordion with plain HTML and CSS", defaultTab="result", height="450" %}

## Do you want to use JavaScript?

Well, that's up to you. The **details** element dispatches the `toggle` event each time when the `open` state changes. All you need to do here is to apply an event listener to the **details** element:

```js
details.addEventListener('toggle', event => {
  /* Some JavaScript... */
  console.log(details.open);
});
```

For further information, just read the [MDN article](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details), it's a good source of truth.

<details>
  <summary>Developer hint ‼️</summary>
  You don't need JavaScript for an accordion
</details>

## Conclusion

You can build a clean and accessible accordion without any JavaScript by just using two HTML elements and a bit of CSS. For further information, just read the MDN article, it's a good source of truth.

It definitely makes sense to do some research in advance before you want to start building a new UI element. That was my personal learning. Just take the time and do that. Thank you for reading my article. I hope you enjoyed it. If you got any questions or improvements, feel free to hit me up on [Twitter](https://twitter.com/_andrewsecret) or [GitHub](https://github.com/andrew-secret).

## Links

- [MDN article](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
- [First example](https://examples.yetanother.blog/accordion/first-example/)
- [Second example](https://examples.yetanother.blog/accordion/second-example/)
- [Final example](https://examples.yetanother.blog/accordion/)
- [Code on GitHub](https://github.com/yetanother-blog/examples/tree/main/accordion)
