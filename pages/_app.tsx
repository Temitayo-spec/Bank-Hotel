import { GlobalStyle } from '@/utils/GlobalStyle';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ContactUs, Footer } from '@/components/UI';
import StyledComponentsRegistry from '@/libs/registry';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <StyledComponentsRegistry>
      <GlobalStyle />
      <Component {...pageProps} />
      <ContactUs />
      <Footer />
    </StyledComponentsRegistry>
  );
}
