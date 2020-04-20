import React from 'react';
import {
  graphql,
  useStaticQuery,
  PageRendererProps,
  Link as GatsbyLink,
} from 'gatsby';
import { Layout } from '../components/layout';
import { AllBlogPostsProps } from '../types';
import { SEO } from '../components/seo';
import { Typography } from '../components/Typography/Typography';
import { useTheme } from 'styled-components';
import { Link } from '../components/Link/Link';
import styled from 'styled-components';

const Repos: React.FC<PageRendererProps> = () => {
  const theme = useTheme();
  const data = useStaticQuery<AllBlogPostsProps>(graphql`
    query allRepoBlogPosts {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/.+content/blog/repos.+/" } }
      ) {
        nodes {
          excerpt
          timeToRead
          wordCount {
            words
          }
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
            format
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
        title="Repos 🌟"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <Typography variant="title" mb={theme.space.l}>
        Repo of the Week 🌟
      </Typography>
      <Typography
        variant="subheadline"
        fontWeight="400"
        marginBottom={theme.space.xxl}
      >
        We introduce independent repositories on a weekly basis and provide
        opinionated feedback.
      </Typography>

      {posts.map((node) => {
        const frontmatter = node!.frontmatter!;
        const slug = node!.frontmatter!.slug!;
        const date = node!.frontmatter!.date!;
        const excerpt = node!.excerpt!;

        const title = frontmatter.title || slug;
        return (
          <StyledGatsbyLink to={slug} key={slug}>
            <Typography variant="headline" mb={theme.space.xs}>
              {title}
            </Typography>
            <Typography
              fontFamily="Source Code Pro"
              variant="tinyText"
              marginBottom={theme.space.l}
            >
              {date} • {node.timeToRead}min to read • {node.wordCount?.words}{' '}
              words
            </Typography>
            <Typography variant="text" mb={theme.space.m}>
              {excerpt}
            </Typography>
            <Link
              display="block"
              component="span"
              marginBottom={theme.space.xxl}
            >
              read more
            </Link>
          </StyledGatsbyLink>
        );
      })}
    </Layout>
  );
};

export default Repos;
