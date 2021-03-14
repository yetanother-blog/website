import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { Typography } from '../components/Typography/Typography';
import { Box } from '../components/Box/Box';
import { useTheme } from 'styled-components';
import { AllGuideBlogPostsQuery } from '../../graphql-types';
import { BlogPostLink } from '../components/BlogPostLink/BlogPostLink';
import { BlogPostMetaData } from '../components/BlogPostMetaData/BlogPostMetaData';

const BlogIndex: React.FC = () => {
  const theme = useTheme();

  const data = useStaticQuery<AllGuideBlogPostsQuery>(graphql`
    query allGuideBlogPosts {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          excerpt
          timeToRead
          parent {
            ... on File {
              name
            }
          }
          frontmatter {
            title
            description
            date
            formattedDate: date(formatString: "MMMM DD, YYYY")
            author {
              name
            }
          }
        }
      }
    }
  `);

  return (
    <Layout size="narrow">
      <SEO title="Hi 👋" />

      <Typography variant="title" mb={20}>
        Hi 👋,
        <br /> we’re Henrik & André
        <br /> both Software Developers
        <br /> based in Hamburg.
      </Typography>
      <Typography
        variant="subheadline"
        as="h2"
        fontWeight="400"
        mb={theme.space.xxl}
      >
        We would like to help you to stay up to date about the latest
        <br /> trends in web development
      </Typography>
      <Box
        display="flex"
        flexDirection={['column']}
        justifyContent="space-between"
        mb={theme.space.m}
      >
        {data.allMdx.nodes.map((node) => {
          const frontmatter = node!.frontmatter!;
          const excerpt = node!.excerpt!;
          const description = node!.frontmatter!.description;
          const date = node!.frontmatter!.date!;
          const formattedDate = node!.frontmatter!.formattedDate!;
          const timeToRead = node.timeToRead;
          const title = frontmatter.title!;
          const url = `/${node!.parent!.name}/`;

          return (
            <BlogPostLink
              url={url}
              title={title}
              slug={url}
              excerpt={description || excerpt}
              blogType="guide"
              key={url}
              metaData={
                <BlogPostMetaData
                  date={date}
                  formattedDate={formattedDate}
                  timeToRead={timeToRead}
                  author={frontmatter.author.name}
                />
              }
            />
          );
        })}
      </Box>
    </Layout>
  );
};

export default BlogIndex;
