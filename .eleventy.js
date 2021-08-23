const { DateTime } = require("luxon");
const externalLinks = require('eleventy-plugin-external-links')
const fs = require("fs");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItForInline = require("markdown-it-for-inline");
const markdownItImageLazyLoading = require('markdown-it-image-lazy-loading');
const pluginNavigation = require("@11ty/eleventy-navigation");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginReadingTime = require('eleventy-plugin-reading-time');
const pluginCacheBuster = require('@mightyplow/eleventy-plugin-cache-buster');
const util = require('util');

module.exports = function(eleventyConfig) {
  // Add plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addPlugin(externalLinks);
  eleventyConfig.addPlugin(pluginReadingTime);
  eleventyConfig.addPlugin(pluginCacheBuster({
    createResourceHash: () => Date.now()
  }));

  // https://www.11ty.dev/docs/data-deep-merge/
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.setFrontMatterParsingOptions({ excerpt: true });

  // Alias `layout: post` to `layout: layouts/post.njk`
  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");

  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("LLLL dd, yyyy");
  });

  eleventyConfig.addFilter("rssDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toHTTP();
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  // https://github.com/11ty/eleventy/issues/266#issuecomment-716176366
  eleventyConfig.addFilter('console', function(value) {
    return util.inspect(value);
  });

  // Copy folders to the output
  eleventyConfig.addPassthroughCopy({ "src/img": "img" });
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addPassthroughCopy({ "node_modules/@fontsource": "fonts" });
  eleventyConfig.addPassthroughCopy({ "node_modules/prism-themes/themes/prism-shades-of-purple.css": "css/prism-shades-of-purple.css" });

  // Customize Markdown library and settings:
  let markdownLibrary = markdownIt({
    html: true,
    breaks: false,
    linkify: true
  }).use(markdownItAnchor, {
    permalink: true,
    permalinkClass: "direct-link",
    permalinkSymbol: "#"
  }).use(markdownItImageLazyLoading, {
    image_size: true,
    base_path: __dirname + '/src/',
  }).use(markdownItForInline, 'inline_code_class', 'code_inline', (tokens, idx) => {
    tokens[idx].attrPush(['class', 'language-text'])
  });

  eleventyConfig.setLibrary("md", markdownLibrary);

  // Override Browsersync defaults (used only with --serve)
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, browserSync) {
        const content_404 = fs.readFileSync('_site/404.html');

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.writeHead(404, {"Content-Type": "text/html; charset=UTF-8"});
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false
  });

  eleventyConfig.addShortcode("snippet", ({ url, title, defaultTab = 'html', height = 450 }) => {
    const encodedURL = encodeURIComponent(url);
    return `<iframe class="indiepen" src="https://indiepen.tech/embed/?url=${encodedURL}&tab=${defaultTab}" title="${title}" loading="lazy" width="100%" height="${height}"></iframe>`;
  });

  eleventyConfig.addPairedShortcode("stats", (content) => {
    return `<div class="post__stats">${content}</div>`;
  });

  eleventyConfig.addShortcode("statsItem", ({ value, unit, description, source, sourceUrl }) => {
    return `
<div class="post__stats-item">
  <span class="post__stats-item-number">
    ${value}<small>${unit}</small>
  </span>
  <span class="post__stats-item-description">
    ${description}
  </span>
  <span class="post__stats-item-source">
    (Source:&nbsp;<a href="${sourceUrl}" target="_blank" rel="noopener noreferrer nofollow" class="post__stats-item-source-link">${source}</a>)
  </span>
</div>
    `;
  });

  return {
    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ],

    // -----------------------------------------------------------------
    // If your site deploys to a subdirectory, change `pathPrefix`.
    // Don’t worry about leading and trailing slashes, we normalize these.

    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for link URLs (it does not affect your file structure)
    // Best paired with the `url` filter: https://www.11ty.dev/docs/filters/url/

    // You can also pass this in on the command line using `--pathprefix`

    // Optional (default is shown)
    pathPrefix: "/",
    // -----------------------------------------------------------------

    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: "njk",

    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: "njk",

    // Opt-out of pre-processing global data JSON files: (default: `liquid`)
    dataTemplateEngine: false,

    // These are all optional (defaults are shown):
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
