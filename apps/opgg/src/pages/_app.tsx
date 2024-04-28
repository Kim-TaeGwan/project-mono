import { ThemeProvider } from '@emotion/react';
import { theme } from '@repo/tokens';
import type { AppProps } from 'next/app';

import { opggTheme } from '@/tokens';

import '@/styles/reset.css';
import '@/styles/fonts.css';
import '@/styles/globals.css';

const customTheme = {
  ...theme,
  ...opggTheme,
};

export default function App({ Component, pageProps }: AppProps) {
  console.log('customTheme : ', customTheme);
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
