import Image from 'next/image';
import styled from 'styled-components';
import banner_img from '@/public/images/banner_img.png';
import ic_chevron_down from '@/public/svgs/ic-chevron-down.svg';

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
            <h3>+38 032 297 50 20</h3>
            <h3>8 Lystopadovoho Chynu,Lviv</h3>
          </Contact>
          <Suite>
            <h3>Art & Congress</h3>
            <span>Hall</span>
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
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  button {
    width: 23.125rem;
    height: 7.8125rem;
    display: flex;
    cursor: pointer;
  }
`;

const CheckInBtn = styled.button`
  opacity: 0.9;
  background: rgba(49, 63, 56, 0.48);
  backdrop-filter: blur(20px);
  color: var(--text-color-primary, #fffcf6);
  font-size: var(--font-size-md);
  font-family: var(--font-primary);
  font-weight: var(--font-weight-medium);
  line-height: 1.25rem;
  text-transform: uppercase;
  padding: 0 1.5rem;
  justify-content: space-between;
  align-items: center;
  border: none;
  border-right: 1px solid #fff;
`;

const CheckOutBtn = styled.button`
  opacity: 0.9;
  background: rgba(49, 63, 56, 0.48);
  backdrop-filter: blur(20px);
  color: var(--text-color-primary, #fffcf6);
  font-size: var(--font-size-md);
  font-family: var(--font-primary);
  font-weight: var(--font-weight-medium);
  line-height: 1.25rem;
  text-transform: uppercase;
  padding: 0 1.5rem;
  justify-content: space-between;
  align-items: center;
  border: none;
`;

const BookRoom = styled.button`
  background: var(--text-color-secondary, #fcd043);
  color: var(--text-color-tertiary, #1b3b36);
  text-align: center;
  font-size: var(--font-size-lg);
  font-family: var(--font-primary);
  font-weight: var(--font-weight-medium);
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
`;
