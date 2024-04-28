import { TOpggTheme } from '@/tokens/theme';

import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme extends TOpggTheme {}
}
