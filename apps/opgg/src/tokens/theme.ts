import { borderRadius, colors, fontWeights } from '@repo/tokens';

import { opggColors } from './opggColors';

export const opggTheme = <const>{
  colors: {
    ...colors,
    ...opggColors,
  },
  fontWeights: {
    ...fontWeights,
  },
  borderRadius: {
    ...borderRadius,
  },
};

export type TOpggTheme = typeof opggTheme;
