[![Netlify Status](https://api.netlify.com/api/v1/badges/83f6cc34-3f27-414e-ba85-19b756e35e37/deploy-status)](https://app.netlify.com/sites/yetanotherblog/deploys)

# Yet Another Blog

Yet another Gatsby Blog build with **Typescript**, **StyledComponents** and **MDX**

## Features

- [Typescript](http://www.typescriptlang.org/)
- [Styled Components](https://www.styled-components.com/)
- [Graphql Codegen](https://github.com/dotansimha/graphql-code-generator)
- [MDX](https://www.gatsbyjs.org/docs/mdx/writing-pages/)
- [Prism](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/)

## Getting Started

```
yarn
```

**Local Development**

```
yarn develop
```

The Blog is available on port `:8000`:

```
http://localhost:8000/
```

GraphQL Schema

```
http://localhost:8000/___graphql
```

**GraphQL Code Generator**

Currently, the type graphql type definition file has everything as nullable, so a lot of nested non-null assertions are used when accessing data from queries. To generate the types run:

```
yarn gql-codegen
```

together with:

```
yarn develop
```

**Build for Production**

```
yarn build
```

**Testing**

```
yarn test
```

## Blog Structure and Convention

The structure for the blog posts enables to create posts for several formats at scale. For our two formats we have seperate folders:

```
📦website
 ┣ 📂content
 ┃ ┃ 📂assets
 ┃ ┗ 📂blog
 ┃   ┃ 📂guides
 ┃   ┗ 📂repos
 ┗ 📂...
```

**Blog Post Structure**

We’re going to structure our posts in years. In each one of those we’re going to have another folder relating to the post with the (correct) date format for the beginning of the file followed by the title of the post.

```
📂guides
 ┣ 📂content
 ┃ ┃ 📂assets
 ┃ ┗ 📂blog
 ┃   ┗ 📂guides
 ┃      ┗ 📂2020
 ┃        ┗ 📂2020-03-25-hello-world
 ┃           ┗ 📜index.mdx
 ┗ 📂...
```

**Frontmatter**

In order to create content, each `index.mdx` file should have `frontmatter`. Frontmatter is a way to assign properties to the contents, in this case, a title, slug, format, published date and a published flag (true or false).

```
---
title: Hello World
date: "2020-05-25T23:36:03.284Z"
slug: "/hello-world"
format: "guide"
desription: "some description"
pubslished: true
---

# Hello World

```

## Gatsby Plugin Overview

- [gatsby-plugin-mdx](https://www.gatsbyjs.org/packages/gatsby-plugin-mdx/?=mdx)

- [gatsby-remark-smartypants](https://www.gatsbyjs.org/packages/gatsby-remark-smartypants/)

- [gatsby-remark-images](https://www.gatsbyjs.org/packages/gatsby-remark-images/)

- [gatsby-remark-prismjs](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/)

- [gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/)

- [gatsby-transformer-sharp](https://www.gatsbyjs.org/packages/gatsby-transformer-sharp/)

- [gatsby-plugin-sharp](https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/)

- [gatsby-plugin-google-analytics](https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/)

- [gatsby-plugin-manifest](https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/)

- [gatsby-plugin-offline](https://www.gatsbyjs.org/packages/gatsby-plugin-offline/)

- [gatsby-plugin-react-helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/)

- [gatsby-plugin-typography](https://www.gatsbyjs.org/packages/gatsby-plugin-typography/)

- [gatsby-plugin-typescript](https://www.gatsbyjs.org/packages/gatsby-plugin-typescript/)

- [gatsby-plugin-styled-components](https://www.gatsbyjs.org/packages/gatsby-plugin-styled-components/)
