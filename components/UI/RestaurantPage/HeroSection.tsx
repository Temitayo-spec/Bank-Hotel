import Image from 'next/image';
import styled from 'styled-components';
import label from '@/public/images/restaurant/label.svg';
import vector from '@/public/images/restaurant/Vector.png';
import ellipse from '@/public/images/restaurant/Ellipse.png';

const HeroSection = () => {
  return (
    <Wrapper>
      <Inner>
        <Title>“Safe” restaurant</Title>
        <Description>
          <h2>One of a Kind</h2>
          <SubTextCtn>
            <span>
              <Image src={label} alt="label" />
            </span>
            <p>
              Bank Hotel proudly welcomes you to the Safe Restaurant, a place
              where you will wish you could dine every day. The restaurant
              offers a unique menu developed by the team of professionals led by
              chef Mary-Ann Jones, the wine list with more than 250 items, the
              outstanding service, and the unforgettable atmosphere.
            </p>
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
`;
