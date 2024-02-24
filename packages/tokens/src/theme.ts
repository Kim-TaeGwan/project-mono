import { colors } from "./colors";
import { fontSizes } from "./fontSizes";
import { fontWeights } from "./fontWeights";
import { lineHeights } from "./lineHeights";

export const theme = <const>{
  colors: {
    ...colors,
  },
  lineHeights: {
    ...lineHeights,
  },
  fontSizes: {
    ...fontSizes,
  },
  fontWeight: {
    ...fontWeights,
  },
};

export type TCustomTheme = typeof theme;
