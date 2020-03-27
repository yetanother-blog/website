import { graphql, PageRendererProps } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { SitePageContext } from "../graphql-types";
import { rhythm, styledScale } from "../utils/typography";
import { MDXRenderer } from "gatsby-plugin-mdx";

interface Props extends PageRendererProps {
  pageContext: SitePageContext;
  data: any;
}

const Date = styled.p`
  display: block;
  ${styledScale(-1 / 5)};
  margin-bottom: ${rhythm(1)};
  margin-top: ${rhythm(-1)};
`;

const BlogPostTemplate: React.FC<Props> = props => {
  const data = props.data!;
  const post = data.mdx!;
  const excerpt = post.excerpt!;
  const frontmatter = post.frontmatter!;
  const body = post.body!;
  const siteTitle = data.site!.siteMetadata!.title!;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={frontmatter.title!}
        description={frontmatter.description || excerpt}
      />
      <h1>{post.frontmatter!.title}</h1>
      <Date>{frontmatter.date}</Date>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
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
