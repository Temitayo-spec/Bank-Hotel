import styled from 'styled-components';
import star from '@/public/svgs/ic-star.svg';
import Image from 'next/image';
import section_two_img from '@/public/images/rooms/section_two_img.png';
import curve from '@/public/images/rooms/Curve.svg';

const SectionTwo = () => {
  return (
    <Wrapper>
      <Inner>
        <Year>
          <Image src={star} alt="star" />
          <span>Since 1973</span>
        </Year>
        <FlexTextCtn>
          <h2>
            All suites have a unique design because we want our every guest to
            feel special.
          </h2>
          <p>
            The Superior twin would perfectly match the needs of those who plan
            to stay long. The bright and airy room is equipped with superior
            soft Italian furniture. Large windows open a beautiful view to the
            historical part of the city. Contemporary interior design and
            comfortable beds will make your stay cozy and delightful.
          </p>
        </FlexTextCtn>
        <AbsoluteImage>
          <Image src={curve} alt="curve" />
        </AbsoluteImage>
        <h2>Premier Standard</h2>
        <Image src={section_two_img} alt="section_two_img" />
      </Inner>
    </Wrapper>
  );
};

export default SectionTwo;

const Wrapper = styled.div`
  width: 100%;
  padding: 10em 0 0;
  background-color: var(--bg-color);

  @media (min-width: 200px) and (max-width: 767px) {
    padding: 1em 0 0 0;
  }

  position: relative;
`;

const Inner = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2:nth-child(4) {
    color: var(--text-color-secondary, #fcd043);
    font-family: var(--font-primary);
    font-size: 2.5rem;
    font-weight: 400;
    text-transform: capitalize;
    margin: 3em 0 2em;
  }

  img:last-child {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: 1;
  }
`;

const FlexTextCtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6em;

  color: var(--text-color-primary, #fffcf6);
  h2 {
    font-weight: 300;
    font-family: var(--font-secondary);
    font-size: 3.125rem;
    line-height: 3.75rem;
    letter-spacing: 0.09375rem;
    flex: 1.7;
  }

  p {
    font-family: var(--font-primary);
    font-size: 1.125rem;
    line-height: 1.75rem;
    opacity: 0.8;
    flex: 1;
  }
`;

const AbsoluteImage = styled.div`
  position: absolute;
  left: 0;
  top: 40%;
  z-index: 0;
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
  width: auto;
  margin-bottom: 5em;

  span {
    font-family: var(--font-primary);
    font-weight: var(--font-weight-normal);
    font-size: var(--font-size-xxl);
    text-transform: capitalize;
    color: #fffcf6;
  }

  @media (min-width: 200px) and (max-width: 1024px) {
    display: none;
  }
`;
