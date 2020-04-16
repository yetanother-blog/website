import React from 'react';
import { ThemeProvider } from 'styled-components';
import 'typeface-source-code-pro';
import 'typeface-source-sans-pro';
import '../src/utils/prismjs.css';
import { theme } from '../src/ui/theme';

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};
