import Image from 'next/image';
import styled from 'styled-components';
import label from '@/public/images/our_gallery/label.svg';
import center_img from '@/public/images/our_gallery/center_img.png';
import scattered_img_1 from '@/public/images/our_gallery/scattered_img_1.png';
import scattered_img_2 from '@/public/images/our_gallery/scattered_img_2.png';
import scattered_img_3 from '@/public/images/our_gallery/scattered_img_3.png';
import scattered_img_4 from '@/public/images/our_gallery/scattered_img_4.png';
import yellow_polygon from '@/public/svgs/yellow_polygon.svg';
import { ParallaxText } from '@/components/General/ParallaxText';
import Reveal from '@/components/General/Reveal';

const OurGallery = () => {
  return (
    <Wrapper>
      <Inner>
        <h2>
          <Reveal>Art & Congress Hall</Reveal>
        </h2>

        <Main>
          <Header>
            <Image src={label} alt="label" />
            <Reveal textDelay={0.5} slideDelay={0.5} width="auto">
              <h1>Our Gallery</h1>
            </Reveal>
            <p>
              <Reveal textDelay={0.5} slideDelay={0.5} width="fit-content">
                Explore our spacious rooms with the gorgeous view to the
                historical part of the city. Each room has an exclusive interior
                design decorated with modern art pieces that will make your stay
                unforgettable.
              </Reveal>
            </p>
          </Header>
          <CenterImgCtn>
            <Image src={center_img} alt="center_image" />
            <SmallText>
              <Image src={yellow_polygon} alt="yellow_polygon" />
              <Reveal>
                <p>
                  It is our pleasure to meet your most unrealistic expectations.
                </p>
              </Reveal>
            </SmallText>
          </CenterImgCtn>
          <ScatteredImgCtn>
            <Image src={scattered_img_1} alt="scattered_img_1" />
            <Image src={scattered_img_2} alt="scattered_img_2" />
            <Image src={scattered_img_3} alt="scattered_img_3" />
            <Image src={scattered_img_4} alt="scattered_img_4" />
          </ScatteredImgCtn>
        </Main>
      </Inner>
      <ParallaxTextCtn>
        <ParallaxText baseVelocity={-3}>
          Bank hotel <White>Bank__hotel© </White> Bank hotel
        </ParallaxText>
        <ParallaxText baseVelocity={3}>
          Bank hotel <White>Bank__hotel© </White> Bank hotel
        </ParallaxText>
      </ParallaxTextCtn>
    </Wrapper>
  );
};

export default OurGallery;

const Wrapper = styled.div`
  width: 100%;
`;

const Inner = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 5rem 0;
  position: relative;

  h2 {
    position: absolute;
    color: var(--text-color-primary, #fffcf6);
    font-size: var(--font-size-lg, 1.125rem);
    font-family: var(--font-primary);
    font-weight: var(--font-weight-normal);
    text-transform: uppercase;
    width: 15%;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    h2 {
      font-size: 0.875rem;
      width: 50%;
      top: 10px;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    h2 {
      font-size: 1.125rem;
      width: 20%;
    }
  }
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  position: relative;
`;

const Header = styled.div`
  h1 {
    color: var(--text-color-secondary, #fcd043);
    font-size: 7.8125rem;
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-normal);
    line-height: 6.5625rem;
    text-transform: uppercase;
    margin: 0.5em 0;
  }

  p {
    color: var(--text-color-primary, #fffcf6);
    font-size: 1.125rem;
    font-family: var(--font-primary);
    font-weight: var(--font-weight-normal);
    line-height: 1.75rem;
    opacity: 0.8;
    width: 40%;
    margin: 1em auto 4em;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    h1 {
      font-size: 3.75rem;
      line-height: 3.75rem;
    }

    p {
      font-size: 0.8125rem;
      line-height: 1.4375rem;
      width: 100%;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    h1 {
      font-size: 6.25rem;
    }

    p {
      font-size: 0.8125rem;
      line-height: 1.4375rem;
    }
  }
`;

const CenterImgCtn = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    & > img {
      position: relative;
      z-index: 7;
      width: 50%;
      margin-top: 3em;
    }
  }
`;

const ScatteredImgCtn = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  img {
    object-fit: contain;
    position: absolute;
  }

  img:nth-child(1) {
    top: 300px;
    left: -50px;
  }

  img:nth-child(2) {
    top: 300px;
    right: -50px;
  }

  img:nth-child(3) {
    bottom: 0px;
    left: -50px;
  }

  img:nth-child(4) {
    bottom: -150px;
    right: -50px;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    top: 4em;
    img:nth-child(1) {
      top: 300px;
      left: -50px;
      height: 20%;
    }

    img:nth-child(2) {
      top: 300px;
      right: 0px;
      opacity: 0.4;
      z-index: 2;
      width: 30%;
    }

    img:nth-child(3) {
      bottom: 180px;
      left: 40%;
      z-index: 4;
      height: 20%;
    }

    img:nth-child(4) {
      bottom: 140px;
      left: 0px;
      opacity: 0.4;
      width: 50%;
      z-index: 2;
    }
  }
`;

const SmallText = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  margin: 1em 0;

  img {
    width: 1.5rem;
    height: 1.5rem;
    object-fit: contain;
  }

  p {
    color: var(--text-color-primary, #fffcf6);
    font-family: var(--font-primary);
    font-size: 1.375rem;
    font-style: italic;
    font-weight: var(--font-weight-normal);
    width: 70%;
    margin-left: 0;
    text-align: left;
    opacity: 0.8;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    margin-top: 10em;

    p {
      font-size: 1rem;
      width: 80%;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    p {
      font-size: 1rem;
    }
  }
`;

const ParallaxTextCtn = styled.div`
  width: 100%;
  padding-bottom: 4em;
`;

const White = styled.span`
  color: var(--text-color-primary, #fffcf6);
  margin: 0 1em 0 0.5em;
`;
