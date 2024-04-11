import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ContactUs, Footer } from '@/components/UI';
import ReactLenis from '@studio-freight/react-lenis';
import { GlobalStyle } from '@/utils/GlobalStyle';
import Preloader from '@/components/General/Preloader';
import { AnimatePresence, motion } from 'framer-motion';
// import StyledComponentsRegistry from '@/libs/registry';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    // <StyledComponentsRegistry>
    <ReactLenis
      root
      easing={(t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))}
    >
      <GlobalStyle />
      <Preloader />
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <ContactUs />
      <Footer />
    </ReactLenis>
    // </StyledComponentsRegistry>
  );
}
