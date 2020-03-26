import { graphql, PageRendererProps, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Bio } from "../components/bio";
import { Layout } from "../components/layout";
import { FadeLink } from "../components/link";
import { SEO } from "../components/seo";
import { rhythm } from "../utils/typography";

const StyledLink = styled(FadeLink)`
  box-shadow: none;
`;

const Title = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`;

type Props = PageRendererProps;

const BlogIndex = (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            slug
          }
        }
      }
    }
  `);

  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMdx.nodes;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <Bio />
      {posts.map((node: any) => {
        const frontmatter = node!.frontmatter!;
        const slug = node!.frontmatter!.slug!;
        const excerpt = node!.excerpt!;

        const title = frontmatter.title || slug;
        return (
          <div key={slug}>
            <Title>
              <StyledLink to={slug}>{title}</StyledLink>
            </Title>
            <small>{frontmatter.date}</small>
            <p
              dangerouslySetInnerHTML={{
                __html: frontmatter.description || excerpt
              }}
            />
          </div>
        );
      })}
    </Layout>
  );
};

export default BlogIndex;
