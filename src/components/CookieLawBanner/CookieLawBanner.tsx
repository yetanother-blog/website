import React from 'react';
import Helmet from 'react-helmet';

export const CookieLawBanner: React.FC = () => {
  return (
    <Helmet>
      <script type="text/javascript">
        {`var _iub = _iub || [];
_iub.csConfiguration = {"lang":"en","siteId":1857565,"cookiePolicyId":46807218, "banner":{ "acceptButtonDisplay":true,"position":"bottom","customizeButtonDisplay":true,"acceptButtonColor":"#fb00ff","acceptButtonCaptionColor":"white","customizeButtonColor":"#fbfbfb","customizeButtonCaptionColor":"#1c1c1c","rejectButtonColor":"#fb00ff","rejectButtonCaptionColor":"white","textColor":"#fbfbfb","backgroundColor":"#1c1c1c" }};`}
      </script>
      <script
        type="text/javascript"
        src="//cdn.iubenda.com/cs/iubenda_cs.js"
        async
      ></script>
    </Helmet>
  );
};
