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
        <div>모노레포 템플릿입니다.</div>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
