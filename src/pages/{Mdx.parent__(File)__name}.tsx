import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { Layout } from '../components/layout';
import { SEO, Meta } from '../components/seo';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Typography } from '../components/Typography/Typography';
import { MDXProvider } from '@mdx-js/react';
import { mxdComponents } from '../utils/mdx-components';
import { useTheme } from 'styled-components';
import { BlogPostQuery } from '../../graphql-types';
import { BlogPostMetaData } from '../components/BlogPostMetaData/BlogPostMetaData';

const BlogPost: React.FC<PageProps<BlogPostQuery>> = (props) => {
  const theme = useTheme();

  const post = props.data.mdx!;
  const excerpt = post.excerpt!;
  const frontmatter = post.frontmatter!;
  const body = post.body!;
  const headings = post.headings;
  const description = post.frontmatter!.description;
  const thumbnail = post.frontmatter!.thumbnail!;
  const siteUrl = props.data.site!.siteMetadata!.siteUrl!;
  const path = props.data.mdx!.parent!.name;

  const meta: Meta[] = [
    {
      name: 'og:url',
      content: `${siteUrl}/${path}/`,
    },
    {
      name: 'twitter:creator',
      content: `@${frontmatter.author.twitter}`,
    },
  ];

  if (thumbnail) {
    meta.push({
      name: 'twitter:image',
      content: `${siteUrl}${thumbnail.childImageSharp!.resize!.src}`,
    });
    meta.push({
      name: 'og:image',
      content: `${siteUrl}${thumbnail.childImageSharp!.resize!.src}`,
    });
  }

  return (
    <Layout size="narrow" mainElement="article">
      <SEO
        title={frontmatter.title!}
        description={description || excerpt}
        meta={meta}
        twitterCard={thumbnail ? 'summary_large_image' : 'summary'}
      />
      <Typography variant="title" mb={theme.space.xxs}>
        {post.frontmatter!.title}
      </Typography>
      <BlogPostMetaData
        date={frontmatter.date}
        author={frontmatter.author.name}
        timeToRead={post.timeToRead}
        mb="xl"
      />
      <MDXProvider components={mxdComponents}>
        <MDXRenderer headings={headings}>{body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query BlogPost($id: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      timeToRead
      headings {
        value
        depth
      }
      parent {
        ... on File {
          name
        }
      }
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
        author {
          name
          twitter
        }
        thumbnail {
          childImageSharp {
            resize(width: 1200) {
              src
            }
          }
        }
      }
    }
  }
`;
