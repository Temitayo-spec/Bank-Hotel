import Image from 'next/image';
import styled from 'styled-components';
import star from '@/public/svgs/ic-star.svg';
import contact_us_img from '@/public/images/contact_us/contact_us_img.png';
import curve from '@/public/images/contact_us/Curve.svg';
import curve_2 from '@/public/images/restaurant/Curve.png';
import ic_chevron_down from '@/public/svgs/ic-chevron-down.svg';
import { useRouter } from 'next/router';
import Reveal from '../Reveal';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import RevealCover, { ImageDiv } from '@/components/General/ImageReveal';

gsap.registerPlugin(ScrollTrigger);
import {
  AbsoluteImages,
  BookRoom,
  ButtonContainer,
  CheckInBtn,
  CheckOutBtn,
  ContactAddress,
  ContactNumber,
  FindRoomCtn,
  Inner,
  LargeText,
  Top,
  Wrapper,
} from './styles';
import useIsMobile from '@/libs/useIsMobile';

const ContactUs = () => {
  const { pathname } = useRouter();
  const isMobile = useIsMobile();
  const checkForPath = () => {
    return (
      pathname === '/restaurant' ||
      pathname === '/restaurant/' ||
      pathname.includes('/restaurant')
    );
  };

  const container = useRef<HTMLDivElement | null>(null);
  const title = useRef<HTMLHeadingElement | null>(null);
  const text = useRef<HTMLHeadingElement | null>(null);
  const imageOne = useRef<HTMLDivElement | null>(null);
  const imageTwo = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (isMobile) return;
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: isMobile ? null : container.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      tl.to(title.current, { y: -100 }, 0);
      tl.to(text.current, { y: -150 }, 0);
      tl.to(imageOne.current, { y: -80 }, 0);
      tl.to(imageTwo.current, { y: -100 }, 0);
    });

    return () => context.revert();
  }, [isMobile]);
  return (
    <Wrapper
      ref={container}
      id="contacts"
      className={checkForPath() ? 'restaurant' : ''}
    >
      <Inner>
        <Top className={checkForPath() ? 'restaurant' : ''}>
          <Reveal>
            <ContactNumber className={checkForPath() ? 'restaurant' : ''}>
              +38 032 297 50 20
            </ContactNumber>
          </Reveal>
          <div></div>
          <Reveal textDelay={0.5} slideDelay={0.5}>
            <ContactAddress className={checkForPath() ? 'restaurant' : ''}>
              <p>8 Lystopadovoho Chynu, Lviv</p>
            </ContactAddress>
          </Reveal>
        </Top>
        <LargeText className={checkForPath() ? 'restaurant' : ''}>
          <h1 ref={title}>
            Get in
            <span>
              <Image src={star} alt="star" />
            </span>
          </h1>
          <h1 ref={text}>touch</h1>
        </LargeText>
        <AbsoluteImages>
          <div ref={imageOne}>
            <div>
              <RevealCover
                bgColor={pathname === '/restaurant' ? '' : '#fffcf6'}
              />
              <ImageDiv>
                <Image src={contact_us_img} alt="contact_us_img" />
              </ImageDiv>
            </div>
          </div>
          <Image
            src={pathname === '/restaurant' ? curve_2 : curve}
            alt="curve"
            className="curve"
          />
        </AbsoluteImages>

        <FindRoomCtn className={checkForPath() ? 'restaurant' : ''}>
          <Reveal>
            <h2>Find a Room</h2>
          </Reveal>

          <ButtonContainer className={checkForPath() ? 'restaurant' : ''}>
            <CheckInBtn
              className={checkForPath() ? 'restaurant' : ''}
              type="button"
            >
              <span>Check In</span>
              <Image
                src={ic_chevron_down}
                alt="ic_chevron_down"
                width={20}
                height={20}
              />
            </CheckInBtn>
            <CheckOutBtn
              className={checkForPath() ? 'restaurant' : ''}
              type="button"
            >
              <span>Check Out</span>
              <Image
                src={ic_chevron_down}
                alt="ic_chevron_down"
                width={20}
                height={20}
              />
            </CheckOutBtn>
            <BookRoom
              className={checkForPath() ? 'restaurant' : ''}
              type="button"
            >
              <span>Book Room</span>
            </BookRoom>
          </ButtonContainer>
        </FindRoomCtn>
        <hr />
      </Inner>
    </Wrapper>
  );
};

export default ContactUs;
