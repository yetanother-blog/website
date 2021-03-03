import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { Typography } from '../components/Typography/Typography';
import { useTheme } from 'styled-components';
import { AllGuideBlogPostsQuery } from '../../graphql-types';
import { BlogPostLink } from '../components/BlogPostLink/BlogPostLink';
import { BlogPostMetaData } from '../components/BlogPostMetaData/BlogPostMetaData';

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
            description
            date(formatString: "MMMM DD, YYYY")
            slug
            dateUrl: date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  `);

  const posts = data.allMdx.nodes;

  return (
    <Layout size="narrow">
      <SEO
        title="Guides ✨"
        keywords={[`blog`, `web development`, `javascript`, `react`, `guide`]}
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
        const description = node!.frontmatter!.description;
        const date = node!.frontmatter!.date!;
        const dateUrl = node!.frontmatter!.dateUrl!;
        const words = node!.wordCount?.words;
        const timeToRead = node.timeToRead;
        const title = frontmatter.title!;
        const url = `${dateUrl}-${slug}`;

        return (
          <BlogPostLink
            url={url}
            title={title}
            slug={slug}
            excerpt={description || excerpt}
            blogType="guide"
            key={slug}
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

export default Guides;
