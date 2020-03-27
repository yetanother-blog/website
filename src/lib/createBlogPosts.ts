import path from "path";
import { GatsbyCreatePages } from "../types";

interface Post {
  frontmatter: {
    slug: string;
  };
}

export const createBlogPosts: GatsbyCreatePages = async ({
  graphql,
  boundActionCreators
}) => {
  const { createPage } = boundActionCreators;
  const blogPostTemplate = path.resolve("./src/templates/blog-post.tsx");

  const mdx: any = await graphql(`
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

  const posts = mdx.data.allMdx.nodes;

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
