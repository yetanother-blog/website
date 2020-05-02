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
            dateUrl: date(formatString: "YYYY-MM-DD")
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
            dateUrl: date(formatString: "YYYY-MM-DD")
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

  guides.forEach((post: Post, index: number) => {
    const date = moment.utc(post.frontmatter.date).format('YYYY-MM-DD');
    const slug = post.frontmatter.slug;

    const path = `/guides/${date}-${slug}`;

    createPage({
      path: path,
      component: blogPostTemplate,
      context: {
        slug: post.frontmatter.slug,
        format: 'guides',
        draft: post.frontmatter.draft,
        previous: index === guides.length - 1 ? null : guides[index - 1],
        next: index === 0 ? null : guides[index + 1],
      },
    });
  });

  repos.forEach((post: Post, index: number) => {
    const date = moment.utc(post.frontmatter.date).format('YYYY-MM-DD');
    const slug = post.frontmatter.slug;

    const path = `/repos/${date}-${slug}`;

    createPage({
      path: path,
      component: blogPostTemplate,
      context: {
        slug: post.frontmatter.slug,
        format: 'repos',
        draft: post.frontmatter.draft,
        previous: index === 0 ? null : repos[index - 1],
        next: index === repos.length - 1 ? null : repos[index + 1],
      },
    });
  });

  return null;
};
