import React from 'react';
import { Typography } from '../Typography/Typography';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';

interface LogoProps {
  to: string;
}

const StyledGatsbyLink = styled(GatsbyLink)`
  display: flex;
  text-decoration: none;
  color: ${(props) => props.theme.colors.grey500};
`;

const StyledTypography = styled(Typography)`
  &:before {
    content: '>> ';
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const Logo: React.FC<LogoProps> = ({ to }) => {
  return (
    <StyledGatsbyLink to={to} role="logo">
      <StyledTypography fontWeight={600} fontFamily="Source Code Pro" marginBottom="0">
        yetanother.blog
      </StyledTypography>
    </StyledGatsbyLink>
  );
};
