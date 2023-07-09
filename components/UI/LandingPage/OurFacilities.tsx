import Image from 'next/image';
import styled from 'styled-components';
import star from '@/public/svgs/ic-star.svg';
import img_1 from '@/public/images/our_facilities/img_1.png';
import img_2 from '@/public/images/our_facilities/img_2.png';
import img_3 from '@/public/images/our_facilities/img_3.png';
import room_btn_default from '@/public/svgs/room_btn_default.svg';
import row_img_1 from '@/public/images/our_facilities/row_img_1.png';
import arrow from '@/public/svgs/arrow.svg';
import row_img_2 from '@/public/images/our_facilities/row_img_2.png';
import label from '@/public/images/our_facilities/label.svg';
import Reveal from '@/components/General/Reveal';

const OurFacilities = () => {
  return (
    <Wrapper id="facilities">
      <Inner>
        <Header>
          <Reveal>
            <P>Art & Congress Hall</P>
          </Reveal>
          <CustomH1Ctn>
            <Reveal textDelay={0.5} slideDelay={0.5}>
              <h1>Our</h1>
            </Reveal>
            <Reveal textDelay={1} slideDelay={1}>
              <h1>Faci</h1>
            </Reveal>
            <h1>
              <Image src={star} alt="star" />
              <Reveal textDelay={1.5} slideDelay={1.5}>
                Lities
              </Reveal>
            </h1>
          </CustomH1Ctn>
          <Image src={img_1} alt="image_1" />
        </Header>
        <SectionOne>
          <ImageCtn>
            <Image src={label} alt="label" />
            <Image src={img_2} alt="image_2" />
          </ImageCtn>
          <Reveal>
            <p>
              Bank Hotel offers you a wide range of additional services and
              facilities. Visit our restaurant to try exclusive meals, book a
              conference hall to organize a business meeting, or relax in the
              art-bar.
            </p>
          </Reveal>
        </SectionOne>
        <SectionTwo>
          <LHS>
            <ButtonCtn>
              <Image src={room_btn_default} alt="btn_default" />
            </ButtonCtn>
            <RoomDetails>
              <Reveal>
                <Numbering>01</Numbering>
              </Reveal>
              <Info>
                <Reveal textDelay={0.5} slideDelay={0.5}>
                  <h2>
                    Ice <br /> Restaurant
                  </h2>
                </Reveal>
                <Reveal textDelay={1} slideDelay={1}>
                  <p>
                    The hotel’s exclusive infrastructure is complemented by the
                    unique atmosphere of the Safe Restaurant. Author’s menu,
                    extensive wine card, and live music will set you for the
                    correct mood.
                  </p>
                </Reveal>
              </Info>
            </RoomDetails>
          </LHS>
          <RHS>
            <Image src={img_3} alt="image_3" />
          </RHS>
        </SectionTwo>
        <SectionThree>
          <Row>
            <Image src={row_img_1} alt="row_img_1" />
            <h2>
              <Reveal>
                <span>02</span>
              </Reveal>
              <Reveal textDelay={0.5} slideDelay={0.5}>
                Conference Hall
              </Reveal>
            </h2>
            <Image src={arrow} alt="arrow" />
          </Row>
          <hr />
          <Row>
            <Image src={row_img_2} alt="row_img_1" />
            <h2>
              <Reveal>
                <span>03</span>
              </Reveal>
              <Reveal textDelay={0.5} slideDelay={0.5}>
                Wine bar “reserve”
              </Reveal>
            </h2>
            <Image src={arrow} alt="arrow" />
          </Row>
          <hr />
        </SectionThree>
      </Inner>
    </Wrapper>
  );
};
export default OurFacilities;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: var(--text-color-primary, #fffcf6);
  padding: 5em 0;
  border-bottom: 1px solid #313f38;
`;

const Inner = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
`;

const Header = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: var(--text-color-tertiary, #1b3b36);
  gap: 2em;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    grid-template-columns: 1fr;
    img:nth-child(3) {
      display: none;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    flex-direction: row-reverse;
    img:nth-child(3) {
      opacity: 0;
      visibility: hidden;
    }
  }
`;

const P = styled.p`
  font-size: 1.125rem;
  font-family: var(--font-primary);
  font-weight: var(--font-weight-normal);
  text-transform: uppercase;
  padding-right: 8.5em;

  @media (min-width: 200px) and (max-width: 767px) {
    margin-left: auto;
    padding-right: 0;
    text-align: right;
    width: 60%;
    font-size: 0.875rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    padding-right: 0;
    width: 60%;
    text-align: left;
  }
`;

const CustomH1Ctn = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 7.8125rem;
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-normal);
    line-height: 6.5625rem;
    text-transform: uppercase;
  }

  h1:nth-child(3) {
    display: flex;
    align-items: center;
    gap: 0.5em;

    img {
      width: 1em;
      height: 1em;
      object-fit: cover;
    }
  }

  @media (min-width: 200px) and (max-width: 767px) {
    h1 {
      font-size: 4rem;
      line-height: 3.125rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    h1 {
      font-size: 6.25rem;
      line-height: 5rem;
    }
  }
`;

const SectionOne = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2em;
  color: var(--text-color-tertiary, #1b3b36);
  margin: 5em 0;

  img {
    width: 80%;
    object-fit: contain;
  }

  p {
    font-size: 1.125rem;
    font-family: var(--font-primary);
    font-weight: var(--font-weight-normal);
    line-height: 1.75rem;
    display: flex;
    align-items: flex-end;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    grid-template-columns: 1fr;
    place-items: center;
    gap: 1em;

    p {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    img {
      margin-top: -6em;
    }

    p {
      font-size: 0.8125rem;
      line-height: 1.4375rem;
    }
  }
`;

const ImageCtn = styled.div`
  width: 100%;
  position: relative;

  img:first-child {
    position: absolute;
    right: -40px;
    z-index: 0;
  }

  img:last-child {
    position: relative;
    z-index: 1;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;

    img:last-child {
      position: static;
      width: 80%;
      margin: 0 auto;
    }
  }
`;

const SectionTwo = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4em;
  margin-top: 15em;

  @media (min-width: 200px) and (max-width: 767px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 10em;
    height: 60vh;
  }
`;

const LHS = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

const ButtonCtn = styled.div`
  flex: 1.5;

  img {
    object-fit: contain;
    margin-top: 65%;
    transform: rotate(90deg);
  }

  @media (min-width: 200px) and (max-width: 767px) {
    flex: 1;

    img {
      margin-top: 40%;
      width: 4em;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    img {
      width: 6.5625rem;
      height: 6.5625rem;
    }
  }
`;

const RoomDetails = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1em 0;
  @media (min-width: 200px) and (max-width: 767px) {
    flex: 1;
  }
`;

const Numbering = styled.h2`
  color: var(--text-color-tertiary, #1b3b36);
  font-size: 3.125rem;
  font-family: var(--font-secondary);
  font-weight: var(--font-weight-normal);
  line-height: 3.125rem;
  letter-spacing: 0.09375rem;
  text-transform: capitalize;

  @media (min-width: 200px) and (max-width: 767px) {
    font-size: 2rem;
    position: absolute;
    left: 0;
    top: 0;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 2.25rem;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1em 0;
  gap: 1em;
  color: var(--text-color-tertiary, #1b3b36);
  h2 {
    font-size: 3.125rem;
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-normal);
    line-height: 3.125rem;
    letter-spacing: 0.09375rem;
    text-transform: capitalize;
  }

  p {
    font-size: 1.125rem;
    font-family: var(--font-primary);
    font-weight: var(--font-weight-normal);
    line-height: 1.75rem;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    gap: 0.5em;
    h2 {
      font-size: 2rem;
      line-height: 2.25rem;
    }

    p {
      font-size: 0.75rem;
      line-height: 1.375rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    h2 {
      font-size: 2.25rem;
    }

    p {
      font-size: 0.8125rem;
      line-height: 1.4375rem;
    }
  }
`;

const RHS = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SectionThree = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  hr {
    width: 100%;
    color: #313f38;
    opacity: 0.24;
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4em;
  padding: 3em 0;
  color: var(--text-color-tertiary, #1b3b36);
  position: relative;

  h2 {
    flex: 2;
    font-size: 3.125rem;
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-normal);
    line-height: 3.125rem;
    letter-spacing: 0.09375rem;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    span {
      margin-right: 2em;
    }
  }

  img {
    object-fit: cover;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    flex-direction: column;
    padding: 1em 0;
    gap: 2em;

    h2 {
      font-size: 1.75rem;

      span {
        position: absolute;
        top: 20px;
        right: -60px;
      }
    }

    img:last-child {
      display: none;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    h2 {
      font-size: 2.25rem;

      span {
        margin-right: 0.5em;
      }
    }
  }
`;
