import Image from 'next/image';
import styled from 'styled-components';
import star from '@/public/svgs/ic-star.svg';
import button_default from '@/public/images/button_default.png';
import BannerImg from './BannerImg';

const Banner = (): JSX.Element => {
  return (
    <Wrapper>
      <Inner>
        <TextContainer>
          <LHS>
            <h1>
              Bank<span>Hotel</span>
            </h1>
            <p>rooms // restaurant // congress hall // wine bar</p>
          </LHS>
          <RHS>
            <Top>
              <Year>
                <Image src={star} alt="star" />
                <span>Since 1973</span>
              </Year>
              <Image src={button_default} alt="button_default" />
            </Top>
            <Bottom>
              <p>
                The luxurious hotel in the most beautiful European city with an
                exclusive restaurant, conference-hall, and art-bar.
              </p>
            </Bottom>
          </RHS>
        </TextContainer>
        <BannerImg />
      </Inner>
    </Wrapper>
  );
};

export default Banner;

const Wrapper = styled.div`
  width: 100%;
  margin: 4em 0 0 0;
`;

const Inner = styled.div``;

const TextContainer = styled.div`
  width: 95%;
  height: 45vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  @media (min-width: 768px) and (max-width: 1024px) {
    height: 20vh;
  }
`;

const LHS = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-normal);
    font-size: 10.625rem;
    color: var(--text-color-primary);
    line-height: 200px;
    margin-bottom: 3rem;

    span {
      color: var(--text-color-secondary);
    }
  }

  p {
    font-family: var(--font-primary);
    font-weight: var(--font-weight-normal);
    font-size: var(--font-size-xl);
    line-height: 31px;
    text-transform: uppercase;
    color: #fcd043;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    flex: 2;
    h1 {
      font-size: 6.25rem;
      margin: 0;
      line-height: normal;
    }

    p {
      font-size: 0.875rem;
      line-height: normal;
    }
  }
`;

const RHS = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
    flex-direction: row;
    align-items: flex-start;
    gap: 2em;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }
`;

const Year = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fffcf6;
  border-radius: 99px;
  gap: 1.5em;
  padding: 0 1.5em;

  span {
    font-family: var(--font-primary);
    font-weight: var(--font-weight-normal);
    font-size: var(--font-size-xxl);
    text-transform: capitalize;
    color: #fffcf6;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }
`;

const Bottom = styled.div`
  p {
    font-family: var(--font-primary);
    font-weight: var(--font-weight-normal);
    font-size: var(--font-size-md);
    line-height: 1.625rem;
    color: var(--text-color-primary);
    opacity: 0.8;
    width: 85%;

    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 0.8125rem;
      line-height: 1.4375rem;
      width: 100%;
    }
  }
`;
