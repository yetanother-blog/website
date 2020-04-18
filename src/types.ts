import { MdxConnection, SiteSiteMetadata } from '../../graphql-types';
import { StyledComponentProps } from 'styled-components';
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

// Dear reader please feel free to improve this... 🕵️‍♂️
export type StyledComponentPropsWithAs<
  C extends keyof JSX.IntrinsicElements | React.ElementType,
  T extends object,
  O extends object,
  A extends keyof any
> = StyledComponentProps<C, T, O, A> & { as?: C; forwardedAs?: C };
