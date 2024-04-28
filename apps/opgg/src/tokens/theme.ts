import { colors } from './colors';

export const opggTheme = <const>{
  colors: {
    ...colors,
  },
};

export type TOpggTheme = typeof opggTheme;
