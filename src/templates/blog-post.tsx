import React from 'react';
import { PageProps } from 'gatsby';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { BlogPostsQuery } from '../../graphql-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Typography } from '../components/Typography/Typography';
import { MDXProvider } from '@mdx-js/react';
import { mxdComponents } from './mdx-components';
import { useTheme } from 'styled-components';

type Props = PageProps<null, {
  post: BlogPostsQuery["posts"]["nodes"][0]
}>;

const BlogPostTemplate: React.FC<Props> = (props) => {
  const theme = useTheme();
  const post = props.pageContext.post;
  const excerpt = post.excerpt!;
  const frontmatter = post.frontmatter!;
  const body = post.body!;
  const headings = post.headings;
  const description = post.frontmatter!.description;

  return (
    <Layout size="narrow">
      <SEO title={frontmatter.title!} description={description || excerpt} />
      <Typography variant="title">{post.frontmatter!.title}</Typography>
      <Typography
        variant="tinyText"
        fontFamily="Source Code Pro"
        fontWeight="600"
        mb={theme.space.xl}
      >
        {frontmatter.date} • {post.timeToRead}min to read •{' '}
        {post.wordCount?.words} words
      </Typography>
      <MDXProvider components={mxdComponents}>
        <MDXRenderer headings={headings}>{body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  );
};

export default BlogPostTemplate;