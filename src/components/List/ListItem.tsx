import React from 'react';
import { Box } from '../Box/Box';

export const ListItem: React.FC = ({ children }) => {
  return (
    <Box as="li" mb={0}>
      {children}
    </Box>
  );
};
