import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  fontSizes: ['12px', '14px', '16px', '20px', '24px', '32px'],
  colors: {
    primary: '#00FF00',
    secondary: '#FB00FF',
    grey500: '#1C1C1C',
    grey400: '#ACADAC',
    grey300: '#F6F6F6',
  },
  breakpoints: ['576px', '768px', '992px', '1200px'],
  space: {
    zero: 0,
    xxs: 4,
    xs: 8,
    s: 12,
    m: 16,
    l: 20,
    xl: 40,
    xxl: 60,
    xxxl: 120,
  },
  radii: {
    s: 3,
  },
  width: {
    m: '620px',
    l: '940px',
    xl: '1200px',
  },
};
