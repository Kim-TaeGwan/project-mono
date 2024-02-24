import { ThemeProvider } from '@emotion/react';
import { theme } from '@repo/tokens';
import type { AppProps } from 'next/app';

import '@/styles/reset.css';
import '@/styles/fonts.css';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
