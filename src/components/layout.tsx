import React, { useContext } from 'react';
import { useTheme, createGlobalStyle } from 'styled-components';
import { Link } from './Link/Link';
import { Link as GatsbyLink } from 'gatsby';
import { Navigation } from './Navigation/Navigation';
import { SocialLink } from './SocialLink/SocialLink';
import { Twitter } from './SocialLink/Twitter';
import { Github } from './SocialLink/Github';
import { Box } from './Box/Box';
import { MobileNavigationContext } from '../context/MobileNavigationContext/MobileNavigationContext';
import { Footer } from './Footer/Footer';

interface LayoutProps {
  size?: 'narrow';
}

const GlobalStyle = createGlobalStyle`
  ::selection{
    color: white;
    background: ${(props) => props.theme.colors.grey500}
  }

  pre[class*='language-'] {
    display: flex;
    border-radius: 4px;
  }

  @media (min-width: 992px) {
    pre[class*='language-'] {
      margin-left: -50px;
      margin-right: -50px;
    }
  }
`;

export const Layout: React.FC<LayoutProps> = ({ children, size }) => {
  const theme = useTheme();

  const { isMobileNavigationOpen, setIsMobileNavigationOpen } = useContext(
    MobileNavigationContext
  );
  const isNarrow = size === 'narrow';

  const handleMobileNavigation = () => {
    if (isMobileNavigationOpen) {
      return setIsMobileNavigationOpen(false);
    }
    return;
  };

  return (
    <>
      <GlobalStyle />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        minHeight="100vh"
        m="0 auto"
        maxWidth="940px"
        pl={theme.space.l}
        pr={theme.space.l}
        overflow={isMobileNavigationOpen ? 'hidden' : 'visible'}
        height={isMobileNavigationOpen ? '100vh' : 'auto'}
      >
        <Navigation>
          <Link
            variant="tertiary"
            component={GatsbyLink}
            onClick={handleMobileNavigation}
            to="/"
            marginBottom={[theme.space.l, 0]}
          >
            Home
          </Link>
          <SocialLink href="https://twitter.com/_yetanotherblog">
            <Twitter />
          </SocialLink>
          <SocialLink href="https://github.com/yetanother-blog">
            <Github />
          </SocialLink>
        </Navigation>
        <Box
          as="main"
          width="100%"
          flex="1 0 auto"
          maxWidth={isNarrow ? '680px' : '940px'}
          mb={theme.space.xl}
        >
          {children}
        </Box>
        <Footer>
          <Link
            variant="quaternary"
            component={GatsbyLink}
            to="/privacy-policy/"
            mr={theme.space.l}
            mb={theme.space.l}
          >
            Privacy Policy
          </Link>
          <Link
            variant="quaternary"
            component={GatsbyLink}
            to="/legal-details/"
            mr={theme.space.l}
            mb={theme.space.l}
          >
            Legal Details
          </Link>
          <Link
            variant="quaternary"
            component={GatsbyLink}
            to="https://plausible.io/yetanother.blog"
            target="_blank"
            rel="noopener noreferrer nofollow"
            mb={theme.space.l}
          >
            Stats
          </Link>
        </Footer>
      </Box>
    </>
  );
};
