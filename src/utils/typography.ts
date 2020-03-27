import { CSSObject } from "styled-components";
import Typography from "typography";

const typography = new Typography({
  googleFonts: [
    {
      name: "Source Sans Pro",
      styles: ["400", "600"]
    },
    {
      name: "Source Code Pro",
      styles: ["600", "700"]
    }
  ],
  baseFontSize: "20px",
  baseLineHeight: 1.85,
  bodyFontFamily: ["Source Sans Pro", "sans-serif"],
  boldWeight: "600",
  overrideStyles: ({ adjustFontSizeTo }, options, styles) => ({
    a: {
      fontFamily: `"Source Code Pro", "sans-serif"`
    }
  })
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
