import React, { useContext } from 'react';
import styled, { useTheme } from 'styled-components';
import {
  size,
  WidthProps,
  HeightProps,
  layout,
  LayoutProps,
  flexbox,
  FlexboxProps,
  height,
  display,
  padding,
  margin,
  PaddingProps,
  MarginBottomProps,
} from 'styled-system';
import { Logo } from '../Logo/Logo';
import { MobileNavigationContext } from '../../context/MobileNavigationContext/MobileNavigationContext';

interface HamburgerProps {
  isActive: boolean;
}

const Hamburger = styled.div<HamburgerProps>`
  position: relative;
  width: 24px;
  ${flexbox}

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    height: 3px;
    width: 24px;
    background-color: ${(props) => props.theme.colors.grey500};
    transform-origin: center center;
    transition: transform ease-in-out 120ms;
  }

  &:after {
    top: ${(props) => (props.isActive ? 0 : '4px')};
    transform: rotate(${(props) => (props.isActive ? '-45deg' : '0deg')});
  }
  &:before {
    top: ${(props) => (props.isActive ? 0 : '-4px')};
    transform: rotate(${(props) => (props.isActive ? '45deg' : '0deg')});
  }
`;

const StyledMobileNavigationButton = styled.button<LayoutProps & FlexboxProps>`
  ${layout}
  ${flexbox}
  padding: 0;
  background-color: transparent;
  outline: none;
  border: none;
  z-index: 100;
  position: absolute;
  top: 10px;
  right: 15px;
`;

const StyledNav = styled.nav<
  WidthProps &
    HeightProps &
    LayoutProps &
    FlexboxProps &
    PaddingProps &
    MarginBottomProps
>`
  ${layout}
  ${height}
  ${display}
  ${flexbox}
  ${size}
  ${padding}
  ${margin}
`;

const StyledMobileWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 10;
  display: flex;
  flex-direction: column;
  padding: 60px 30px;
  align-items: center;
  justify-content: center;

  > * {
    font-size: 28px;
    margin-bottom: 20px;
    opacity: 0;
    animation: fadeIn 0.9s 1;
    animation-fill-mode: forwards;

    &:nth-child(4n + 1) {
      animation-delay: 150ms;
    }

    &:nth-child(4n + 2) {
      animation-delay: 300ms;
    }

    &:nth-child(4n + 3) {
      animation-delay: 450ms;
    }

    &:nth-child(4n + 4) {
      animation-delay: 600ms;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const StyledDesktopWrapper = styled.div<LayoutProps>`
  ${layout}
  align-items: center;

  > * {
    margin-right: ${(props) => props.theme.space.l}px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const Navigation: React.FC = ({ children }) => {
  const { isMobileNavigationOpen, setIsMobileNavigationOpen } = useContext(
    MobileNavigationContext
  );
  const theme = useTheme();

  return (
    <StyledNav
      display="flex"
      pt={theme.space.l}
      pb={theme.space.l}
      alignItems="center"
      justifyContent="space-between"
      height={[64, 80]}
      mb={[theme.space.xxl, theme.space.xxxl]}
      width="100%"
    >
      <Logo to="/" />
      {isMobileNavigationOpen && (
        <StyledMobileWrapper>{children}</StyledMobileWrapper>
      )}
      <StyledDesktopWrapper display={['none', 'flex']}>
        {children}
      </StyledDesktopWrapper>
      <StyledMobileNavigationButton
        display={['flex', 'none']}
        height="48px"
        width="48px"
        justifyContent="center"
        alignItems="center"
        aria-label="hamburger menu"
        onClick={() => setIsMobileNavigationOpen(!isMobileNavigationOpen)}
      >
        <Hamburger isActive={isMobileNavigationOpen} />
      </StyledMobileNavigationButton>
    </StyledNav>
  );
};
