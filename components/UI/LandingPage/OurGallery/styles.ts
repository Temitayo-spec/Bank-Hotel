import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Inner = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 5rem 0;
  position: relative;

  h2 {
    position: absolute;
    color: var(--text-color-primary, #fffcf6);
    font-size: var(--font-size-lg, 1.125rem);
    font-family: var(--font-primary);
    font-weight: var(--font-weight-normal);
    text-transform: uppercase;
    width: 15%;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    h2 {
      font-size: 0.875rem;
      width: 50%;
      top: 10px;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    h2 {
      font-size: 1.125rem;
      width: 20%;
    }
  }
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  position: relative;
`;

export const Header = styled.div`
  h1 {
    color: var(--text-color-secondary, #fcd043);
    font-size: 7.8125rem;
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-normal);
    line-height: 6.5625rem;
    text-transform: uppercase;
    margin: 0.5em 0;
  }

  p {
    color: var(--text-color-primary, #fffcf6);
    font-size: 1.125rem;
    font-family: var(--font-primary);
    font-weight: var(--font-weight-normal);
    line-height: 1.75rem;
    opacity: 0.8;
    width: 40%;
    margin: 1em auto 4em;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    h1 {
      font-size: 3.75rem;
      line-height: 3.75rem;
    }

    p {
      font-size: 0.8125rem;
      line-height: 1.4375rem;
      width: 100%;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    h1 {
      font-size: 6.25rem;
    }

    p {
      font-size: 0.8125rem;
      line-height: 1.4375rem;
    }
  }
`;

export const CenterImgCtn = styled.div`
  & > div:first-of-type {
    position: relative;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  @media (max-width: 767px) {
      & > div:first-of-type {
        opacity: 0.3;
      position: relative;
      z-index: 2;
      margin-top: 3em;

      img {
        
      }
    }
  }
`;

export const ScatteredImgCtn = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  div {
    position: absolute;

    &:nth-of-type(1) {
      top: 300px;
      left: -50px;
    }

    &:nth-of-type(2) {
      top: 300px;
      right: -50px;
    }

    &:nth-of-type(3) {
      bottom: 0px;
      left: -50px;
    }

    &:nth-of-type(4) {
      bottom: -150px;
      right: -50px;
    }
  }
  img {
    object-fit: contain;
  }

  @media (max-width: 767px) {
    top: 4em;

    div {
      &:nth-of-type(1) {
        top: 300px;
        left: -50px;
        z-index: 9;
        img {
          height: 20%;
        }
      }

      &:nth-of-type(2) {
        top: 200px;
        right: 0px;
        opacity: 0.4;
        z-index: 8;
        img {
          width: 50%;
        }
      }

      &:nth-of-type(3) {
        bottom: 180px;
        left: 60%;
        z-index: 4;
        img {
          height: 20%;
        }
      }

      &:nth-of-type(4) {
        bottom: 100px;
        right: 200px;
        opacity: 0.4;

        z-index: 2;

        img {
          width: 50%;
        }
      }
    }
  }
`;

export const SmallText = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  margin: 1em 0;

  img {
    width: 1.5rem;
    height: 1.5rem;
    object-fit: contain;
  }

  p {
    color: var(--text-color-primary, #fffcf6);
    font-family: var(--font-primary);
    font-size: 1.375rem;
    font-style: italic;
    font-weight: var(--font-weight-normal);
    width: 70%;
    margin-left: 0;
    text-align: left;
    opacity: 0.8;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    margin-top: 10em;

    p {
      font-size: 1rem;
      width: 80%;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    p {
      font-size: 1rem;
    }
  }
`;

export const ParallaxTextCtn = styled.div`
  width: 100%;
  padding-bottom: 4em;
`;

export const White = styled.span`
  color: var(--text-color-primary, #fffcf6);
  margin: 0 1em 0 0.5em;
`;
