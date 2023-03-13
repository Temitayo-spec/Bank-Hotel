import Image from 'next/image';
import styled from 'styled-components';
import star from '@/public/svgs/ic-star.svg';
import button_default from '@/public/images/button_default.png';

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
      </Inner>
    </Wrapper>
  );
};

export default Banner;

const Wrapper = styled.div`
  width: 100%;
  margin: 4em 0 0 0;
`;

const Inner = styled.div`

`;

const TextContainer = styled.div`
  width: 95%;
  height: 45vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const LHS = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-normal);
    font-size: 11rem;
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
`;

const RHS = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Year = styled.div`
  width: 249px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fffcf6;
  border-radius: 99px;
  gap: 1.5em;

  span {
    font-family: var(--font-primary);
    font-weight: var(--font-weight-normal);
    font-size: var(--font-size-xxl);
    text-transform: capitalize;
    color: #fffcf6;
  }
`;

const Bottom = styled.div`
  p {
    font-family: var(--font-primary);
    font-weight: var(--font-weight-normal);
    font-size: var(--font-size-lg);
    line-height: 28px;
    color: var(--text-color-primary);
    opacity: 0.8;
  }
`;
