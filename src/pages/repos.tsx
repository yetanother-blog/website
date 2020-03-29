import React from 'react';
import { graphql, useStaticQuery, Link, PageRendererProps } from 'gatsby';
import { Layout } from '../components/layout';
import { AllBlogPostsProps } from '../types';

const Repos: React.FC<PageRendererProps> = ({ location }) => {
  const data = useStaticQuery<AllBlogPostsProps>(graphql`
    query allRepoBlogPosts {
      site {
        siteMetadata {
          title
        }
      }
      allMdx(filter: { frontmatter: { format: { eq: "repo" } } }) {
        nodes {
          excerpt
          frontmatter {
            title
            slug
            format
          }
        }
      }
    }
  `);

  const posts = data.allMdx.nodes;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle!}>
      {posts.map((node) => {
        const frontmatter = node!.frontmatter!;
        const slug = node!.frontmatter!.slug!;
        const excerpt = node!.excerpt!;

        const title = frontmatter.title || slug;
        return (
          <div key={slug}>
            <Link to={slug}>{title}</Link>
            <small>{frontmatter.date}</small>
            <p>{excerpt}</p>
          </div>
        );
      })}
    </Layout>
  );
};

export default Repos;
