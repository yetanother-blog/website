import { createFilePath } from 'gatsby-source-filesystem';
import { createBlogPosts } from '../src/lib/createBlogPosts';

require('source-map-support').install();
require('ts-node').register();

//@ts-ignore
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.createPages = createBlogPosts;
