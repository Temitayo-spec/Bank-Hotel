import Image from 'next/image';
import styled from 'styled-components';
import label from '@/public/images/rooms/label.svg';
import twin_img1 from '@/public/images/rooms/twin_img1.png';
import twin_img2 from '@/public/images/rooms/twin_img2.png';
import yellow_polygon from '@/public/svgs/yellow_polygon.svg';

const SectionThree = () => {
  return (
    <Wrapper>
      <Inner>
        <Image src={label} alt="label" />
        <Grid>
          <GridItems>
            <Image src={twin_img1} alt="twin_img1" />
            <h2>Superior Twin</h2>
            <p>
              All rooms in Bank Hotel have a special charm achieved through a
              combination of modern functional design and original 20th century
              layout.
            </p>
          </GridItems>
          <GridItems>
            <Image src={twin_img2} alt="twin_img1" />
            <p>
              The Superior twin includes two functional zones: a living room
              with the best Italian furniture, and an isolated cozy bedroom with
              a large bed. Here, you will find space both for work and
              comfortable rest. Hotel offers supreme comfort and outstanding
              24-hour room service to make sure that the time you spend here is
              enjoyable and pleasant.
            </p>
          </GridItems>
        </Grid>
      </Inner>
      <BookRoomBtn type="button">
        <Image src={yellow_polygon} alt="yellow_polygon" />
        <span>Book Room</span>
      </BookRoomBtn>
    </Wrapper>
  );
};

export default SectionThree;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--text-color-primary);
`;

const Inner = styled.div`
  padding: 5em 0;
  width: 90%;
  margin: 0 auto;
  position: relative;

  & > img {
    position: absolute;
    top: 10%;
    left: 45%;
    transform: translate(-50%, -50%);
    object-fit: contain;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    & > img {
      width: 3.16694rem;
      height: 4.39531rem;
      top: 13%;
      left: 43%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: flex-start;
  gap: 10em;
  margin-top: 5em;
`;

const GridItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5em;
  color: var(--text-color-tertiary, #1b3b36);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  h2 {
    font-family: var(--font-secondary);
    font-size: 2.25rem;
    font-weight: 400;
    letter-spacing: 0.0675rem;
    text-transform: capitalize;
    width: 90%;
  }

  p {
    font-family: var(--font-primary);
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.75rem;
    opacity: 0.8;
    width: 85%;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    p {
      font-size: 0.8125rem;
      line-height: 1.4375rem;
    }
  }
`;

const BookRoomBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em 1em;
  background: transparent;
  border: none;
  outline: none;
  width: 10.9375rem;
  height: 10.9375rem;
  margin-left: 4em;

  span {
    font-size: 1.125rem;
    font-family: var(--font-primary);
    position: absolute;
    font-style: italic;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    bottom: 1em;
    right: 1em;
    width: 7rem;
    height: 7rem;
    img {
      width: 100%;
      height: 100%;
    }

    span {
      font-size: 0.75rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    bottom: 1em;
    width: 7.5rem;
    height: 7.5rem;
    img {
      width: 100%;
      height: 100%;
    }

    span {
      font-size: 0.875rem;
    }
  }
`;
