import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../utils/theme';

export const ThemeContextProvider: React.FC = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;
