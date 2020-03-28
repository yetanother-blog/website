import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { rhythm, styledScale } from '../utils/typography';

interface Props {
  title: string;
}

const StyledH1 = styled.h1`
  ${styledScale(1.5)};
  margin-bottom: ${rhythm(1.5)};
`;

const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${`${rhythm(1.5)} ${rhythm(3 / 4)}`};
`;

export const Layout: React.FC<Props> = ({ title, children }) => {
  const rootPath = `/`;

  return (
    <Content>
      <header>
        <StyledH1>
          <Link to={rootPath}>{title}</Link>
        </StyledH1>
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
