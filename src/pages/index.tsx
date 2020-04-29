import { PageRendererProps } from 'gatsby';
import React from 'react';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { Typography } from '../components/Typography/Typography';
import { Box } from '../components/Box/Box';
import { Link } from '../components/Link/Link';
import { useTheme } from 'styled-components';
import { Card } from '../components/Card/Card';

const BlogIndex: React.FC<PageRendererProps> = (props) => {
  const theme = useTheme();

  return (
    <Layout>
      <SEO title="Hi 👋" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <Typography variant="title" mb={20}>
        Hi 👋,
        <br /> we’re Henrik & André
        <br /> both Software Developers
        <br /> based in Hamburg.
      </Typography>
      <Typography variant="subheadline" fontWeight="400" mb={theme.space.xl}>
        We would like to help you to stay up to date about the latest
        <br /> trends in web developement
      </Typography>
      <Box
        display="flex"
        flexDirection={['column', 'row']}
        justifyContent="space-between"
        mb={theme.space.m}
      >
        <Card
          width={['100%', 'calc(50% - 10px)']}
          to="/repos"
          mb={theme.space.l}
        >
          <Link
            display="block"
            variant="primary"
            component="span"
            mb={theme.space.m}
          >
            yet another repo
          </Link>
          <Typography variant="smallText">
            Yet another repo provide opinionated information about the latest
            independent repositories.
          </Typography>
        </Card>
        <Card
          width={['100%', 'calc(50% - 10px)']}
          to="/guides"
          mb={theme.space.l}
        >
          <Link
            display="block"
            variant="secondary"
            component="span"
            mb={theme.space.m}
          >
            yet another guide
          </Link>
          <Typography variant="smallText">
            Yet another guide about the latest technologies on the web.
          </Typography>
        </Card>
      </Box>
    </Layout>
  );
};

export default BlogIndex;
