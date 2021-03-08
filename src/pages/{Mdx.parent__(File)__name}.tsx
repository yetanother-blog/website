import React from 'react';
import { graphql, PageProps } from 'gatsby'
import { Layout } from '../components/layout';
import { SEO, Meta } from '../components/seo';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Typography } from '../components/Typography/Typography';
import { MDXProvider } from '@mdx-js/react';
import { mxdComponents } from '../utils/mdx-components';
import { useTheme } from 'styled-components';
import { BlogPostQuery } from '../../graphql-types';

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

  const meta: Meta[] = [];
  if (thumbnail) {
    meta.push({
      name: 'twitter:image',
      content: `${siteUrl}${thumbnail.childImageSharp!.resize!.src}`,
    });
  }

  return (
    <Layout size="narrow">
      <SEO title={frontmatter.title!} description={description || excerpt} meta={meta} />
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

export default BlogPost

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
      wordCount {
        words
      }
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
        thumbnail {
          childImageSharp {
            resize(width: 800) {
              src
            }
          }
        }
      }
    }
  }
`
