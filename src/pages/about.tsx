import { PageRendererProps } from 'gatsby';
import React from 'react';
import { Layout } from '../ui/Layout/Layout';
import { SEO } from '../containers/SEO/SEO';
import { Typography } from '../ui/Typography/Typography';
import { useTheme } from 'styled-components';

const About: React.FC<PageRendererProps> = () => {
  const theme = useTheme();

  return (
    <Layout>
      <SEO title="🦄 About" keywords={['about']} />
      <Typography variant="title" marginBottom={20}>
        Hi 👋,
        <br /> we’re Henrik & André
        <br /> both Software Developers
        <br /> based in Hamburg.
      </Typography>
      <Typography
        variant="subheadline"
        fontWeight="400"
        marginBottom={theme.space.xl}
      >
        We would like to help you to stay up to date about the latest
        <br /> trends in web developement
      </Typography>
    </Layout>
  );
};

export default About;
