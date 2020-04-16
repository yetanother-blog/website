import React, { useContext } from 'react';
import { useTheme } from 'styled-components';
import { Link } from './Link/Link';
import { Link as GatsbyLink } from 'gatsby';
import { Navigation } from './Navigation/Navigation';
import { SocialLink } from './SocialLink/SocialLink';
import { Twitter } from './SocialLink/Twitter';
import { Github } from './SocialLink/Github';
import { Box } from './Box/Box';
import { MobileNavigationContext } from '../context/MobileNavigationContext/MobileNavigationContext';

interface LayoutProps {
  size?: 'narrow';
}

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
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="100vh"
      m="0 auto"
      maxWidth="940px"
      pl={theme.space.l}
      pr={theme.space.l}
      overflow={isMobileNavigationOpen ? 'hidden' : 'visible'}
    >
      <Navigation>
        <Link
          variant="tertiary"
          component={GatsbyLink}
          onClick={handleMobileNavigation}
          to="/repos"
          partiallyActive
          marginBottom={[theme.space.l, 0]}
        >
          Repos
        </Link>
        <Link
          variant="tertiary"
          component={GatsbyLink}
          onClick={handleMobileNavigation}
          to="/guides"
          marginBottom={[theme.space.l, 0]}
        >
          Guide
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
        maxWidth={isNarrow ? '640px' : '940px'}
      >
        {children}
      </Box>
      <Box
        as="footer"
        display="flex"
        justifyContent="flex-end"
        maxWidth="940px"
        width="100%"
        pt={theme.space.xl}
        pb={theme.space.xl}
      >
        <Link
          display="flex"
          variant="quaternary"
          component={GatsbyLink}
          to="/about"
          mr={theme.space.l}
        >
          About
        </Link>
        <Link variant="quaternary" component={GatsbyLink} to="/legal-details">
          Legal Details
        </Link>
      </Box>
    </Box>
  );
};
