import React from 'react';
import {
  graphql,
  useStaticQuery,
  PageRendererProps,
  Link as GatsbyLink,
} from 'gatsby';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { Typography } from '../components/Typography/Typography';
import { useTheme } from 'styled-components';
import { Link } from '../components/Link/Link';
import styled from 'styled-components';
import { AllRepoBlogPostsQuery } from '../../graphql-types';

const Repos: React.FC<PageRendererProps> = () => {
  const theme = useTheme();
  const data = useStaticQuery<AllRepoBlogPostsQuery>(graphql`
    query allRepoBlogPosts {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/.+content/repos.+/" } }
        sort: { fields: [frontmatter___date], order: DESC }
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
            dateUrl: date(formatString: "YYYY-MM-DD")
            format
            draft
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
        Yet another Repo 🌟
      </Typography>
      <Typography
        variant="subheadline"
        fontWeight="400"
        marginBottom={theme.space.xxl}
      >
        We introduce independent repositories and provide a short and on point
        opinion.
      </Typography>

      {posts.map((node) => {
        const frontmatter = node!.frontmatter!;
        const slug = node!.frontmatter!.slug!;
        const date = node!.frontmatter!.date!;
        const excerpt = node!.excerpt!;
        const dateUrl = node!.frontmatter!.dateUrl!;
        const url = `repos/${dateUrl}-${slug}`;

        const title = frontmatter.title || slug;

        if (frontmatter.draft === true) {
          return null;
        }

        return (
          <StyledGatsbyLink to={url} key={slug}>
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
