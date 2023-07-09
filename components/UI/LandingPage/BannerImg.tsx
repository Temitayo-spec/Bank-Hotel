import Image from 'next/image';
import styled from 'styled-components';
import banner_img from '@/public/images/banner_img.png';
import ic_chevron_down from '@/public/svgs/ic-chevron-down.svg';
import Reveal from '@/components/General/Reveal';

const BannerImg = () => {
  return (
    <Wrapper>
      <Inner>
        <ImageCtn>
          <Image src={banner_img} alt="banner_img" />
          <ButtonContainer>
            <CheckInBtn type="button">
              <span>Check In</span>
              <Image
                src={ic_chevron_down}
                alt="ic_chevron_down"
                width={20}
                height={20}
              />
            </CheckInBtn>
            <CheckOutBtn type="button">
              <span>Check Out</span>
              <Image
                src={ic_chevron_down}
                alt="ic_chevron_down"
                width={20}
                height={20}
              />
            </CheckOutBtn>
            <BookRoom type="button">
              <span>Book Room</span>
            </BookRoom>
          </ButtonContainer>
        </ImageCtn>
        <BottomTextCtn>
          <Contact>
            <Reveal>
              <h3>+38 032 297 50 20</h3>
            </Reveal>
            <Reveal textDelay={0.5} slideDelay={0.5}>
              <h3>8 Lystopadovoho Chynu,Lviv</h3>
            </Reveal>
          </Contact>
          <Suite>
            <Reveal textDelay={1} slideDelay={1}>
              <h3>Art & Congress</h3>
              <span>Hall</span>
            </Reveal>
          </Suite>
        </BottomTextCtn>
      </Inner>
    </Wrapper>
  );
};

export default BannerImg;

const Wrapper = styled.div`
  width: 100%;
  padding: 3em 0;
`;

const Inner = styled.div`
  width: 95%;
  margin: 0 auto;

  @media (min-width: 200px) and (max-width: 767px) {
    width: 100%;
  }
`;

const ImageCtn = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 1rem;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    & > img {
      height: 29.5rem;
    }
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;

  button {
    width: 25%;
    height: 7.8125rem;
    display: flex;
    cursor: pointer;
    font-size: var(--font-size-md);
    font-family: var(--font-primary);
    font-weight: var(--font-weight-medium);
  }

  @media (min-width: 200px) and (max-width: 767px) {
    bottom: 20px;
    right: 10px;
    button {
      display: none;
      height: 5rem;
      font-size: 0.875rem;
      &:last-child {
        display: flex;
        width: 50%;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    bottom: 0;

    button {
      width: 30%;
      height: 5rem;
      font-size: 0.75rem;
    }
  }
`;

const CheckInBtn = styled.button`
  opacity: 0.9;
  background: rgba(49, 63, 56, 0.48);
  backdrop-filter: blur(20px);
  color: var(--text-color-primary, #fffcf6);
  line-height: 1.25rem;
  text-transform: uppercase;
  padding: 0 1.5rem;
  justify-content: space-between;
  align-items: center;
  border: none;
  border-right: 1px solid #fff;

  @media (min-width: 200px) and (max-width: 767px) {
    display: none;
  }
`;

const CheckOutBtn = styled.button`
  opacity: 0.9;
  background: rgba(49, 63, 56, 0.48);
  backdrop-filter: blur(20px);
  color: var(--text-color-primary, #fffcf6);
  line-height: 1.25rem;
  text-transform: uppercase;
  padding: 0 1.5rem;
  justify-content: space-between;
  align-items: center;
  border: none;

  @media (min-width: 200px) and (max-width: 767px) {
    display: none;
  }
`;

const BookRoom = styled.button`
  background: var(--text-color-secondary, #fcd043);
  color: var(--text-color-tertiary, #1b3b36);
  text-align: center;
  font-size: var(--font-size-lg);
  line-height: 1.25rem;
  text-transform: uppercase;
  padding: 0 1.5rem;
  justify-content: center;
  align-items: center;
  border: none;
`;

const BottomTextCtn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  h3 {
    color: var(--text-color-secondary, #fcd043);
    font-size: 1.625rem;
    font-family: var(--font-primary);
    font-weight: var(--font-weight-normal);
    text-decoration-line: underline;
    text-transform: uppercase;
  }

  h3:last-child {
    color: var(--text-color-primary, #fffcf6);
  }

  @media (min-width: 200px) and (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    h3 {
      font-size: 1.125rem;
    }
  }
`;

const Suite = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  h3 {
    color: var(--text-color-primary, #fffcf6);
    font-size: 1.625rem;
    font-family: var(--font-primary);
    font-weight: var(--font-weight-normal);
    text-transform: uppercase;
  }

  span {
    color: var(--text-color-primary, #fffcf6);
    font-size: 1.625rem;
    font-family: var(--font-primary);
    font-weight: var(--font-weight-normal);
    text-transform: uppercase;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    align-items: flex-start;

    h3,
    span {
      font-size: 0.75rem;
      margin-left: 1em;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    h3,
    span {
      font-size: 1rem;
    }
  }
`;
