import { PageRendererProps, Link } from "gatsby";
import React, { ReactNode } from "react";
import styled from "styled-components";
import { rhythm, styledScale } from "../utils/typography";

interface Props extends PageRendererProps {
  title: string;
  children: ReactNode;
}

const StyledH1 = styled.h1`
  ${styledScale(1.5)};
  margin-bottom: ${rhythm(1.5)};
`;

const StyledH3 = styled.h3`
  color: black;
`;

const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${`${rhythm(1.5)} ${rhythm(3 / 4)}`};
`;

export const Layout = (props: Props) => {
  const { location, title, children } = props;
  const rootPath = `/`;

  const HeaderTitle = location.pathname === rootPath ? StyledH1 : StyledH3;

  return (
    <Content>
      <header>
        <HeaderTitle>
          <Link to={`/`}>{title}</Link>
        </HeaderTitle>
        <nav>
          <Link to="/repos">Repos</Link>
          <Link to="/guides">Guide</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <Link to="/about">About</Link>
        <Link to="/imprint">Imprint</Link>
      </footer>
    </Content>
  );
};
