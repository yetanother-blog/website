import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { rhythm, styledScale } from '../utils/typography';
import { theme } from '../utils/theme';
import { Box } from './Box/Box';
import { Typography } from './Typography/Typography';
import { Link } from './Link/Link';
import { Link as GatsbyLink } from 'gatsby';

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
            <Link variant="primary" component={GatsbyLink} to={rootPath}>
              {title}
            </Link>
          </StyledH1>
          <nav>
            <Link variant="tertiary" component={GatsbyLink} to="/repos">
              Repos
            </Link>
            <Link variant="tertiary" component={GatsbyLink} to="/guides">
              Guide
            </Link>
          </nav>
        </header>
        <main>
          <Box role="presentation" marginBottom={theme.space.l}>
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
          </Box>
          {children}
        </main>
        <footer>
          <Link variant="quaternary" component={GatsbyLink} to="/about">
            About
          </Link>
          <Link variant="quaternary" href="#">
            Imprint
          </Link>
          <Link variant="primary" href="#">
            hallo
          </Link>
          <Link variant="secondary" component={GatsbyLink} to="/imprint">
            hallo
          </Link>
        </footer>
      </Content>
    </ThemeProvider>
  );
};
