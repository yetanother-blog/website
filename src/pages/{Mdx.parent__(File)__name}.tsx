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
  const imageLinkedin = post.frontmatter!.imageLinkedin!;
  const imageTwitter = post.frontmatter!.imageTwitter!;
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
    {
      name: 'author',
      content: frontmatter.author.name!,
    },
  ];

  if (imageLinkedin) {
    meta.push({
      property: 'og:image',
      content: `${siteUrl}${imageLinkedin.childImageSharp!.resize!.src}`,
    });
  }

  if (imageTwitter) {
    meta.push({
      name: 'twitter:image',
      content: `${siteUrl}${imageTwitter.childImageSharp!.resize!.src}`,
    });
  }

  return (
    <Layout size="narrow" mainElement="article">
      <SEO
        title={frontmatter.title!}
        description={description || excerpt}
        meta={meta}
        twitterCard={imageTwitter ? 'summary_large_image' : 'summary'}
      />
      <Typography variant="title" mb={theme.space.xxs}>
        {post.frontmatter!.title}
      </Typography>
      <BlogPostMetaData
        date={frontmatter.date}
        formattedDate={frontmatter.formattedDate}
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
        date
        formattedDate: date(formatString: "MMMM DD, YYYY")
        author {
          name
          twitter
        }
        imageLinkedin: thumbnail {
          childImageSharp {
            resize(width: 1200, height: 627, cropFocus: CENTER) {
              src
            }
          }
        }
        imageTwitter: thumbnail {
          childImageSharp {
            resize(width: 1200, height: 600, cropFocus: CENTER) {
              src
            }
          }
        }
      }
    }
  }
`;
