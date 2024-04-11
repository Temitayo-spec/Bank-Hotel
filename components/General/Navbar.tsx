import Image from 'next/image';
import styled from 'styled-components';
import menu_icon from '@/public/svgs/menu_icon.svg';
import ic_close from '@/public/svgs/ic_close.svg';
import { SetStateAction, useEffect, useState } from 'react';
import Link from 'next/link';
import ic_star from '@/public/svgs/ic-star.svg';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('');
  const { pathname } = useRouter();

  const handleNavClick = (navItem: SetStateAction<string>) => {
    setActiveNav(navItem);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (pathname === '/') {
      setActiveNav('home');
    }
  }, [pathname]);

  return (
    <Wrapper>
      <Logo>
        <H2>BankHotel</H2>
        <Image
          src={isMenuOpen ? ic_close : menu_icon}
          alt="menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </Logo>
      <Nav className={isMenuOpen ? 'active' : 'inactive'}>
        <ul>
          <li>
            <Link href="/" passHref onClick={() => handleNavClick('home')}>
              Home
              {activeNav === 'home' && <Image src={ic_star} alt="star" />}
            </Link>
          </li>
          <li>
            <Link
              href="/rooms"
              passHref
              onClick={() => handleNavClick('rooms')}
            >
              Rooms
              {pathname.startsWith('/rooms') && (
                <Image src={ic_star} alt="star" />
              )}
            </Link>
          </li>
          <li>
            <Link
              href="/restaurant"
              onClick={() => handleNavClick('restaurant')}
            >
              Restaurant
              {pathname === '/restaurant' && <Image src={ic_star} alt="star" />}
            </Link>
          </li>
          <li>
            <Link
              href="/#facilities"
              passHref
              onClick={() => handleNavClick('facilities')}
            >
              Conference Hall
              {pathname === '/' && activeNav === 'facilities' && (
                <Image src={ic_star} alt="star" />
              )}
            </Link>
          </li>
          <li>
            <Link
              href="/#contacts"
              passHref
              onClick={() => handleNavClick('contacts')}
            >
              Contacts
              {activeNav === 'contacts' && <Image src={ic_star} alt="star" />}
            </Link>
          </li>
        </ul>
        <Contact>
          <h3>+38 032 297 50 20</h3>
          <h2>8 Lystopadovoho chynu, Lviv</h2>
          <Socials>
            <Link href="#">Facebook</Link>
            <Link href="#">Instagram</Link>
            <Link href="#">Twitter</Link>
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
  background: var(--bg-color);
  width: 95%;
  margin: 0 auto;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0.5;

  img {
    display: none;
  }

  @media (max-width: 1024px) and (min-width: 320px) {
    width: 100%;
    padding: 0.3em;
    height: 50px;
    flex: 1;
    img {
      display: block;
      margin-left: auto;
      z-index: 8;
      object-fit: contain;
    }
  }
`;

const H2 = styled.h2`
  font-family: var(--font-primary);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-medium);
  color: var(--text-color-primary);
  z-index: 8;
`;

const Nav = styled.nav`
  flex: 3;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) and (min-width: 320px) {
    position: fixed;
    right: 0;
    top: 0;
    flex-direction: column;
    width: 0;
    height: 100%;
    z-index: 7;
    background-color: #313f38;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    width: 375px;
    transform: translateX(100%);
    transform-origin: right;
    transition: transform 0.6s cubic-bezier(0.83, 0, 0.17, 1);

    &.active {
      transform: translateX(0);
    }

    &.inactive {
    }
  }

  @media (min-width: 320px) and (max-width: 425px) {
    &.active {
    }
    &.inactive {
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

        @media (max-width: 1024px) and (min-width: 320px) {
          font-size: 1.875rem;
          font-weight: 400;
        }
      }

      img {
        display: none;
      }

      @media (max-width: 1024px) and (min-width: 320px) {
        margin: 0 0 10px 20px;
        position: relative;
        img {
          display: block;
          position: absolute;
          top: -15px;
          left: 40%;
        }
      }
    }

    @media (max-width: 1024px) and (min-width: 320px) {
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
  flex: 0.5;
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

    @media (max-width: 1024px) and (min-width: 320px) {
      display: block;
    }
  }

  @media (max-width: 1024px) and (min-width: 320px) {
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

  @media (max-width: 1024px) and (min-width: 320px) {
    display: flex;
  }
`;
