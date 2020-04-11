import React from 'react';
import { graphql, useStaticQuery, Link, PageRendererProps } from 'gatsby';
import { Layout } from '../components/layout';
import { AllBlogPostsProps } from '../types';
import { SEO } from '../components/seo';
import { Typography } from '../components/Typography/Typography';
import { useTheme } from 'styled-components';

const Repos: React.FC<PageRendererProps> = () => {
  const theme = useTheme();
  const data = useStaticQuery<AllBlogPostsProps>(graphql`
    query allRepoBlogPosts {
      allMdx(filter: { fileAbsolutePath: { regex: "/.+content/blog/repos.+/" } }) {
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

  return (
    <Layout size="narrow">
      <SEO title="Repos 🌟" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <Typography variant="title" marginBottom={20}>
        Repo of the Week
      </Typography>
      <Typography variant="subheadline" fontWeight="400" marginBottom={theme.space.xl}>
        We introduce independent repositories on a weekly basis and provide opinionated feedback.
      </Typography>
      {posts.map((node) => {
        const frontmatter = node!.frontmatter!;
        const slug = node!.frontmatter!.slug!;
        const excerpt = node!.excerpt!;

        const title = frontmatter.title || slug;
        return (
          <div key={slug}>
            <Link to={slug}>{title}</Link>
            <p>{excerpt}</p>
          </div>
        );
      })}
    </Layout>
  );
};

export default Repos;
