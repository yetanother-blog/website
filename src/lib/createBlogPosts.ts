import path from 'path';
import { GatsbyCreatePages } from '../types';
import moment from 'moment';

interface Post {
  frontmatter: {
    slug: string;
    date: string;
    draft: boolean;
  };
}

export const createBlogPosts: GatsbyCreatePages = async ({
  graphql,
  boundActionCreators,
}) => {
  const { createPage } = boundActionCreators;
  const blogPostTemplate = path.resolve('./src/templates/blog-post.tsx');

  const mdx: any = await graphql(`
    {
      guides: allMdx(
        filter: { fileAbsolutePath: { regex: "/.+content/guides.+/" } }
      ) {
        nodes {
          frontmatter {
            date
            slug
            draft
          }
        }
      }
      repos: allMdx(
        filter: { fileAbsolutePath: { regex: "/.+content/repos.+/" } }
      ) {
        nodes {
          frontmatter {
            date
            slug
            draft
          }
        }
      }
    }
  `);

  if (mdx.errors) {
    throw mdx.errors;
  }

  const guides = mdx.data.guides.nodes;
  const repos = mdx.data.repos.nodes;

  guides.forEach((post: Post) => {
    const date = moment.utc(post.frontmatter.date).format('YYYY-MM-DD');
    const slug = post.frontmatter.slug;

    const path = `/guides/${date}-${slug}`;

    createPage({
      path: path,
      component: blogPostTemplate,
      context: {
        slug: post.frontmatter.slug,
        draft: post.frontmatter.draft,
      },
    });
  });

  repos.forEach((post: Post) => {
    const date = moment.utc(post.frontmatter.date).format('YYYY-MM-DD');
    const slug = post.frontmatter.slug;

    const path = `/repos/${date}-${slug}`;

    createPage({
      path: path,
      component: blogPostTemplate,
      context: {
        slug: post.frontmatter.slug,
        draft: post.frontmatter.draft,
      },
    });
  });

  return null;
};
