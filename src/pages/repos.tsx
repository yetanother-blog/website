import React from 'react';
import { graphql, useStaticQuery, PageRendererProps } from 'gatsby';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { Typography } from '../components/Typography/Typography';
import { useTheme } from 'styled-components';
import { AllRepoBlogPostsQuery } from '../../graphql-types';
import { BlogPostLink } from '../components/BlogPostLink/BlogPostLink';
import { BlogPostMetaData } from '../components/BlogPostMetaData/BlogPostMetaData';
import { Teaser } from '../components/Teaser/Teaser';

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

  return (
    <Layout size="narrow">
      <SEO
        title="Repos 🌟"
        keywords={[`blog`, `javascript`, `react`, `github repositories`]}
      />
      <Typography variant="title" mb={theme.space.l}>
        Yet Another Repo 🌟
      </Typography>
      <Typography
        variant="subheadline"
        fontWeight="400"
        marginBottom={theme.space.xxl}
      >
        We introduce independent repositories and provide a short and on point
        opinion.
      </Typography>
      <Teaser>Comming Soon...</Teaser>

      {posts.map((node) => {
        const frontmatter = node!.frontmatter!;
        const slug = node!.frontmatter!.slug!;
        const date = node!.frontmatter!.date!;
        const excerpt = node!.excerpt!;
        const dateUrl = node!.frontmatter!.dateUrl!;
        const words = node!.wordCount?.words;
        const timeToRead = node.timeToRead;
        const url = `repos/${dateUrl}-${slug}`;
        const title = frontmatter.title || slug;

        if (frontmatter.draft === true) {
          return null;
        }

        return (
          <BlogPostLink
            url={url}
            title={title}
            slug={slug}
            excerpt={excerpt}
            blogType="repo"
            metaData={
              <BlogPostMetaData
                date={date}
                wordCount={words}
                timeToRead={timeToRead}
              />
            }
          />
        );
      })}
    </Layout>
  );
};

export default Repos;
