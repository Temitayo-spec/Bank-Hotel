import { GlobalStyle } from '@/utils/GlobalStyle';
// import Preloader from '@/components/General/Preloader';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ContactUs, Footer, Header } from '@/components/UI';
import Navbar from '@/components/General/Navbar';
// import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  // // a preloader can be added here
  // const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 4000);
  // }, []);
  return (
    <>
      <GlobalStyle />
      {/* 
      <Preloader loading={loading as boolean} /> */}
      <Header />
      <Component {...pageProps} />
      <ContactUs />
      <Footer />
    </>
  );
}
