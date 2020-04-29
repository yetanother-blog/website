import React from 'react';
import { graphql, useStaticQuery, Link as GatsbyLink } from 'gatsby';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { Typography } from '../components/Typography/Typography';
import { useTheme } from 'styled-components';
import styled from 'styled-components';
import { Link } from '../components/Link/Link';
import { AllGuideBlogPostsQuery } from '../../graphql-types';

const Guides: React.FC = () => {
  const theme = useTheme();
  const data = useStaticQuery<AllGuideBlogPostsQuery>(graphql`
    query allGuideBlogPosts {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/.+content/guides.+/" } }
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
            format
            date(formatString: "MMMM DD, YYYY")
            slug
            dateUrl: date(formatString: "YYYY-MM-DD")
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
        title="Guides ✨"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <Typography variant="title" mb={theme.space.l}>
        Yet Another Guide ✨
      </Typography>
      <Typography variant="subheadline" fontWeight="400" mb={theme.space.xxl}>
        We introduce detailed guides about the latest trends in web development
        and beyond.
      </Typography>
      {posts.map((node) => {
        const frontmatter = node!.frontmatter!;
        const slug = node!.frontmatter!.slug!;
        const excerpt = node!.excerpt!;
        const date = node!.frontmatter!.date!;
        const dateUrl = node!.frontmatter!.dateUrl!;

        const title = frontmatter.title!;
        const url = `guides/${dateUrl}-${slug}`;

        if (frontmatter.draft === true) {
          return null;
        }

        return (
          <StyledGatsbyLink to={url} key={slug}>
            <Typography variant="headline" mb={theme.space.m}>
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
              variant="secondary"
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

export default Guides;
