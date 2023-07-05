import Image from 'next/image';
import styled from 'styled-components';
import line from '@/public/images/best_apartment/line.png';
import bg from '@/public/images/best_apartment/bg.png';

const BestApartment = () => {
  return (
    <Wrapper>
      <Inner>
        <h1>
          Best <br /> Apartments
        </h1>
        <p>
          All room decoration was made with ecological certified and safe
          materials.
        </p>
        <Image src={line} alt="line" />
      </Inner>
    </Wrapper>
  );
};

export default BestApartment;

const Wrapper = styled.div`
  width: 100%;
  background: url(${bg.src}) no-repeat center, #fff;
  background-size: cover;
`;

const Inner = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 3em 0;
  position: relative;

  color: var(--text-secondary-color, #fcd043);
  h1 {
    font-size: 6.25rem;
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-normal);
    line-height: 5rem;
    text-transform: uppercase;
  }

  p {
    font-size: 1.125rem;
    font-family: Helvetica Neue LT Std;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    width: 20%;
    position: absolute;
    top: 60%;
  }

  img {
    object-fit: cover;
    margin-left: -2.5em;
  }
`;
