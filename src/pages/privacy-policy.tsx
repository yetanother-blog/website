import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { Typography } from '../components/Typography/Typography';
import { useTheme } from 'styled-components';
import { PrivacyPolicyQuery } from '../../graphql-types';

const PrivacyPolicy: React.FC = () => {
  const theme = useTheme();
  const data = useStaticQuery<PrivacyPolicyQuery>(graphql`
    query PrivacyPolicy {
      iubendaDocument {
        privacyPolicy {
          content
        }
      }
    }
  `);

  const policy = (data.iubendaDocument?.privacyPolicy?.content || '').replace(
    '<h1>Privacy Policy of <strong>yetanother.blog</strong></h1>',
    ''
  );

  const metaTags = [
    {
      name: "robots",
      content: "noindex, nofollow"
    }
  ];

  return (
    <Layout>
      <SEO title="Privacy Policy 📃" meta={metaTags} />
      <Typography variant="title" mb={theme.space.l}>
        Privacy Policy 📃
      </Typography>
      <div
        dangerouslySetInnerHTML={{
          __html: policy,
        }}
      />
    </Layout>
  );
};

export default PrivacyPolicy;
