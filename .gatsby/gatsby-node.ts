import { CreatePagesArgs } from 'gatsby';
import { BlogPostsQuery } from '../graphql-types';
import { resolve } from 'path';

exports.createPages = async ({
  graphql,
  actions,
}: CreatePagesArgs) => {
  const { createPage } = actions;
  const component = resolve('./src/templates/blog-post.tsx');

  const mdx = await graphql<BlogPostsQuery>(`
    query BlogPosts {
      posts: allMdx {
        nodes {
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
            date
            dateUrl: date(formatString: "YYYY-MM-DD")
            slug
          }
        }
      }
    }
  `);

  mdx.data!.posts!.nodes!.forEach(post => {
    const date = post.frontmatter!.dateUrl!;
    const slug = post.frontmatter!.slug!;

    createPage({
      path: `/${date}-${slug}`,
      component,
      context: {
        post,
      }
    });
  });
};
