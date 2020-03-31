import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes: [number, number, number, number, number, number];
    colors: {
      primary: string;
      secondary: string;
      grey300: string;
      grey400: string;
      grey500: string;
    };
    breakpoints: [string, string, string, string];
    space: {
      zero: number;
      xxs: number;
      xs: number;
      s: number;
      m: number;
      l: number;
      xl: number;
      xxl: number;
      xxxl: number;
    };
    radii: {
      s: number;
    };
    width: {
      m: string;
      l: string;
      xl: string;
    };
  }
}
