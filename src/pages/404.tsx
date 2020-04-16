import { PageRendererProps } from 'gatsby';
import React from 'react';
import { Layout } from '../ui/Layout/Layout';
import { SEO } from '../containers/SEO/SEO';

type Props = PageRendererProps;

export const NotFoundPage = (props: Props) => {
  return (
    <Layout>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundPage;
