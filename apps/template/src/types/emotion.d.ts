import customTheme from '@/styles/customTheme';

import '@emotion/react';

type GlobalTheme = typeof customTheme;
declare module '@emotion/react' {
  export interface Theme extends GlobalTheme {}
}
