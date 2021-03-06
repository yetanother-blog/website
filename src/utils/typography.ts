import { CSSObject } from 'styled-components';
import Typography from 'typography';
import { theme } from './theme';

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.75,
  headerColor: theme.colors.grey500,
  bodyColor: theme.colors.grey500,
  bodyFontFamily: ['Source Sans Pro', 'sans-serif'],
  boldWeight: '600',
  headerFontFamily: ['Source Sans Pro', 'sans-serif'],
  overrideStyles: ({ adjustFontSizeTo }, options, styles) => ({
    a: {
      fontFamily: `"Source Code Pro", "sans-serif"`,
    },
  }),
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;

export const rhythm = typography.rhythm;
export const scale = typography.scale;

type StyledScale = (values: number) => CSSObject;
export const styledScale = scale as StyledScale;
