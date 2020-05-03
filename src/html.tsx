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
          dangerouslySetInnerHTML={{
            __html: `
            var _iub = _iub || [];
            _iub.csConfiguration = {"lang":"en","siteId":1857565,"perPurposeConsent":true,"cookiePolicyId":46807218, "banner":{ "acceptButtonDisplay":true,"customizeButtonDisplay":true,"acceptButtonColor":"#fb00ff","acceptButtonCaptionColor":"white","customizeButtonColor":"#fbfbfb","customizeButtonCaptionColor":"#1c1c1c","textColor":"#fbfbfb","backgroundColor":"#1c1c1c", "position": "bottom" }};
            `,
          }}
        />
        <script
          type="text/javascript"
          src="//cdn.iubenda.com/cs/iubenda_cs.js"
          async
        ></script>
        <script
          type="text/plain"
          className="_iub_cs_activate"
          data-iub-purposes="4"
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-162760799-1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-162760799-1');
            `,
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
