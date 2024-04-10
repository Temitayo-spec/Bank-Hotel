import Image from 'next/image';
import styled from 'styled-components';
import ic_arrow_small from '@/public/svgs/ic_arrow_small.svg';
import { useRouter } from 'next/router';
import Reveal from './Reveal';

const Footer = (): JSX.Element => {
  const { pathname } = useRouter();
  return (
    <Wrapper
      className={
        pathname === '/restaurant' ||
        pathname === '/restaurant/' ||
        pathname.includes('/restaurant')
          ? 'restaurant'
          : ''
      }
    >
      <Inner>
        <AboutUsCtn>
          <MainText
            className={
              pathname === '/restaurant' ||
              pathname === '/restaurant/' ||
              pathname.includes('/restaurant')
                ? 'restaurant'
                : ''
            }
          >
            <Reveal>
              <h2>About us</h2>
            </Reveal>
            <Reveal textDelay={0.5} slideDelay={0.5}>
              <p>
                The five-star hotel in a beautiful European city with a modern
                restaurant, conference-hall, and art-bar.
              </p>
            </Reveal>
          </MainText>
          <Reveal textDelay={1} slideDelay={1}>
            <SubText
              className={
                pathname === '/restaurant' ||
                pathname === '/restaurant/' ||
                pathname.includes('/restaurant')
                  ? 'restaurant'
                  : ''
              }
            >
              ©2021 All rights reserved. BankHotel
            </SubText>
          </Reveal>
        </AboutUsCtn>
        <News
          className={
            pathname === '/restaurant' ||
            pathname === '/restaurant/' ||
            pathname.includes('/restaurant')
              ? 'restaurant'
              : ''
          }
        >
          <Reveal>
            <h2>News</h2>
          </Reveal>
          <Reveal textDelay={0.5} slideDelay={0.5}>
            <p>
              Sign up to our newsletter not to miss exclusive offers and
              information about the upcoming events.
            </p>
          </Reveal>
          <InputCtn
            className={
              pathname === '/restaurant' ||
              pathname === '/restaurant/' ||
              pathname.includes('/restaurant')
                ? 'restaurant'
                : ''
            }
          >
            <input type="text" placeholder="Email" />
            <Image src={ic_arrow_small} alt="arrow" />
          </InputCtn>
        </News>
        <Socials
          className={
            pathname === '/restaurant' ||
            pathname === '/restaurant/' ||
            pathname.includes('/restaurant')
              ? 'restaurant'
              : ''
          }
        >
          <Reveal>
            <h2>Social</h2>
          </Reveal>
          <ul>
            <Reveal textDelay={0.5} slideDelay={0.5}>
              <li>Facebook</li>
            </Reveal>
            <Reveal textDelay={0.75} slideDelay={0.75}>
              <li>Instagram</li>
            </Reveal>
            <Reveal textDelay={1} slideDelay={1}>
              <li>Twitter</li>
            </Reveal>
          </ul>
        </Socials>
      </Inner>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  width: 100%;
  background-color: var(--text-color-primary);
  height: 60vh;

  &.restaurant {
    background-color: var(--bg-color);
  }

  @media (min-width: 200px) and (max-width: 767px) {
    height: auto;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    height: 100%;
  }
`;

const Inner = styled.div`
  width: 95%;
  margin: 0 auto;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4em;
  padding: 5em 0;

  @media (min-width: 200px) and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const AboutUsCtn = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MainText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  font-family: var(--font-primary);
  font-weight: var(--font-weight-normal);
  color: var(--text-color-tertiary, #1b3b36);

  &.restaurant {
    color: var(--text-color-primary);

    h2::before {
      content: '/';
      margin-right: 0.1em;
      color: var(--text-color-secondary);
    }
  }

  h2 {
    font-size: 1.625rem;
    text-transform: uppercase;
  }

  p {
    font-size: 1rem;
    line-height: 1.75rem;
    opacity: 0.8;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    h2 {
      font-size: 1.125rem;
    }

    p {
      font-size: 0.875rem;
      line-height: 1.4375rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    h2 {
      font-size: 1.125rem;
    }

    p {
      font-size: 0.875rem;
      line-height: 1.4375rem;
    }
  }
`;

const SubText = styled.p`
  color: var(--text-color-tertiary, #1b3b36);
  font-family: var(--font-primary);
  font-weight: var(--font-weight-normal);
  font-size: 0.875rem;
  line-height: 1.5rem;
  opacity: 0.24;

  &.restaurant {
    color: var(--text-color-primary);
  }
`;

const News = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  font-family: var(--font-primary);
  font-weight: var(--font-weight-normal);
  color: var(--text-color-tertiary, #1b3b36);

  &.restaurant {
    color: var(--text-color-primary);

    h2::before {
      content: '/';
      margin-right: 0.1em;
      color: var(--text-color-secondary);
    }
  }

  h2 {
    font-size: 1.625rem;
    text-transform: uppercase;
  }

  p {
    font-size: 1rem;
    line-height: 1.75rem;
    opacity: 0.8;
  }

  @media (min-width: 200px) and (max-width: 767px) {
    h2 {
      font-size: 1.125rem;
    }

    p {
      font-size: 0.875rem;
      line-height: 1.4375rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    h2 {
      font-size: 1.125rem;
    }

    p {
      font-size: 0.875rem;
      line-height: 1.4375rem;
    }
  }
`;

const InputCtn = styled.div`
  width: 100%;
  height: 2.5rem;
  position: relative;

  input {
    position: relative;
    width: 100%;
    height: 4rem;
    padding: 1em;
    background-color: var(--text-color-primary);
    outline: none;
    border: 1px solid #313f38;
    opacity: 0.64;
    backdrop-filter: blur(20px);
    font-family: var(--font-primary);
    font-size: 1rem;
    font-weight: var(--font-weight-normal);

    &::placeholder {
      color: var(--text-color-tertiary, #1b3b36);
      font-family: var(--font-primary);
      font-size: 1rem;
      font-weight: var(--font-weight-normal);
      line-height: 1.25rem;
      text-transform: uppercase;
      opacity: 0.5;
    }
  }

  &.restaurant {
    color: var(--text-color-primary);

    input {
      border: 1px solid var(--text-color-primary, #fffcf6);
      backdrop-filter: blur(20px);

      &::placeholder {
        color: var(--text-color-tertiary, #fffcf6);
      }
    }
  }

  img {
    position: absolute;
    top: 50%;
    right: 1em;
    cursor: pointer;
  }
`;

const Socials = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  font-family: var(--font-primary);
  font-weight: var(--font-weight-normal);
  color: var(--text-color-tertiary, #1b3b36);

  &.restaurant {
    color: var(--text-color-primary);

    h2::before {
      content: '/';
      margin-right: 0.1em;
      color: var(--text-color-secondary);
    }
  }

  h2 {
    font-size: 1.625rem;
    text-transform: uppercase;
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    li {
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.25rem;
      text-transform: uppercase;
      margin-right: 1em;
    }
  }

  @media (min-width: 200px) and (max-width: 767px) {
    h2 {
      font-size: 1.125rem;
    }

    ul {
      flex-direction: column;
      align-items: flex-start;

      li {
        font-size: 0.75rem;
        margin-right: 0;
        margin-bottom: 1em;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    h2 {
      font-size: 1.125rem;
    }

    ul {
      flex-direction: column;
      align-items: flex-start;

      li {
        font-size: 0.75rem;
        margin-right: 0;
        margin-bottom: 1em;
      }
    }
  }
`;
