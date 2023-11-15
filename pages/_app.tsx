import { GlobalStyle } from '@/utils/GlobalStyle';
// import Preloader from '@/components/General/Preloader';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ContactUs, Footer, Header } from '@/components/UI';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import Preloader from '@/components/General/Preloader';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      {loading ? (
        <>
          <motion.div
            initial="pageInitial"
            animate="pageAnimate"
            exit="pageExit"
            variants={{
              pageInitial: {
                opacity: 0,
                y: 100,
              },
              pageAnimate: {
                opacity: 1,
                y: 0,
              },
              pageExit: {
                opacity: 0,
                y: -100,
              },
            }}
          >
            <GlobalStyle />
            <Preloader />
          </motion.div>
        </>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={router.route}
            initial="pageInitial"
            animate="pageAnimate"
            exit="pageExit"
            transition={{
              type: 'tween',
              ease: 'anticipate',
              duration: 1.2,
            }}
            variants={{
              pageInitial: {
                opacity: 0,
                // clipPath: 'circle(0% at 100% 0%)',
              },
              pageAnimate: {
                opacity: 1,
                // clipPath: 'circle(143% at 100% 0%)',
              },
              pageExit: {
                clipPath: 'circle(0% at 100% 0%)',
              },
            }}
          >
            <GlobalStyle />

            <Header />
            <Component {...pageProps} />
            <ContactUs />
            <Footer />
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}
