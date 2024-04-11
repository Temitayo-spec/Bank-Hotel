import styled from 'styled-components';
import bg from '@/public/images/best_apartment/bg.png';

export const Wrapper = styled.div`
  width: 100%;
  background: url(${bg.src}) no-repeat center, #fff;
  background-size: cover;
  height: 50.625rem;

  @media (min-width: 768px) and (max-width: 1024px) {
    height: 40.5625rem;
  }

  @media (max-width: 767px) {
    height: 56rem;
  }
`;

export const Inner = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 3em 0;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;

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
    font-family: var(--font-primary);
    font-weight: var(--font-weight-normal);
    text-transform: uppercase;
    max-width: 15.4375rem;
    margin-top: 12.63rem;
  }

  img {
    width: 100vw;
    object-fit: cover;
    margin-left: -2.5em;
    position: absolute;

    bottom: 50px;
  }

  @media (max-width: 767px) {
    justify-content: space-between;
    h1 {
      font-size: 3rem;
      line-height: 3.75rem;
    }

    p {
      font-size: 1.125rem;
      margin-left: 8rem;
    }

    img {
      width: 100%;
      object-fit: contain;

      bottom: 300px;
    }
  }
`;
