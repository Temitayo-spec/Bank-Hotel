import Image from 'next/image';
import styled from 'styled-components';
import star from '@/public/svgs/ic-star.svg';
import contact_us_img from '@/public/images/contact_us/contact_us_img.png';
import curve from '@/public/images/contact_us/Curve.svg';
import ic_chevron_down from '@/public/svgs/ic-chevron-down.svg';

const ContactUs = () => {
  return (
    <Wrapper id="contacts">
      <Inner>
        <Top>
          <ContactNumber>+38 032 297 50 20</ContactNumber>
          <div></div>
          <ContactAddress>
            <p>8 Lystopadovoho Chynu,Lviv</p>
          </ContactAddress>
        </Top>
        <LargeText>
          <h1>
            Get in
            <span>
              <Image src={star} alt="star" />
            </span>
          </h1>
          <h1>touch</h1>
        </LargeText>
        <AbsoluteImages>
          <Image src={contact_us_img} alt="contact_us_img" />
          <Image src={curve} alt="curve" />
        </AbsoluteImages>

        <FindRoomCtn>
          <h2>Find a Room</h2>
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
        </FindRoomCtn>
        <hr />
      </Inner>
    </Wrapper>
  );
};

export default ContactUs;

const Wrapper = styled.div`
  background: var(--text-color-primary, #fffcf6);
  width: 100%;
`;

const Inner = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 5em 0 0;
  position: relative;

  hr {
    margin-top: 5em;
    color: var(--primary-color, #313f38);
    opacity: 0.23999999463558197;
  }
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  height: 20vh;
  margin-bottom: 10em;

  @media (min-width: 200px) and (max-width: 767px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const ContactNumber = styled.div`
  color: var(--text-color-tertiary, #1b3b36);
  font-family: var(--font-primary);
  font-size: 3.125rem;
  font-weight: var(--font-weight-normal);
  line-height: 3.125rem;

  @media (min-width: 200px) and (max-width: 767px) {
    font-size: 1.125rem;
    text-decoration: underline;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 2rem;
    text-decoration: underline;
  }
`;

const ContactAddress = styled.div`
  display: flex;
  align-items: flex-end;
  color: var(--text-color-tertiary, #1b3b36);

  p {
    font-family: var(--font-primary);
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-normal);
    text-transform: uppercase;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    p {
      font-size: 1.125rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    p {
      font-size: 1.125rem;
    }
  }
`;

const LargeText = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: var(--text-color-tertiary, #1b3b36);
    font-family: var(--font-secondary);
    font-size: 15.625rem;
    font-weight: 400;
    line-height: 15.625rem;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    span {
      width: 0.5em;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  h1:last-child {
    margin-left: auto;
    color: var(--text-color-secondary, #fcd043);
    z-index: 5;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    h1 {
      font-size: 5.25rem;
      line-height: 5.25rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    h1 {
      font-size: 9.375rem;
      line-height: 9.375rem;
    }
  }
`;

const AbsoluteImages = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;

  img {
    position: absolute;
    object-fit: contain;
    &:first-child {
      top: 450px;
      right: 0;
    }

    &:last-child {
      top: 100px;
      margin-left: -60px;
    }

    @media (min-width: 200px) and (max-width: 767px) {
      &:first-child {
        top: 370px;
        width: 50%;
      }

      &:last-child {
        object-fit: cover;
        top: 0;
      }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      &:first-child {
        top: 300px;
      }

      &:last-child {
        top: 30px;
      }
    }
  }
`;

const FindRoomCtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-top: 10em;
  h2 {
    color: var(--text-color-tertiary, #1b3b36);
    font-family: var(--font-primary);
    font-size: 1.625rem;
    font-weight: var(--font-weight-normal);
    text-transform: uppercase;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    h2 {
      display: none;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    h2 {
      font-size: 1.125rem;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;

  button {
    width: 20%;
    height: 6rem;
    display: flex;
    cursor: pointer;

    img {
      width: 1em;
      height: 1em;
    }

    @media (min-width: 200px) and (max-width: 767px) {
      font-size: 0.75rem;
      height: 4rem;
      width: 40%;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 0.875rem;
      height: 6rem;
      width: 25%;
    }
  }
`;

const CheckInBtn = styled.button`
  border: 1px solid #313f38;
  background: var(--white, #fffcf6);
  backdrop-filter: blur(20px);
  color: var(--text-color-tertiary, #313f38);
  font-size: var(--font-size-md);
  font-family: var(--font-primary);
  font-weight: var(--font-weight-medium);
  line-height: 1.25rem;
  text-transform: uppercase;
  padding: 1em;
  justify-content: space-between;
  align-items: center;
  border-right: none;

  @media (min-width: 200px) and (max-width: 767px) {
    display: none !important;
  }
`;

const CheckOutBtn = styled.button`
  border: 1px solid #313f38;
  background: var(--white, #fffcf6);
  backdrop-filter: blur(20px);
  color: var(--text-color-tertiary, #313f38);
  font-size: var(--font-size-md);
  font-family: var(--font-primary);
  font-weight: var(--font-weight-medium);
  line-height: 1.25rem;
  text-transform: uppercase;
  padding: 1em;
  justify-content: space-between;
  align-items: center;
  border-left: none;
  border-right: none;
  @media (min-width: 200px) and (max-width: 767px) {
    display: none !important;
  }
`;

const BookRoom = styled.button`
  background: #313f38;
  color: var(--text-color-primary, #fffcf6);
  text-align: center;
  font-size: var(--font-size-lg);
  font-family: var(--font-primary);
  font-weight: var(--font-weight-medium);
  line-height: 1.25rem;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  border: none;
  @media (min-width: 200px) and (max-width: 767px) {
    background: var(--text-color-secondary);
  }
`;
