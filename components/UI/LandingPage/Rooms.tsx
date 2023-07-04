import styled from 'styled-components';
import room_left_small from '@/public/images/room_left_small.png';
import room_right_big from '@/public/images/room_right_big.png';
import room_btn_default from '@/public/svgs/room_btn_default.svg';
import star from '@/public/svgs/ic-star.svg';
import yellow_polygon from '@/public/svgs/yellow_polygon.svg';
import Image from 'next/image';

const Rooms = () => {
  return (
    <Wrapper>
      <Inner>
        <Header>
          <h1>Rooms & Apartments</h1>
          <p>
            All room decoration was made with ecological certified and safe
            materials.
          </p>
        </Header>
        <Main>
          <LHS>
            <Image src={room_left_small} alt="room_left_small" />
            <Image src={room_btn_default} alt="room_btn_default" />
          </LHS>
          <Middle>
            <Year>
              <Image src={star} alt="star" />
              <span>Since 1973</span>
            </Year>
            <MidTextCtn>
              <h2>Superior Twin</h2>
              <p>
                The Superior twin is perfect for those who plan to stay long.
                The spacious and bright room is equipped with deluxe Italian
                furniture and has a beautiful view to the historical part of the
                city. Stylish interior design and comfortable beds will make
                your stay cozy and pleasant.
              </p>
              <RoomOf>
                <span>01</span> / <span>04</span>
              </RoomOf>
            </MidTextCtn>
          </Middle>
          <RHS>
            <Image src={room_right_big} alt="room_right_big" />
            <BookRoomBtn type="button">
              <Image src={yellow_polygon} alt="yellow_polygon" />
              <span>Book Room</span>
            </BookRoomBtn>
          </RHS>
        </Main>
      </Inner>
    </Wrapper>
  );
};

export default Rooms;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: var(--text-color-primary, #fffcf6);
  padding: 10em 0;
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
  grid-template-columns: 2.5fr 1fr;
  color: var(--text-color-tertiary, #1b3b36);
  h1 {
    font-size: 7.8125rem;
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-normal);
    line-height: 6.5625rem;
    text-transform: uppercase;
  }

  p {
    font-size: 1.125rem;
    font-family: var(--font-primary);
    font-weight: var(--font-weight-normal);
    text-transform: uppercase;
  }
`;

const Year = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--text-color-tertiary, #1b3b36);
  border-radius: 99px;
  gap: 1.5em;
  padding: 0 1em;

  span {
    font-family: var(--font-primary);
    font-weight: var(--font-weight-normal);
    font-size: 1.375rem;
    text-transform: capitalize;
    color: var(--text-color-tertiary, #1b3b36);
  }
`;

const Main = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2em;
`;

const LHS = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const MidTextCtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1em;

  h2 {
    color: var(--text-color-tertiary, #1b3b36);
    font-size: 2.25rem;
    font-family: var(--font-secondary);
    font-weight: 400;
    letter-spacing: 0.0675rem;
    text-transform: capitalize;
  }

  p {
    color: var(--text-color-tertiary, #1b3b36);
    font-size: 1.125rem;
    font-family: var(--font-primary);
    font-weight: 400;
    line-height: 1.75rem;
  }
`;

const RoomOf = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5em;
  font-size: 1.375rem;
  font-family: var(--font-primary);
  font-weight: 400;
  line-height: 1.75rem;

  span:first-child {
    color: var(--text-color-tertiary, #1b3b36);
  }

  span:last-child {
    opacity: 0.5;
  }
`;

const RHS = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const BookRoomBtn = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  padding: 0.5em 1em;
  background: transparent;
  border: none;
  outline: none;

  span {
    font-size: 1.125rem;
    font-family: var(--font-primary);
    position: absolute;
  }
`;
