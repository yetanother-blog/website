import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Layout } from '../ui/Layout/Layout';
import { SEO } from '../containers/SEO/SEO';
import { Typography } from '../ui/Typography/Typography';
import { useTheme } from 'styled-components';
import { CookiePolicyQuery } from '../../graphql-types';

const CookiePolicy: React.FC = () => {
  const theme = useTheme();
  const data = useStaticQuery<CookiePolicyQuery>(graphql`
    query CookiePolicy {
      iubendaDocument {
        cookiePolicy {
          content
        }
      }
    }
  `);

  const policy = (data.iubendaDocument?.cookiePolicy?.content || '').replace(
    '<h2> Cookie Policy of yetanother.blog </h2>',
    ''
  );

  return (
    <Layout>
      <SEO title="Cookie Policy 🍪" />
      <Typography variant="title" mb={theme.space.l}>
        Cookie Policy 🍪
      </Typography>
      <div
        dangerouslySetInnerHTML={{
          __html: policy,
        }}
      />
    </Layout>
  );
};

export default CookiePolicy;
