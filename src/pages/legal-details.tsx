import { PageRendererProps } from 'gatsby';
import React from 'react';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { Typography } from '../components/Typography/Typography';

const Imprint: React.FC<PageRendererProps> = () => {
  return (
    <Layout>
      <SEO title="👩‍⚖️ legal details" />
      <Typography variant="title" marginBottom={20}>
        Legal Disclosure
      </Typography>
      <Typography variant="text" marginBottom={40}>
        Information in accordance with Section 5 TMG
        <br />
        <br />
        Henrik Fricke
        <br />
        Alsterdorfer Str. 159
        <br />
        22297 Hamburg
        <br />
        <br />
        André Rusakow
        <br />
        Shanghaiallee 19
        <br />
        20457 Hamburg
      </Typography>
      <Typography variant="headline" marginBottom={20}>
        Contact Information
      </Typography>
      <Typography variant="text" marginBottom={40}>
        Telephone: +49-40-30228267
        <br />
        E-Mail: <a href="mailto:mail@yetanother.blog">mail@yetanother.blog</a>
        <br />
        Internet address:{' '}
        <a href="https://yetanother.blog " target="_blank">
          https://yetanother.blog
        </a>
      </Typography>
      <Typography variant="headline" marginBottom={20}>
        Disclaimer
      </Typography>
      <Typography variant="text" marginBottom={20}>
        Accountability for content
        <br />
        The contents of our pages have been created with the utmost care.
        However, we cannot guarantee the contents' accuracy, completeness or
        topicality. According to statutory provisions, we are furthermore
        responsible for our own content on these web pages. In this matter,
        please note that we are not obliged to monitor the transmitted or saved
        information of third parties, or investigate circumstances pointing to
        illegal activity. Our obligations to remove or block the use of
        information under generally applicable laws remain unaffected by this as
        per §§ 8 to 10 of the Telemedia Act (TMG).
        <br />
        <br />
        Accountability for links
        <br />
        Responsibility for the content of external links (to web pages of third
        parties) lies solely with the operators of the linked pages. No
        violations were evident to us at the time of linking. Should any legal
        infringement become known to us, we will remove the respective link
        immediately.
        <br />
        <br />
        Copyright
        <br />
        Our web pages and their contents are subject to German copyright law.
        Unless expressly permitted by law, every form of utilizing, reproducing
        or processing works subject to copyright protection on our web pages
        requires the prior consent of the respective owner of the rights.
        Individual reproductions of a work are only allowed for private use. The
        materials from these pages are copyrighted and any unauthorized use may
        violate copyright laws.
        <br />
        <br />
        <i>Source: </i>
        <a
          href="http://www.translate-24h.de"
          target="_blank"
          rel="noreferrer noopener"
        >
          impressum generator at translate-24h.de
        </a>
      </Typography>
    </Layout>
  );
};

export default Imprint;
