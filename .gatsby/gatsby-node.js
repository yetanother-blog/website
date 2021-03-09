exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
      type Mdx implements Node {
        frontmatter: MdxFrontmatter!
      }

      type MdxFrontmatter {
        author: AuthorsYaml! @link
      }
    `
  createTypes(typeDefs)
}