import { TCustomTheme } from '@repo/tokens';

import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme extends TCustomTheme {}
}
