import Image from 'next/image';
import styled from 'styled-components';
import menu_icon from '@/public/svgs/menu_icon.svg';
import ic_close from '@/public/svgs/ic_close.svg';
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Wrapper>
      <Logo>
        <H2>BankHotel</H2>

        {isMenuOpen ? (
          <Image
            src={ic_close}
            alt="menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        ) : (
          <Image
            src={menu_icon}
            alt="menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        )}
      </Logo>
      <Nav className={isMenuOpen ? 'active' : 'inactive'}>
        <ul>
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <a href="#">Rooms</a>
          </li>
          <li>
            <a href="#">Restaurant</a>
          </li>
          <li>
            <a href="#">Conference Hall</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
        <Contact>
          <h3>+38 032 297 50 20</h3>

          <h2>8 Lystopadovoho chynu, lviv</h2>

          <Socials>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </Socials>
        </Contact>
      </Nav>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  img {
    display: none;
  }

  @media (max-width: 768px) and (min-width: 320px) {
    width: 100%;
    img {
      display: block;
      margin-left: auto;
      z-index: 11;
    }
  }
`;

const H2 = styled.h2`
  font-family: var(--font-primary);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-medium);
  color: var(--text-color-primary);
  z-index: 11;
`;

const Nav = styled.nav`
  flex: 3;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) and (min-width: 320px) {
    position: fixed;
    right: 0;
    top: 0;
    flex-direction: column;
    width: 0;
    height: 100%;
    z-index: 10;
    background-color: #313f38;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    border-radius: 1000px 0 0 1000px;
    &.active {
      animation: slideIn 1s forwards ease-in-out 0.5s;

      @keyframes slideIn {
        0% {
          width: 0;
          opacity: 0;
        }
        100% {
          width: 375px;
          border-radius: 0;
          opacity: 1;
        }
      }
    }
  }

  @media (min-width: 320px) and (max-width: 425px) {
    &.active {
      animation: slideIn 1s forwards ease-in-out 0.5s;

      @keyframes slideIn {
        0% {
          width: 0;
          opacity: 0;
        }
        100% {
          width: 100%;
          border-radius: 0;
          opacity: 1;
        }
      }
    }
  }

  &.inactive {
    animation: slideOut 1s forwards ease-in-out;

    @keyframes slideOut {
      0% {
        width: 375px;
        border-radius: 1000px 0 0 1000px;
      }
      100% {
        width: 0;
        border-radius: 0;
        opacity: 0;
        visibility: hidden;
      }
    }
  }

  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
    flex: 2;

    li {
      margin: 0 10px;

      a {
        font-family: var(--font-primary);
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-normal);
        color: var(--text-color-primary);
        text-transform: uppercase;

        &:hover {
          color: var(--text-color-secondary);
        }

        @media (max-width: 768px) and (min-width: 320px) {
          font-size: 1.875rem;
          font-weight: 400;
        }
      }

      @media (max-width: 768px) and (min-width: 320px) {
        margin: 0 0 10px 20px;
      }
    }

    @media (max-width: 768px) and (min-width: 320px) {
      flex-direction: column;
      justify-content: center;
      margin-top: 80px;
    }
  }
`;

const Contact = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  h3 {
    font-family: var(--font-primary);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-normal);
    color: var(--text-color-primary);
  }

  h2 {
    font-family: var(--font-primary);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    color: var(--text-color-primary);
    text-transform: uppercase;
    display: none;

    @media (max-width: 768px) and (min-width: 320px) {
      display: block;
    }
  }

  @media (max-width: 768px) and (min-width: 320px) {
    flex-direction: column;
    gap: 20px;
    justify-content: center;

    h3 {
      font-size: 1.25rem;
      font-weight: 400;
      position: relative;

      &:before {
        position: absolute;
        content: '';
        display: inline-block;
        background-color: var(--text-color-primary);
        height: 1px;
        width: 100%;
        top: 100%;
        left: 0;
        opacity: 0.2;
      }
    }
  }
`;

const Socials = styled.div`
  display: none;
  justify-content: space-between;
  gap: 15px;

  a {
    position: relative;
    color: var(--text-color-primary, #fffcf6);
    font-family: var(--font-primary);
    font-size: 0.75rem;
    font-weight: var(--font-weight-medium);
    line-height: 1.25rem;
    text-transform: uppercase;

    &:before {
      position: absolute;
      content: '';
      display: inline-block;
      background-color: var(--text-color-primary);
      height: 1px;
      width: 100%;
      top: 100%;
      left: 0;
      opacity: 0.2;
    }
  }

  @media (max-width: 768px) and (min-width: 320px) {
    display: flex;
  }
`;
