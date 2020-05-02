import { graphql, PageRendererProps } from 'gatsby';
import React from 'react';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { SitePageContext, BlogPostBySlugQuery } from '../../graphql-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Typography } from '../components/Typography/Typography';
import { MDXProvider } from '@mdx-js/react';
import { mxdComponents } from './mdx-components';
import { useTheme } from 'styled-components';
// import { Link } from '../components/Link/Link';
// import { BlogPostActionBar } from '../components/BlogPostActionBar/BlogPostActionBar';

interface Props extends PageRendererProps {
  pageContext: SitePageContext;
  data: BlogPostBySlugQuery;
}

const BlogPostTemplate: React.FC<Props> = (props) => {
  const theme = useTheme();
  const data = props.data!;
  const post = data.mdx!;
  const excerpt = post.excerpt!;
  const frontmatter = post.frontmatter!;
  const body = post.body!;
  const headings = post.headings;
  // const format = props.pageContext.format;
  const description = post.frontmatter!.description;

  // const { previous, next } = props.pageContext;
  // const nextUrl = `${format}/${next?.frontmatter?.dateUrl}-${next?.frontmatter?.slug}`;
  // const previousUrl = `${format}/${previous?.frontmatter?.dateUrl}-${previous?.frontmatter?.slug}`;

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
      {/* <BlogPostActionBar>
        {previous && (
          <Link
            variant="tertiary"
            as={GatsbyLink}
            to={previousUrl}
            mr={theme.space.l}
          >
            ← previous
          </Link>
        )}

        {next && (
          <Link variant="tertiary" as={GatsbyLink} to={nextUrl}>
            next →
          </Link>
        )}
      </BlogPostActionBar> */}
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      timeToRead
      headings {
        value
        depth
      }
      wordCount {
        words
      }
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
        slug
        format
      }
    }
  }
`;
