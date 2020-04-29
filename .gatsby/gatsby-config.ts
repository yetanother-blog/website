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
    description: `A starter blog demonstrating what Gatsby can do.`,
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
            },
          },
          `gatsby-remark-prismjs`,
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
        path: './content/repos',
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
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }

            allSitePage(filter: { context: { draft: { ne: true }}}) {
              nodes {
                path
              }
            }
          }`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /src\/.*\.svg/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => process.env.NETLIFY_ENV,
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
  ],
};
