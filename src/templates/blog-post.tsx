import { graphql, PageRendererProps } from 'gatsby';
import React from 'react';
import { Layout } from '../ui/Layout/Layout';
import { SEO } from '../containers/SEO/SEO';
import { SitePageContext } from '../../graphql-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Typography } from '../ui/Typography/Typography';

interface Props extends PageRendererProps {
  pageContext: SitePageContext;
  data: any;
}

const BlogPostTemplate: React.FC<Props> = (props) => {
  const data = props.data!;
  const post = data.mdx!;
  const excerpt = post.excerpt!;
  const frontmatter = post.frontmatter!;
  const body = post.body!;

  return (
    <Layout size="narrow">
      <SEO
        title={frontmatter.title!}
        description={frontmatter.description || excerpt}
      />
      <Typography variant="title">{post.frontmatter!.title}</Typography>
      <Typography
        variant="tinyText"
        fontFamily="Source Code Pro"
        fontWeight="600"
      >
        {frontmatter.date}
      </Typography>
      <MDXRenderer>{body}</MDXRenderer>
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
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
