import { graphql, PageRendererProps, useStaticQuery } from 'gatsby';
import React from 'react';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';

const About: React.FC<PageRendererProps> = (props) => {
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
    <Layout location={props.location} title={siteTitle}>
      <SEO title="All posts" keywords={['about']} />
      <p>About ✨</p>
    </Layout>
  );
};

export default About;
