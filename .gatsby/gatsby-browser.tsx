import React from 'react';
import { ThemeContextProvider } from '../src/context/ThemeProvider';
import { MobileNavigationContextProvider } from '../src/context/MobileNavigationContext/MobileNavigationContextProvider';

import 'typeface-source-code-pro';
import 'typeface-source-sans-pro';
import 'prism-themes/themes/prism-shades-of-purple.css'

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeContextProvider>
      <MobileNavigationContextProvider>
        {element}
      </MobileNavigationContextProvider>
    </ThemeContextProvider>
  );
};
