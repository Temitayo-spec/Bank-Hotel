import styled from 'styled-components';
import Image from 'next/image';
import big_banner from '@/public/images/rooms/big_banner.png';
import yellow_polygon from '@/public/svgs/yellow_polygon.svg';

const Banner = () => {
  return (
    <Wrapper>
      <Inner>
        <Image src={big_banner} alt="big_banner" />
        <TextContent>
          <h1>
            Superior <span>twin</span>
          </h1>
          <Flex>
            <p>
              All room decoration was made with ecological certified and safe
              materials.
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
`;

const Inner = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TextContent = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translate(-50%);
  width: 95%;
  margin: 1em auto;

  h1 {
    color: var(--text-color-secondary, #fcd043);
    font-family: var(--font-secondary);
    font-size: 7.8125rem;
    font-weight: var(--font-weight-normal);
    line-height: 9.375rem;
    display: flex;
    flex-direction: column;
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
    img {
      width: 70%;
    }

    span {
      font-size: 1rem;
    }
  }
`;
