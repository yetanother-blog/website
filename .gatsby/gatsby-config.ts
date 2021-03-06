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
  flags: {
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PRESERVE_WEBPACK_CACHE: true
  },
  plugins: [
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
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
        path: './content/posts',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'authors',
        path: './content/authors',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `yetanother.blog`,
        start_url: `/`,
        theme_color: `#00FF00`,
        display: `minimal-ui`,
        icon: `static/favicon.png`,
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
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        documentPaths: [
          './src/**/*.{ts,tsx}',
          './node_modules/gatsby-*/**/*.js'
        ]
      }
    },
    {
      resolve: `gatsby-source-iubenda`,
      options: {
        documentIds: [`46807218`],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [`/legal-details/`, `/privacy-policy/`],
      }
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
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            output: '/rss.xml',
            title: 'yetanother.blog',
            //@ts-ignore
            serialize({ query: { site, allMdx } }) {
              const siteUrl = site.siteMetadata.siteUrl;

              //@ts-ignore
              return allMdx.nodes.map(node => ({
                  title: node.frontmatter.title,
                  description: node.frontmatter.description || node.excerpt,
                  date: node.frontmatter.date,
                  url: `${siteUrl}/${node.parent.name}/?utm_source=rss-feed&utm_medium=rss`,
                  guid: `${siteUrl}/${node.parent.name}/`,
                  enclosure: node.frontmatter.thumbnail && {
                    url: siteUrl + node.frontmatter.thumbnail.childImageSharp.resize.src,
                  },
              }));
            },
            query: `
              {
                site {
                  siteMetadata {
                    siteUrl
                  }
                }

                allMdx(
                  sort: { fields: [frontmatter___date], order: DESC }
                ) {
                  nodes {
                    excerpt
                    fileAbsolutePath
                    parent {
                      ... on File {
                        name
                      }
                    }
                    frontmatter {
                      title
                      date
                      description
                      dateUrl: date(formatString: "YYYY-MM-DD")
                      thumbnail {
                        childImageSharp {
                          resize(width: 1200) {
                            src
                          }
                        }
                      }
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
