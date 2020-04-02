import { Link } from 'gatsby';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { rhythm, styledScale } from '../utils/typography';
import { theme } from '../utils/theme';
import { Box } from './Box/Box';
import { Typography } from './Typography/Typography';

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

export const MyComponent = styled.div`
  color: ${(props) => props.theme.colors.primary};
`;

export const Layout: React.FC<Props> = ({ title, children }) => {
  const rootPath = `/`;

  return (
    <ThemeProvider theme={theme}>
      <Content>
        <header>
          <StyledH1>
            <Link to={rootPath}>{title}</Link>
          </StyledH1>
          <Typography variant="title" marginBottom={theme.space.l}>
            Hallo Typography
          </Typography>
          <Typography variant="headline" marginBottom={theme.space.l}>
            Hallo Typography
          </Typography>
          <Typography variant="subheadline" marginBottom={theme.space.l}>
            Hallo Typography
          </Typography>
          <Typography variant="text" marginBottom={theme.space.l}>
            Hallo Typography
          </Typography>
          <Typography variant="smallText" marginBottom={theme.space.l}>
            Hallo Typography
          </Typography>
          <Box role="presentation" marginBottom={theme.space.l}>
            lolikopter
          </Box>
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
    </ThemeProvider>
  );
};
