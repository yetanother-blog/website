const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = `https://yetanother.blog`,
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    title: `yetanother.blog`,
    author: `Henrik Fricke & André Rusakow`,
    description: `We would like to help you to stay up to date about the latest trends in web development`,
    siteUrl,
    social: {
      twitter: `@_yetanotherblog`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          posts: require.resolve('../src/templates/blog-post.tsx'),
        },
        gatsbyRemarkPlugins: [
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
              tracedSVG: true,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-slug`,
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: './content/guides',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: './content/assets',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `yetanother.blog`,
        start_url: `/`,
        theme_color: `#00FF00`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        omitGoogleFont: true,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-graphql-codegen`,
    {
      resolve: `gatsby-source-iubenda`,
      options: {
        documentIds: [`46807218`],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /src/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            output: '/rss.xml',
            title: 'yetanother.blog',
            //@ts-ignore
            serialize({ query: { site, allMdx } }) {
              //@ts-ignore
              return allMdx.nodes.map((node) => {
                return {
                  title: node.frontmatter.title,
                  description: node.frontmatter.description || node.excerpt,
                  date: node.frontmatter.date,
                  url: `${site.siteMetadata.siteUrl}/guides/${node.frontmatter.dateUrl}-${node.frontmatter.slug}?utm_source=rss-feed&utm_medium=rss`,
                  guid: `${site.siteMetadata.siteUrl}/guides/${node.frontmatter.dateUrl}-${node.frontmatter.slug}`,
                };
              });
            },
            query: `
              {
                allMdx(
                  filter: { fileAbsolutePath: { regex: "/.+content/guides.+/" } }
                  sort: { fields: [frontmatter___date], order: DESC }
                ) {
                  nodes {
                    excerpt
                    fileAbsolutePath
                    frontmatter {
                      title
                      date
                      description
                      dateUrl: date(formatString: "YYYY-MM-DD")
                      slug
                    }
                  }
                }
              }
            `,
          },
        ],
      },
    },
  ],
};
