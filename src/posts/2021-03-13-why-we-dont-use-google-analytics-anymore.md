---
title: 'Why we don’t use Google Analytics anymore'
author: henrik
thumbnail: '/img/humbnails/2021-03-13-why-we-dont-use-google-analytics-anymore.png'
description: |
  Do you really need Google Analytics for your website? We used it, and we switched to another
  tool because we want to respect the privacy of our visitors, sell fewer data to one of the biggest companies in the world, and improve the usability of our blog.
date: '2021-03-13T18:00:00.000Z'
layout: layouts/post.njk
---

When we started this blog last year, we made a list of things we have to do for
the launch. Our list included a rough design concept, a logo, avatars for social
media, and all the legal requirements. We live in Europe, so dealing with
privacy and cookie policies, legal details, and, the most annoying feature of
all time, cookie law banners felt pretty natural. It did feel like a common
feature set we have to follow. Part of this feature set was also Google
Analytics. We wanted to have some basic metrics about our website, so our
decision felt straightforward.

![Woman with an umbrella as a symbol for data privacy](/img/posts/umbrella.png)

## Mixed feelings

Google Analytics is just set for all kinds of websites, for personal websites as
well as for websites at scale. At that time, we didn’t question it. Also, and
most importantly, it’s for “free”. Our blog is a side project, so keeping the
costs down was very critical for us.

But over the last months, we started questioning our decision, with scandals in
mind like
[Cambridge Analytica](https://en.wikipedia.org/wiki/Cambridge_Analytica),
eye-opening documentaries like
[The Social Dilemma](https://www.thesocialdilemma.com/), and the episode of
[The Changelog](https://changelog.com/podcast/396) with the creators of
[Plausible](https://plausible.io).

After the podcast, I understood, that we are responsible for our website and
visitors. This one minute it took us to include the JavaScript snippet, had a
huge impact on our visitors. Without really giving them a choice, we sold their
data to one of the biggest companies in the world. And why did we do it? Because
we want to see simple metrics like page views or referrals. Is that responsible
action?

{% stats %}
{% statsItem value="~50", unit="%", description="Of all top 1m websites by traffic include Google Analytics", source="BuiltWith", sourceUrl="https://trends.builtwith.com/analytics/Google-Analytics" %}
{% statsItem value="~46", unit="KB", description="Size of the Google Analytics JavaScript Snippet", source="Google", sourceUrl="https://www.google-analytics.com/analytics.js" %}
{% endstats %}

## The era of alternatives

The great thing is that, with all the discussions about data, we also see great
alternatives popping up. Hosting providers like
[Netlify](https://www.netlify.com/products/analytics/) or
[Vercel](https://vercel.com/analytics) offer analytics tools, but we also see
independent solutions like Plausible. We don’t rely on Google Analytics anymore,
but we have to live with one fact: The tools are not for free. And that’s new to
us as we got used to the fact, that many online services are for free. And by
free we always mean using our data as a currency to pay for those services.
Nothing is wrong with that, but we have to answer the question of whether we
want to spend money because we want to be the real customers or just the
by-products of ad networks. When it comes to analytics, we decided to pay for a
service, to protect our visitors and provide the best experience we can.

## Cool side effects

Besides selling less data, the greatest advantage is also the ability to get rid
of the cookie law banner. Isn’t it annoying to click on those banners over and
over again every time we open a new page? I deeply believe the intention is
good, it’s good to inform us and being more transparent, but it certainly didn’t
make the internet more user-friendly. With the switch to Plausible, we don’t set
cookies anymore, so we also don’t need a cookie law banner. You can just go to
our website and enjoy our content. Also, Plausible’s JS snippet is way smaller
(~1,34 KB), so we could even improve the performance of our website.

![Plausible dashboard](/img/posts/plausible-dashboard.png)

In addition to that, our experience got way better, too. Honest question: Do you
really like the Google Analytics experience? Do you enjoy diving into your
stats? Probably not. We included Google Analytics, but we never checked it
because the console has thousands of complex views, navigations, options, and
whatsoever. With Plausible, we just have a simple dashboard with a bare minimum
set of metrics (btw our
[dashboard is publicly available](https://plausible.io/yetanother.blog)).

I'd like to mention, that we also tested Netlify’s analytics offering and all
the benefits we described here for Plausible also apply to them. We also loved
the experience, but Plausible is a bit cheaper for us, so we just made a
pragmatic decision.

## Take away

This blog post could be interpreted as a simple Google rant, but that’s not my
intention. I want to encourage you to re-think the usage of Google Analytics.
Maybe you have good reasons to use it, or you enjoy the experience. But maybe
you don’t. Maybe you have the same mixed feelings we had in the last months. I
want to encourage you to try out other tools. For a better, privacy-friendly,
faster and fairer web.
