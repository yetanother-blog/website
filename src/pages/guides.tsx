import React from 'react';
import { graphql, useStaticQuery, Link as GatsbyLink } from 'gatsby';
import { Layout } from '../components/layout';
import { AllBlogPostsProps } from '../types';
import { SEO } from '../components/seo';
import { Typography } from '../components/Typography/Typography';
import { useTheme } from 'styled-components';
import styled from 'styled-components';
import { Link } from '../components/Link/Link';

const Guides: React.FC = () => {
  const theme = useTheme();
  const data = useStaticQuery<AllBlogPostsProps>(graphql`
    query allGuideBlogPosts {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/.+content/blog/guides.+/" } }
      ) {
        nodes {
          excerpt
          frontmatter {
            title
            slug
            format
            date(formatString: "MMMM DD, YYYY")
            description
          }
        }
      }
    }
  `);

  const posts = data.allMdx.nodes;

  const StyledGatsbyLink = styled(GatsbyLink)`
    display: block;
    text-decoration: none;
    font-family: inherit;
    color: inherit;
    position: relative;
  `;

  return (
    <Layout size="narrow">
      <SEO
        title="Guides ✨"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <Typography variant="title" mb={theme.space.l}>
        Guide of the Month ✨
      </Typography>
      <Typography variant="subheadline" fontWeight="400" mb={theme.space.xxl}>
        We introduce a detailed guide every month about the latest trends on the
        web.
      </Typography>
      {posts.map((node) => {
        const frontmatter = node!.frontmatter!;
        const slug = node!.frontmatter!.slug!;
        const excerpt = node!.excerpt!;
        const date = node!.frontmatter!.date!;

        const title = frontmatter.title || slug;

        return (
          <StyledGatsbyLink to={slug} key={slug}>
            <Typography variant="headline" mb={theme.space.m}>
              {title}
            </Typography>
            <Typography
              fontFamily="Source Code Pro"
              variant="tinyText"
              marginBottom={theme.space.l}
            >
              {date}
            </Typography>
            <Typography variant="text" mb={theme.space.m}>
              {excerpt}
            </Typography>
            <Link
              display="block"
              component="span"
              marginBottom={theme.space.xxxl}
            >
              read more
            </Link>
          </StyledGatsbyLink>
        );
      })}
      <Typography variant="headline">Recent posts</Typography>
    </Layout>
  );
};

export default Guides;
