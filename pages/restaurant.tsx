import PageTransition from '@/components/General/PageTransition';
import { Header, HeroSection, SecondSection, ThirdSection } from '@/components/UI';
import styled from 'styled-components';

const Restaurant = () => {
  return (
    <Wrapper>
      <Header />
      <HeroSection />
      <SecondSection />
      <ThirdSection />
    </Wrapper>
  );
};

export default PageTransition(Restaurant);

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--bg-color);
`;
