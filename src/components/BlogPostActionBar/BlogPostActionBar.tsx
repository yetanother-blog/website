import React from 'react';
import { Box } from '../Box/Box';
import styled, { useTheme } from 'styled-components';

const StyledBox = styled(Box)`
  border-top: 0px solid ${(props) => props.theme.colors.grey300};
`;

export const BlogPostActionBar: React.FC = ({ children }) => {
  const theme = useTheme();
  return (
    <StyledBox
      display="flex"
      alignItems="center"
      pt={theme.space.xl}
      pb={theme.space.l}
      mb={theme.space.l}
    >
      <span>{children}</span>
    </StyledBox>
  );
};
