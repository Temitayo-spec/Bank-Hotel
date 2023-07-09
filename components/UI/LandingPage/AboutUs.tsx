import styled from 'styled-components';
import Image from 'next/image';
import about_us_img_1 from '@/public/images/about_us_img_1.png';
import about_us_img_2 from '@/public/images/about_us_img_2.png';
import about_us_img_3 from '@/public/images/about_us_img_3.png';
import about_us_label from '@/public/images/about_us_label.png';
import about_us_lines from '@/public/images/about_us_lines.png';
import Reveal from '@/components/General/Reveal';

const AboutUs = () => {
  return (
    <Wrapper id="about">
      <Inner>
        <LHS>
          <Image src={about_us_img_1} alt="about_us_img_1" />
        </LHS>
        <Middle>
          <TitleCtn>
            <Reveal overflow="visible">
              <h1>ABOUT</h1>
              <h1>US</h1>
            </Reveal>
          </TitleCtn>
          <SubtitleCtn>
            <Reveal textDelay={0.5} slideDelay={0.5}>
              <h3>High Quality</h3>
            </Reveal>
            <Reveal textDelay={1} slideDelay={1}>
              <p>
                The five-star Bank Hotel was reopened to visitors in 2016. The
                building was renovated and modernized to meet the expectations
                of the most demanding guests. We offer luxurious rooms, numerous
                facilities, and exceptional service.
              </p>
            </Reveal>
          </SubtitleCtn>
        </Middle>
        <RHS>
          <MainImgCtn>
            <Image src={about_us_label} alt="about_us_img_2" />
            <Image src={about_us_img_2} alt="about_us_img_2" />
          </MainImgCtn>
          <Image src={about_us_img_3} alt="about_us_img_3" />
        </RHS>
      </Inner>
    </Wrapper>
  );
};

export default AboutUs;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 1em 0 5em;
  background: url(${about_us_lines.src}) no-repeat;

  @media (min-width: 200px) and (max-width: 767px) {
    padding-bottom: 0;
    overflow: hidden;
  }
`;

const Inner = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  gap: 4em;
  margin: 0 auto;
  padding: 2em 0;

  @media (min-width: 200px) and (max-width: 767px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 1em;
    padding-bottom: 0;
  }
`;

const LHS = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    img {
    }
  }
`;

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3em;

  @media (min-width: 200px) and (max-width: 767px) {
    gap: 1em;
  }
`;

const TitleCtn = styled.div`
  h1 {
    color: var(--text-color-secondary, #fcd043);
    font-size: 7.8125rem;
    font-family: var(--font-secondary);
    font-weight: 400;
    line-height: 6.5625rem;
    text-transform: uppercase;
    &:first-child {
      margin-left: -250px;
    }

    &:last-child {
      color: var(--text-color-primary, #fffcf6);
    }
  }

  @media (min-width: 200px) and (max-width: 767px) {
    h1 {
      font-size: 3.75rem;
      line-height: normal;
      &:first-child {
        margin-left: 0;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    h1 {
      font-size: 6rem;
    }
  }
`;

const SubtitleCtn = styled.div`
  color: var(--text-color-primary, #fffcf6);
  h3 {
    font-size: 2.25rem;
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-normal);
    letter-spacing: 0.0675rem;
    text-transform: capitalize;
    margin-bottom: 0.5em;
  }

  p {
    line-height: 1.75rem;
    font-size: var(--font-size-lg);
    font-family: var(--font-primary);
    font-weight: var(--font-weight-normal);
    opacity: 0.64;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    h3 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.8125rem;
    }
  }
`;

const RHS = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2em;
  align-items: center;
  padding: 2em 0;

  img:last-child {
    width: 60%;
    height: 60%;
    object-fit: contain;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    display: none;
  }
`;

const MainImgCtn = styled.div`
  position: relative;

  img:nth-child(1) {
    object-fit: contain;
    position: absolute;
    top: -50px;
    left: -60px;
    animation: spin 6s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(-360deg);
      }
    }
  }

  img:nth-child(2) {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    img:nth-child(1) {
      width: 60%;
    }
  }
`;
