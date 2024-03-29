---
title: 'Server-side rendering (SSR) with Netlify'
author: henrik
thumbnail: '/img/thumbnails/2021-04-28-server-side-rendering-with-netlify.png'
date: '2021-04-28T09:18:03.215Z'
description:
  'The easiest way to create a web server: A redirect rule and a simple Netlify
  function. This enables us to render content dynamically, transform data or
  handle backend-to-backend communication.'
layout: layouts/post.njk
---

In recent years, we have seen a slide shift from optimising everything for
static hosting towards hybrid solutions. [Next.js](https://nextjs.org/), and
also the rising star [Svelte Kit](https://kit.svelte.dev/) makes it easy to
render routes statically or dynamically. This is just an awesome tool in our
toolbox and I was curious how that works under the hood. While digging into
[Svelte’s Netlify adapter](https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify),
I stumbled across an awesome, yet hidden feature. Today, we are going to talk
about [redirect rules](https://docs.netlify.com/routing/redirects/).

## Wait, redirect rules?

Yes, not super sexy, but super powerful. My typical use case for redirect rules
is a dead path I need to redirect to the start page to make Google happy. So a
redirect rule could look like this:

```bash
# _redirects file
/my-old-path         /              301
```

That’s simple. We want to redirect all traffic from `/my-old-path` to `/` and
return the HTTP status code `301`.

Okay, so far so good, let’s take a look at another example:

```bash
# _redirects file
/*         /.netlify/functions/render              200
```

This was pure magic for me. We can redirect some or even all traffic to a
[Netlify function](https://www.netlify.com/products/functions/). A Netlify
function is a small compute unit running on Netlify’s infrastructure. We write a
simple JavaScript function, deploy it to Netlify and Netlify takes care of
providing an endpoint to execute our JS function. With that, we more or less
create a web server without the pain of maintaining a web server. But wait, take
a look at the next example to understand the real power.

## Hybrid solutions

Let’s create a simple example from scratch. First things first, we need to
bootstrap a Node.js project:

```bash
mkdir ssr-netlify
cd ssr-netlify
yarn init --yes
yarn add netlify-cli --dev
mkdir functions functions/render public
touch functions/render/index.js public/styles.css public/_redirects
```

So far, we just initialized a Node.js project, installed the Netlify CLI and
created some folders and files. However, we can already fire up the server:

```bash
yarn netlify dev -d public -f functions
```

Opening the server on http://localhost:8888 would just lead to a 404 error page.
Let’s re-use the redirect rule we just learned earlier:

```bash
# file public/_redirects
/*         /.netlify/functions/render              200
```

Refreshing the page now would actually not return a 404 page, instead, we get:

```bash
TypeError: lambdaFunc[lambdaHandler] is not a function
```

The problem is, we haven’t yet defined our Netlify function:

```javascript
// file functions/render/index.js
exports.handler = async () => {
  return {
    statusCode: 200,
    headers: {
      'content-type': 'text/html; charset=utf-8',
    },
    body: `
      <html>
        <body>
          <h1>Hello World :)</h1>
          <p>${new Date().toISOString()}</p>
        </body>
      </html>
    `,
  };
};
```

This change should return a web page with a headline and a paragraph. Pretty
cool! You could even use `curl` to send requests and you would still see the
current timestamp in the response. Let’s extend the feature set and add some
styling:

```javascript
// file functions/render/index.js
exports.handler = async () => {
  return {
    statusCode: 200,
    headers: {
      'content-type': 'text/html; charset=utf-8',
    },
    body: `
      <html>
        <head>
          <link rel="stylesheet" href="styles.css" />
        </head>
        <body>
          <h1>Hello World :)</h1>
          <p>${new Date().toISOString()}</p>
        </body>
      </html>
    `,
  };
};
```

And the CSS file:

```css
/*  file public/styles.css */
body {
  background-color: antiquewhite;
}
```

This brings us to the next awesome feature! With the redirect rule we defined
earlier, you might think all traffic has to go through the Netlify function, but
that’s not true. Netlify checks if the requested file exists statically and
calls the function only if it doesn’t. Isn’t that cool? That means with just one
simple redirect rule, we can build hybrid solutions, have a web server in place
and still static assets like CSS or JS. We could even have a mix of static HTML
files and dynamic routes.

## Takeaways

Should we use this technology to solve all our problems? Probably not. It’s just
good to keep it in mind. Netlify provides a super convenient solution to easily
create a web server without VMs, EC2s, Kubernetes Pods or Docker Images. We
should still consider static hosting, frameworks that do the heavy lifting for
us and avoid reinventing the wheel, but it’s good to understand the techniques
in the background. Still, for simple prototypes or quick solutions, this could
be very interesting.

BTW, I created a more complex
[Hacker News clone](https://github.com/yetanother-blog/netlify-ssr-example) to
demonstrate server-side rendering with old-fashioned template engines.

That’s it for today. I would love to get feedback on
[Twitter](https://twitter.com/henrik_fricke) or
[LinkedIn](https://www.linkedin.com/in/henrik-fricke/).

Cheers ✌️
