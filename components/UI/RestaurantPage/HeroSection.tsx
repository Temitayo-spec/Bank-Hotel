import Image from 'next/image';
import styled from 'styled-components';
import label from '@/public/images/restaurant/label.svg';
import vector from '@/public/images/restaurant/Vector.png';
import ellipse from '@/public/images/restaurant/Ellipse.png';
import Reveal from '@/components/General/Reveal';

const HeroSection = () => {
  return (
    <Wrapper>
      <Inner>
        <Reveal>
          <Title>“Safe” restaurant</Title>
        </Reveal>
        <Description>
          <h2>
            <Reveal textDelay={0.5} slideDelay={0.5}>
              One of a Kind
            </Reveal>
          </h2>
          <SubTextCtn>
            <span>
              <Image src={label} alt="label" />
            </span>
            <Reveal textDelay={0.75} slideDelay={0.75}>
              <p>
                Bank Hotel proudly welcomes you to the Safe Restaurant, a place
                where you will wish you could dine every day. The restaurant
                offers a unique menu developed by the team of professionals led
                by chef Mary-Ann Jones, the wine list with more than 250 items,
                the outstanding service, and the unforgettable atmosphere.
              </p>
            </Reveal>
          </SubTextCtn>
        </Description>
      </Inner>
    </Wrapper>
  );
};

export default HeroSection;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: url(${vector.src}) no-repeat top left 443px,
    url(${ellipse.src}) no-repeat top right;
  border-top: 1px solid #3f5148;

  @media (min-width: 200px) and (max-width: 767px) {
    background: url(${vector.src}) no-repeat top left 243px,
      url(${ellipse.src}) no-repeat top left;
    background-size: 1px 100%, 65%;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    background: url(${vector.src}) no-repeat top left 460px,
      url(${ellipse.src}) no-repeat top right;
    background-size: 1px 100%, 55%;
  }
`;

const Inner = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const Title = styled.h1`
  color: var(--text-color-secondary, #fcd043);
  font-family: var(--font-secondary);
  font-size: 7.8125rem;
  font-weight: var(--font-weight-normal);
  line-height: 6.5625rem;

  @media (min-width: 200px) and (max-width: 767px) {
    font-size: 3.75rem;
    line-height: 3.75rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 6.25rem;
    line-height: 5rem;
  }
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    color: var(--text-color-primary, #fffcf6);
    font-family: var(--font-secondary);
    font-size: 3.125rem;
    font-weight: 400;
    text-transform: capitalize;
    flex: 2;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    flex-direction: column;
    gap: 2rem;
    h2 {
      font-size: 1.5rem;
      line-height: 1.25rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    h2 {
      font-size: 1.875rem;
      text-transform: capitalize;
    }
  }
`;

const SubTextCtn = styled.div`
  flex: 1;
  gap: 20px;
  position: relative;
  img {
    position: absolute;
    top: -30%;
    left: -30%;
    object-fit: contain;
  }

  p {
    color: var(--text-color-primary, #fffcf6);
    font-family: var(--font-primary);
    font-size: 1.125rem;
    line-height: 1.75rem;
    opacity: 0.8;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    img {
      top: -25%;
      left: 80%;
      width: 3.14656rem;
      height: 4.375rem;
      transform: rotate(40deg);
    }

    p {
      font-size: 0.8125rem;
      line-height: 1.4375rem;
      width: 70%;
      margin-left: auto;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    img {
      top: -40%;
      left: 80%;
      width: 3.14656rem;
      height: 4.375rem;
      transform: rotate(40deg);
    }

    p {
      font-size: 0.8125rem;
      line-height: 1.4375rem;
    }
  }
`;
