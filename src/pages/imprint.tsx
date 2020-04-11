import { PageRendererProps } from 'gatsby';
import React from 'react';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { Typography } from '../components/Typography/Typography';

const Imprint: React.FC<PageRendererProps> = () => {
  return (
    <Layout>
      <SEO title="😴 imprint" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <Typography variant="title" marginBottom={20}>
        Imprint
      </Typography>
    </Layout>
  );
};

export default Imprint;
