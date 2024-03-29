---
title: Continuous Integration With Netlify Build Plugins
date: '2020-05-02T18:34:02.866Z'
author: henrik
description: >
  With Netlify's new build plugins, we can hook into their build pipeline  and
  do fancy stuff like a simple continuous integration for every pull request.
layout: layouts/post.njk
---

Netlify is a great tool to easily deploy and host your static website without
any hassle but when it comes to a real-life continuous integration it can become
a bit tricky. For this blog, we used a GitHub workflow to run unit tests, lint
the code and check the _yarn.lock_ file for uncommitted changes. Therefore, we
disabled Netlify's _auto-publishing_ feature and deployed our blog manually
after all checks passed. It certainty works, but we would love to stay in
Netlify's ecosystem and use one tool to deploy our application.

## So, what are Netlify Build Plugins?

Netlify build plugins are JavaScript functions which get executed in Netlify's
build pipeline. They just released the beta version and you can enable it for
your application right in the Netlify app. With that, you can basically extend
the build pipeline and do whatever you want (well more or less).

There are already good examples like:

- Running Cypress end-to-end tests
- Cache your Gatsby cache and improve the build time significantly
- Automatically generate a sitemap

I can’t wait to see more awesome plugins popping up in the next months! Besides
general plugins, we can also build our custom plugin and put it next to our
code.

## CI as a plugin

So in this example, we want to run some checks before Netlify actually builds
the application:

```javascript
module.exports = {
  async onPreBuild({ utils }) {
    try {
      await utils.run.command('git diff --exit-code yarn.lock');
    } catch (error) {
      utils.build.failBuild(
        'Please commit the latest changes in your yarn.lock file!'
      );
    }

    try {
      await utils.run.command('yarn lint');
      await utils.run.command('yarn test:ci');
      await utils.run.command('yarn build-storybook');
    } catch (error) {
      utils.build.failBuild('CI failed!');
    }
  },
};
```

What's happening here?

1. First, we check the _yarn.lock_ file for uncommitted changes after Netlify
   installed the dependencies. That way we ensure the integrity of the
   dependencies.
2. After that, we lint the code, run unit tests and build Storybook.

Last but not least, just tell Netlify you have a new plugin by extending the
_netlify.toml_ file:

```toml
[[plugins]]
package = "./.plugins/ci"
```

That’s it! Our CI pipeline in pure JavaScript! Of course, it’s a simple example
but already enough for us to validate our application. Netlify passes some input
to the plugin we can use to interact with the build pipeline. As you can see, we
use a helper function to run shell scripts and another one to fail the build.

Right now it's possible to hook into the following steps of their build
pipeline:

| Event       | Description                        |
| :---------- | :--------------------------------- |
| onInit      | Runs before anything else          |
| onPreBuild  | Before build commands are executed |
| onBuild     | Build commands are executed        |
| onPostBuild | After Build commands are executed  |
| onSuccess   | Runs on build success              |
| onError     | Runs on build error                |
| onEnd       | Runs on build error or success     |

## Recap

Netlify build plugins can be really helpful to have one tool for CI and CD but
it's still beta software and some features are definitely missing. To speed up
the build pipeline, it would be cool to run plugins in parallel, for instance,
there is no reason for us to run our checks in sequence. Another cool feature
would be to have GitHub pull request checks for every plugin. Just imagine you
could already see in GitHub which plugin failed and what error was thrown.
Nevertheless, it's worth checking out build plugins and bringing your
development setup to the next level!

In case you are totally excited now, here is a reading list:

- [Netlify Build Plugins Docs](https://docs.netlify.com/configure-builds/build-plugins/#enable-build-plugins-beta)
- [Build Your Own Plugins](https://github.com/netlify/build)
- [Run Plugins In Parallel Issue](https://github.com/netlify/build/issues/168)
