import { PageRendererProps } from 'gatsby';
import React from 'react';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { Teaser } from '../components/Teaser/Teaser';
import { Typography } from '../components/Typography/Typography';

type Props = PageRendererProps;

export const NotFoundPage = (props: Props) => {
  return (
    <Layout size="narrow">
      <SEO title="404: Not Found" />
      <Teaser>404 Not Found</Teaser>
      <Typography variant="subheadline" textAlign="center">
        You just hit a route that doesn&#39;t exist... the sadness.
      </Typography>
    </Layout>
  );
};

export default NotFoundPage;
