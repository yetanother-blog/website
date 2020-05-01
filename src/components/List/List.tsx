import React from 'react';
import { Box } from '../Box/Box';
import { useTheme } from 'styled-components';

export const List: React.FC = ({ children }) => {
  const theme = useTheme();
  return (
    <Box as="ul" ml={theme.space.l} mb={theme.space.xl} p={0}>
      {children}
    </Box>
  );
};
