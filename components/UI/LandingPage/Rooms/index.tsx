import styled from 'styled-components';
import room_left_small from '@/public/images/room_left_small.png';
import room_right_big from '@/public/images/room_right_big.png';
import room_btn_default from '@/public/svgs/room_btn_default.svg';
import star from '@/public/svgs/ic-star.svg';
import yellow_polygon from '@/public/svgs/yellow_polygon.svg';
import Image from 'next/image';
import Reveal from '@/components/General/Reveal';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import RevealCover, { ImageDiv } from '@/components/General/ImageReveal';
import {
  BookRoomBtn,
  Header,
  Inner,
  LHS,
  Main,
  MidTextCtn,
  Middle,
  RHS,
  RoomOf,
  Wrapper,
  Year,
} from './styles';
import useIsMobile from '@/libs/useIsMobile';

gsap.registerPlugin(ScrollTrigger);

const Rooms = () => {
  const isMobile = useIsMobile();

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
          trigger: container.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      tl.to(title.current, { y: -80 }, 0);
      tl.to(text.current, { y: -20 }, 0);
      tl.to(imageOne.current, { y: -80 }, 0);
      tl.to(imageTwo.current, { y: -100 }, 0);
    });

    return () => context.revert();
  }, [isMobile]);
  return (
    <Wrapper ref={container}>
      <Inner>
        <Header>
          <div ref={title}>
            <Reveal>
              <h1>Rooms &</h1>
            </Reveal>
            <Reveal textDelay={0.5}>
              <h1> Apartments</h1>
            </Reveal>
          </div>
          <Reveal textDelay={0.5} slideDelay={0.5}>
            <p className='small_text'>
              All room decoration was made with ecological certified and safe
              materials.
            </p>
          </Reveal>
        </Header>
        <Main>
          <LHS>
            <div ref={imageOne}>
              <RevealCover bgColor="#fffcf6" />
              <ImageDiv>
                <Image
                  src={room_left_small}
                  alt="room_left_small"
                  quality={100}
                />
              </ImageDiv>
            </div>
            <Image src={room_btn_default} alt="room_btn_default" />
          </LHS>
          <Middle>
            <Year>
              <Image src={star} alt="star" />
              <span>Since 1973</span>
            </Year>
            <MidTextCtn>
              <div ref={text}>
                <Reveal>
                  <h2>Superior Twin</h2>
                </Reveal>

                <Reveal textDelay={0.5} slideDelay={0.5}>
                  <p>
                    The Superior twin is perfect for those who plan to stay
                    long. The spacious and bright room is equipped with deluxe
                    Italian furniture and has a beautiful view to the historical
                    part of the city. Stylish interior design and comfortable
                    beds will make your stay cozy and pleasant.
                  </p>
                </Reveal>
              </div>
              <RoomOf>
                <Reveal textDelay={1} slideDelay={1}>
                  <span>01 </span> / <span>04</span>
                </Reveal>
              </RoomOf>
            </MidTextCtn>
          </Middle>
          <RHS ref={imageTwo}>
            <div>
              <RevealCover bgColor="#fffcf6" />
              <ImageDiv>
                <Image
                  src={room_right_big}
                  alt="room_right_big"
                  quality={100}
                />
              </ImageDiv>
            </div>
            <BookRoomBtn type="button">
              <Image src={yellow_polygon} alt="yellow_polygon" />
              <span>Book Room</span>
            </BookRoomBtn>
          </RHS>
        </Main>
      </Inner>
    </Wrapper>
  );
};

export default Rooms;
