import styled from "styled-components";
import bg from '@/public/images/best_apartment/bg.png';

export const Wrapper = styled.div`
  width: 100%;
  background: url(${bg.src}) no-repeat center, #fff;
  background-size: cover;
`;

export const Inner = styled.div`
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
    font-family: var(--font-primary);
    font-weight: var(--font-weight-normal);
    text-transform: uppercase;
    width: 20%;
    position: absolute;
    top: 60%;
  }

  img {
    width: 100%;
    object-fit: cover;
    margin-left: -2.5em;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    h1 {
      font-size: 3rem;
      line-height: 3.75rem;
    }

    p {
      font-size: 1.125rem;
      bottom: 0px;
      right: 20px;
      width: 60%;
    }

    img {
      width: 100%;
      object-fit: contain;
      margin-top: -10em;
      margin-left: 0;
    }
  }
`;