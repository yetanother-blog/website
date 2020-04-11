import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Layout } from '../components/layout';
import { AllBlogPostsProps } from '../types';
import { SEO } from '../components/seo';
import { Typography } from '../components/Typography/Typography';
import { useTheme } from 'styled-components';

const Guides: React.FC = () => {
  const theme = useTheme();
  const data = useStaticQuery<AllBlogPostsProps>(graphql`
    query allGuideBlogPosts {
      allMdx(filter: { fileAbsolutePath: { regex: "/.+content/blog/guides.+/" } }) {
        nodes {
          excerpt
          frontmatter {
            title
            slug
            format
            description
          }
        }
      }
    }
  `);

  const posts = data.allMdx.nodes;

  return (
    <Layout size="narrow">
      <SEO title="Guides 📖" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <Typography variant="title" marginBottom={20}>
        Guide of the Month
      </Typography>
      <Typography variant="subheadline" fontWeight="400" mb={theme.space.xl}>
        We introduce independent repositories on a weekly basis and provide opinionated feedback.
      </Typography>
      {posts.map((node) => {
        const frontmatter = node!.frontmatter!;
        const slug = node!.frontmatter!.slug!;
        const excerpt = node!.excerpt!;
        const description = node!.frontmatter!.description;

        console.log('description', description);

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

export default Guides;
