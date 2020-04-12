import React from 'react';
import 'typeface-source-code-pro';
import 'typeface-source-sans-pro';
import '../src/utils/prismjs.css';
import { ThemeContextProvider } from '../src/context/ThemeProvider';
import { MobileNavigationContextProvider } from '../src/context/MobileNavigationContext/MobileNavigationContextProvider';

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeContextProvider>
      <MobileNavigationContextProvider>
        {element}
      </MobileNavigationContextProvider>
    </ThemeContextProvider>
  );
};
