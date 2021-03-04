import path from 'path';
import moment from 'moment';
import { CreatePagesArgs } from 'gatsby';

interface Post {
  frontmatter: {
    slug: string;
    date: string;
  };
}

export const createBlogPosts = async ({
  graphql,
  actions,
}: CreatePagesArgs) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('./src/templates/blog-post.tsx');

  const mdx: any = await graphql(`
    {
      guides: allMdx {
        nodes {
          frontmatter {
            date
            dateUrl: date(formatString: "YYYY-MM-DD")
            slug
          }
        }
      }
    }
  `);

  if (mdx.errors) {
    throw mdx.errors;
  }

  const guides = mdx.data.guides.nodes;

  guides.forEach((post: Post, index: number) => {
    const date = moment.utc(post.frontmatter.date).format('YYYY-MM-DD');
    const slug = post.frontmatter.slug;

    const path = `/${date}-${slug}`;

    createPage({
      path: path,
      component: blogPostTemplate,
      context: {
        slug: post.frontmatter.slug,
        previous: index === guides.length - 1 ? null : guides[index - 1],
        next: index === 0 ? null : guides[index + 1],
      },
    });
  });

  return null;
};
