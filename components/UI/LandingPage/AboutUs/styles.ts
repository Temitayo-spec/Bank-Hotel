import styled from 'styled-components';
import about_us_lines from '@/public/images/about_us_lines.png';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 1em 0 5em;
  background: url(${about_us_lines.src}) no-repeat;

  @media (min-width: 200px) and (max-width: 767px) {
    padding-bottom: 0;
    overflow: hidden;
  }
`;

export const Inner = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  gap: 4em;
  margin: 0 auto;
  padding: 2em 0;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 1em;
    padding-bottom: 0;
  }
`;

export const LHS = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  & > div {
    width: 30.08788rem;
    height: 42.6245rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: 767px) {
    & > div {
      width: 100%;
      height: 23.81456rem;
    }
  }
`;

export const Middle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3em;

  @media (min-width: 200px) and (max-width: 767px) {
    gap: 1em;
  }
`;

export const TitleCtn = styled.div`
  h1 {
    color: var(--text-color-secondary, #fcd043);
    font-size: 7.8125rem;
    font-family: var(--font-secondary);
    font-weight: 400;
    line-height: 6.5625rem;
    text-transform: uppercase;
    position: relative;
    z-index: 10;
    &:first-child {
      margin-left: -250px;
    }

    &:last-child {
      color: var(--text-color-primary, #fffcf6);
    }
  }

  @media (min-width: 200px) and (max-width: 767px) {
    h1 {
      font-size: 3.75rem;
      line-height: normal;
      &:first-child {
        margin-left: 0;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    h1 {
      font-size: 6rem;
    }
  }
`;

export const SubtitleCtn = styled.div`
  color: var(--text-color-primary, #fffcf6);
  h3 {
    font-size: 2.25rem;
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-normal);
    letter-spacing: 0.0675rem;
    text-transform: capitalize;
    margin-bottom: 0.5em;
  }

  p {
    line-height: 1.75rem;
    font-size: var(--font-size-lg);
    font-family: var(--font-primary);
    font-weight: var(--font-weight-normal);
    opacity: 0.64;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    h3 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.8125rem;
    }
  }
`;

export const RHS = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2em;
  align-items: center;
  padding: 2em 0;

  img:last-child {
    width: 60%;
    height: 60%;
    object-fit: contain;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    display: none;
  }
`;

export const MainImgCtn = styled.div`
  position: relative;

  & > div {
    width: 15.23938rem;
    height: 22.92981rem;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  & > img {
    object-fit: contain;
    position: absolute;
    top: -50px;
    left: -60px;
    animation: spin 6s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(-360deg);
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    img:nth-child(1) {
      width: 60%;
    }
  }
`;
