import React from 'react';

export default function HTML(props: any) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="google-site-verification"
          content="7VN8uwagcAuD4V-4GKJqa3I2SENSccfc0Ph7LWwd1Kc"
        />
        <script
          async
          defer
          data-domain="yetanother.blog"
          src="https://plausible.io/js/plausible.js"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `if (document.location.hostname.indexOf('netlify.app') != -1) localStorage.plausible_ignore = true`,
          }}
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}
