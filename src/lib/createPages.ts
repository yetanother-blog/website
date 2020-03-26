import path from "path";
import { GatsbyCreatePages } from "../types";

interface Post {
  frontmatter: {
    slug: string;
  };
}

export const createPages: GatsbyCreatePages = async ({
  graphql,
  boundActionCreators
}) => {
  const { createPage } = boundActionCreators;
  const blogPostTemplate = path.resolve("./src/templates/blog-post.tsx");

  const mdx = await graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  `);

  if (mdx.errors) {
    throw mdx.errors;
  }

  // Create blog posts pages.
  const posts = mdx.data.allMdx.nodes;

  // create page for each mdx file
  posts.forEach((post: Post) => {
    createPage({
      path: post.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        slug: post.frontmatter.slug
      }
    });
  });

  return null;
};
