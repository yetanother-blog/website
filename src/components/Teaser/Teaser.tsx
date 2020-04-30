import React from 'react';
import Background from './Background.svg';
import styled, { keyframes, useTheme } from 'styled-components';
import { Box } from '../Box/Box';
import Browser from './Browser.svg';
import { Typography } from '../Typography/Typography';

const StyledBackground = styled(Background)`
  color: ${(props) => props.theme.colors.grey300};
`;

const rotate = keyframes`
  0%, 100% {
    transform: translate(40px, -50px);
  }
  50% {
    transform: translate(44px, -42px);
  }
`;

const StyledWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: ${(props) => props.theme.space.l}px;
`;

const StyledBrowser = styled(Browser)`
  position: absolute;
  transform: translate(40px, -50px);
  animation: ${rotate} 10s linear infinite;
`;

const StyledTypographyWrapper = styled.div`
  position: relative;
  display: block;
  background-color: white;
  padding: 10px;

  &:after {
    content: '';
    background-color: ${(props) => props.theme.colors.secondary};
    position: absolute;
    bottom: -6px;
    left: -6px;
    width: 100%;
    height: calc(100% - 50px);
    z-index: -1;
  }
`;

export const Teaser: React.FC = ({ children }) => {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      mb={theme.space.xl}
    >
      <StyledWrapper>
        <StyledBrowser />
        <StyledBackground />
      </StyledWrapper>
      <StyledTypographyWrapper>
        <Typography
          variant="title"
          as="h2"
          fontWeight={600}
          fontFamily="Source Code Pro"
          marginBottom="0"
          textAlign="center"
        >
          {children}
        </Typography>
      </StyledTypographyWrapper>
    </Box>
  );
};
