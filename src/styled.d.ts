import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes: [string, string, string, string, string, string];
    colors: ColorTheme;
    breakpoints: [string, string, string, string];
    space: SpaceTheme;
    radii: RadiiTheme;
    width: SizeTheme;
  }
}

export interface ColorTheme {
  primary: string;
  secondary: string;
  grey300: string;
  grey400: string;
  grey500: string;
}

export interface RadiiTheme {
  s: number;
}

export interface SizeTheme {
  m: string;
  l: string;
  xl: string;
}

export interface SpaceTheme {
  zero: number;
  xxs: number;
  xs: number;
  s: number;
  m: number;
  l: number;
  xl: number;
  xxl: number;
  xxxl: number;
}
