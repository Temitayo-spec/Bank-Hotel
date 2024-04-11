import styled from 'styled-components';
import restaurant_img_3 from '@/public/images/restaurant/restaurant_img_3.png';
import restaurant_img_4 from '@/public/images/restaurant/restaurant_img_4.png';
import Image from 'next/image';
import Reveal from '@/components/General/Reveal';
import RevealCover, { ImageDiv } from '@/components/General/ImageReveal';

const ThirdSection = () => {
  return (
    <Wrapper>
      <Inner>
        <Header>
          <div></div>
          <h2>
            <Reveal>
              Once you try our cuisine and service, you shall never want to
              visit another restaurant.
            </Reveal>
          </h2>
        </Header>
        <Grid>
          <GridItem>
            <div className="container">
              <RevealCover />
              <ImageDiv>
                <Image
                  src={restaurant_img_3}
                  alt="restaurant_img_3"
                  quality={100}
                />
              </ImageDiv>
            </div>
            <Reveal>
              <h3>
                All room decoration was made with ecological certified and safe
                materials.
              </h3>
            </Reveal>
          </GridItem>
          <GridItem>
            <div className="container">
              <RevealCover />
              <ImageDiv>
                <Image
                  src={restaurant_img_4}
                  alt="restaurant_img_4"
                  quality={100}
                />
              </ImageDiv>
            </div>
            <TextCtn>
              <Reveal textDelay={0.5} slideDelay={0.5}>
                <h2>
                  Spend Your Time <br /> With Us
                </h2>
              </Reveal>
              <Reveal textDelay={0.75} slideDelay={0.75}>
                <p>
                  If you are looking for an exclusive place to have a romantic
                  dinner, organize a business meeting, or spend an enjoyable
                  evening with friends, visit Safe Restaurant in Bank Hotel.
                  With our delicious meals, unique interior design, and
                  atmosphere of comfort and exquisiteness you shall never want
                  to go to a different restaurant.
                </p>
              </Reveal>
            </TextCtn>
          </GridItem>
        </Grid>
      </Inner>
    </Wrapper>
  );
};

export default ThirdSection;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Inner = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 100px 0;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10em;
  margin-bottom: 2em;

  h2 {
    color: var(--text-color-primary, #fffcf6);
    font-family: var(--font-secondary);
    font-size: 3.125rem;
    font-weight: 400;
    line-height: 3.125rem;
    letter-spacing: 0.09375rem;
    width: 90%;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    grid-template-columns: 1fr;
    h2 {
      font-size: 1.875rem;
      line-height: 1.875rem;
      letter-spacing: 0.05625rem;
      width: 80%;
      margin-left: auto;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    h2 {
      font-size: 2.5rem;
      line-height: 2.5rem;
      letter-spacing: 0.075rem;
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10em;

  @media (min-width: 200px) and (max-width: 767px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    gap: 5em;
  }
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;

  .container {
    width: 100%;
    height: auto;
    object-fit: cover;
    position: relative;
    z-index: 1;
    overflow: hidden;
  }

  img {
    width: 100%;
    object-fit: cover;
  }

  h3 {
    color: var(--text-color-secondary, #fcd043);
    font-family: var(--font-primary);
    font-size: 1.125rem;
    font-weight: 400;
    text-transform: uppercase;

    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 1rem;
    }
  }

  @media (min-width: 200px) and (max-width: 767px) {
    img {
      width: 50%;
      height: 100%;
      margin-right: auto;
    }

    &:last-child img {
      width: 80%;
    }

    h3 {
      width: 50%;
      font-size: 0.875rem;
      text-transform: uppercase;
      margin-right: auto;
    }
  }
`;

const TextCtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  margin-top: 3em;
  width: 70%;

  h2 {
    color: var(--text-color-primary, #fffcf6);
    font-family: var(--font-secondary);
    font-size: 2.25rem;
    font-weight: 400;
    letter-spacing: 0.0675rem;
    text-transform: capitalize;
  }

  p {
    color: var(--text-color-primary, #fffcf6);
    font-family: var(--font-primary);
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.75rem;
    opacity: 0.8;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    width: 70%;
    margin-left: auto;

    h2 {
      font-size: 1.875rem;
      letter-spacing: 0.05625rem;
    }

    p {
      font-size: 0.8125rem;
      line-height: 1.4375rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-left: auto;
    p {
      font-size: 0.8125rem;
      line-height: 1.4375rem;
    }
  }
`;
