import { graphql, PageRendererProps, useStaticQuery } from 'gatsby';
import React from 'react';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';

const Imprint: React.FC<PageRendererProps> = (props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <SEO title="All posts" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <p>Imprint ✨</p>
      <small>coming soon...</small>
    </Layout>
  );
};

export default Imprint;
