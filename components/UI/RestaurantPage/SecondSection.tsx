import styled from 'styled-components';
import restaurant_img_1 from '@/public/images/restaurant/restaurant_img_1.png';
import restaurant_img_2 from '@/public/images/restaurant/restaurant_img_2.png';
import Image from 'next/image';
import Reveal from '@/components/General/Reveal';
import RevealCover, { ImageDiv } from '@/components/General/ImageReveal';

const SecondSection = () => {
  return (
    <Wrapper>
      <Inner>
        <LHS>
          <div className="container">
            <RevealCover />
            <ImageDiv>
              <Image
                src={restaurant_img_1}
                alt="restaurant_img_1"
                quality={100}
              />
            </ImageDiv>
          </div>
          <TextCtn>
            <Reveal>
              <h2>at your service</h2>
            </Reveal>
            <Reveal textDelay={0.5} slideDelay={0.5}>
              <p>
                The team of the Safe Restaurant aims to exceed all expectations
                of our guests. Our chef worked hard to develop a unique menu
                that features the best meals of the European cuisine that will
                match the tastes of the most demanding clients. Friendly and
                attentive waiters will ensure that you will enjoy your time in
                our restaurant.
              </p>
            </Reveal>
          </TextCtn>
        </LHS>
        <RHS>
          <div className="container">
            <RevealCover />
            <ImageDiv>
              <Image
                src={restaurant_img_2}
                alt="restaurant_img_2"
                quality={100}
              />
            </ImageDiv>
          </div>
        </RHS>
      </Inner>
      <hr />
    </Wrapper>
  );
};

export default SecondSection;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  hr {
    display: none;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    hr {
      display: block;
      width: 95%;
      margin: 0 auto;
      color: var(--text-color-primary, #fffcf6);
      opacity: 0.12;
    }
  }
`;

const Inner = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 0 0 100px;
  display: flex;
  gap: 2em;

  @media (min-width: 200px) and (max-width: 767px) {
    flex-direction: column-reverse;
  }
`;

const LHS = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 3em;

  .container {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: 1;
    overflow: hidden;
  }

  img {
    width: 100%;
    object-fit: cover;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    gap: 1em;
    img {
      display: none;
    }
  }
`;

const TextCtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;

  color: var(--text-color-primary, #fffcf6);
  h2 {
    font-family: var(--font-secondary);
    font-size: 2.25rem;
    font-weight: 400;
    letter-spacing: 0.0675rem;
    text-transform: capitalize;
  }

  p {
    font-family: var(--font-primary);
    font-size: 0.8125rem;
    line-height: 1.4375rem;
    opacity: 0.8;
    width: 50%;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    h2 {
      font-size: 1.875rem;
      letter-spacing: 0.05625rem;
      text-transform: capitalize;
    }

    p {
      width: 90%;
      font-size: 0.8125rem;
      line-height: 1.4375rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    h2 {
      font-size: 2.25rem;
    }

    p {
      width: 70%;
    }
  }
`;

const RHS = styled.div`
  flex: 1;
  display: flex;

  .container {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: 1;
    overflow: hidden;
  }

  img {
    width: 100%;
    object-fit: cover;
  }
`;
