import { HeroSection, SecondSection, ThirdSection } from '@/components/UI';
import styled from 'styled-components';

const restaurant = () => {
  return (
    <Wrapper>
      <HeroSection />
      <SecondSection />
      <ThirdSection />
    </Wrapper>
  );
};

export default restaurant;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--bg-color);
`;
