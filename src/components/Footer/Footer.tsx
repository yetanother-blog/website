import React from 'react';
import { Box } from '../Box/Box';

export const Footer: React.FC = ({ children }) => {
  return (
    <Box
      as="footer"
      display="flex"
      flexDirection={['column', 'row']}
      justifyContent="flex-end"
      maxWidth="940px"
      width="100%"
      minHeight="60px"
    >
      {children}
    </Box>
  );
};
