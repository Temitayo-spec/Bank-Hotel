import InitialCover from '@/components/General/Preloader';
import {
  AboutUs,
  Banner,
  BestApartment,
  Header,
  OurFacilities,
  OurGallery,
  Rooms,
} from '@/components/UI';
import Head from 'next/head';
import styled from 'styled-components';

export default function Home() {
  return (
    <>
      <Head>
        <title>BankHotel</title>
        <meta
          name="description"
          content="The luxurious hotel in the most beautiful European city with an exclusive restaurant, conference-hall, and art-bar."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <InitialCover />
        <Header />
        <Banner />
        <AboutUs />
        <Rooms />
        <OurFacilities />
        <BestApartment />
        <OurGallery />
      </Main>
    </>
  );
}

const Main = styled.main`
  min-height: 100vh;
  background-color: var(--bg-color);
`;
