import { AboutUs, Banner, Header, OurFacilities, Rooms } from '@/components/UI';
import Head from 'next/head';
import styled from 'styled-components';

export default function Home() {
  return (
    <>
      <Head>
        <title>BankHotel</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Header />
        <Banner />
        <AboutUs />
        <Rooms />
        <OurFacilities />
      </Main>
    </>
  );
}

const Main = styled.main`
  min-height: 100vh;
  background-color: var(--bg-color);
`;
