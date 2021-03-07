import moment from 'moment';
import { CreatePagesArgs } from 'gatsby';
import { BlogPostsQuery } from '../graphql-types';
import { resolve } from 'path';

require('source-map-support').install();

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
          frontmatter {
            date
            dateUrl: date(formatString: "YYYY-MM-DD")
            slug
          }
        }
      }
    }
  `);

  mdx.data!.posts!.nodes!.forEach(post => {
    const date = moment.utc(post.frontmatter!.date!).format('YYYY-MM-DD');
    const slug = post.frontmatter!.slug!;

    createPage({
      path: `/${date}-${slug}`,
      component,
      context: {
        slug: post.frontmatter!.slug!,
      },
    });
  });
};
