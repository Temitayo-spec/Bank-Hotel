import styled from 'styled-components';
import Image from 'next/image';
import big_banner from '@/public/images/rooms/big_banner.png';
import yellow_polygon from '@/public/svgs/yellow_polygon.svg';
import Reveal from '@/components/General/Reveal';

const Banner = () => {
  return (
    <Wrapper>
      <Inner>
        <TextContent>
          <h1>
            <Reveal>Superior</Reveal>
            <Reveal textDelay={0.5} slideDelay={0.5}>
              <span>twin</span>
            </Reveal>
          </h1>
          <Flex>
            <p>
              <Reveal textDelay={1} slideDelay={1}>
                All room decoration was made with ecological certified and safe
                materials.
              </Reveal>
            </p>
            <BookRoomBtn type="button">
              <Image src={yellow_polygon} alt="yellow_polygon" />
              <span>Book Room</span>
            </BookRoomBtn>
          </Flex>
        </TextContent>
      </Inner>
    </Wrapper>
  );
};

export default Banner;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  @media (min-width: 200px) and (max-width: 767px) {
    margin-top: -95px;
    z-index: 4;
  }
`;

const Inner = styled.div`
  background: url(${big_banner.src}) no-repeat center center;
  padding: 2em 0;
  @media (min-width: 200px) and (max-width: 767px) {
    width: 95%;
    width: 100%;
    height: 29rem;
  }
`;

const TextContent = styled.div`
  width: 95%;
  margin: 0 auto;

  h1 {
    color: var(--text-color-secondary, #fcd043);
    font-family: var(--font-secondary);
    font-size: 7.8125rem;
    font-weight: var(--font-weight-normal);
    line-height: 9.375rem;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    height: 100%;
    h1 {
      font-size: 4.375rem;
      line-height: 3.75rem;
      margin-top: 80px;
    }

    p {
      display: none;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    h1 {
      font-size: 6.25rem;
      line-height: 5rem;
    }
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5em;

  p {
    color: var(--text-color-secondary, #fcd043);
    font-size: 1.125rem;
    font-family: var(--font-primary);
    font-weight: var(--font-weight-normal);
    text-transform: uppercase;
    width: 30%;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    grid-template-columns: 1fr;
    h1 {
      font-size: 3rem;
      line-height: 3.75rem;
    }

    p {
      font-size: 0.75rem;
      margin-top: 1.5em;
      width: 60%;
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

  span {
    font-size: 1.125rem;
    font-family: var(--font-primary);
    position: absolute;
    font-style: italic;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    position: absolute;
    bottom: -4em;
    right: 1em;
    width: 7rem;
    height: 7rem;
    z-index: 4;

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
