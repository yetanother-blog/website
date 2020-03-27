import { MdxConnection, SiteSiteMetadata } from "./graphql-types";
interface PageInput {
  path: string;
  component: any;
  layout?: string;
  context?: any;
}

interface BoundActionCreators {
  createPage: (page: PageInput) => void;
  deletePage: (page: PageInput) => void;
  createRedirect: (opts: {
    fromPath: string;
    isPermanent?: boolean;
    redirectInBrowser?: boolean;
    toPath: string;
  }) => void;
}

export type GatsbyCreatePages = (fns: {
  graphql: any;
  boundActionCreators: BoundActionCreators;
}) => void;

export interface AllBlogPostsProps {
  allMdx: MdxConnection;
  site: {
    siteMetadata: SiteSiteMetadata;
  };
}
