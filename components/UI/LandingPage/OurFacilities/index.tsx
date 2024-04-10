import Image from 'next/image';
import styled from 'styled-components';
import star from '@/public/svgs/ic-star.svg';
import img_1 from '@/public/images/our_facilities/img_1.png';
import img_2 from '@/public/images/our_facilities/img_2.png';
import img_3 from '@/public/images/our_facilities/img_3.png';
import room_btn_default from '@/public/svgs/room_btn_default.svg';
import row_img_1 from '@/public/images/our_facilities/row_img_1.png';
import arrow from '@/public/svgs/arrow.svg';
import row_img_2 from '@/public/images/our_facilities/row_img_2.png';
import label from '@/public/images/our_facilities/label.svg';
import Reveal from '@/components/General/Reveal';
import RevealCover, { ImageDiv } from '@/components/General/ImageReveal';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import {
  ButtonCtn,
  CustomH1Ctn,
  Header,
  ImageCtn,
  Info,
  Inner,
  LHS,
  Numbering,
  P,
  RHS,
  RoomDetails,
  Row,
  SectionOne,
  SectionThree,
  SectionTwo,
  Wrapper,
} from './styles';
import useIsMobile from '@/libs/useIsMobile';

gsap.registerPlugin(ScrollTrigger);

const OurFacilities = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const titleOne = useRef<HTMLHeadingElement | null>(null);
  const titleTwo = useRef<HTMLHeadingElement | null>(null);
  const titleThree = useRef<HTMLHeadingElement | null>(null);
  const text = useRef<HTMLHeadingElement | null>(null);
  const imageOne = useRef<HTMLDivElement | null>(null);
  const imageTwo = useRef<HTMLDivElement | null>(null);
  const imageThree = useRef<HTMLDivElement | null>(null);
  const isMobile = useIsMobile();

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

      tl.to(titleOne.current, { y: -30 }, 0);
      tl.to(titleTwo.current, { y: -100 }, 0);
      tl.to(titleThree.current, { y: -150 }, 0);
      tl.to(text.current, { y: -20 }, 0);
      tl.to(imageOne.current, { y: -80 }, 0);
      tl.to(imageTwo.current, { y: -100 }, 0);
      tl.to(imageThree.current, { y: -120 }, 0);
    });

    return () => context.revert();
  }, [isMobile]);
  return (
    <Wrapper id="facilities" ref={container}>
      <Inner>
        <Header>
          <Reveal>
            <P>Art & Congress Hall</P>
          </Reveal>
          <CustomH1Ctn>
            <h1 ref={titleOne}>Our</h1>
            <h1 ref={titleTwo}>Faci</h1>
            <div ref={titleThree}>
              <Image src={star} alt="star" />
              <h1>Lities</h1>
            </div>
          </CustomH1Ctn>
          <div ref={imageOne} className="image_ctn">
            <RevealCover bgColor="#fffcf6" />
            <ImageDiv>
              <Image src={img_1} alt="image_1" quality={100} />
            </ImageDiv>
          </div>
        </Header>
        <SectionOne>
          <ImageCtn>
            <Image src={label} alt="label" />
            <div ref={imageTwo} className="image_ctn">
              <RevealCover bgColor="#fffcf6" />
              <ImageDiv>
                <Image src={img_2} alt="image_2" quality={100} />
              </ImageDiv>
            </div>
          </ImageCtn>
          <Reveal>
            <p>
              Bank Hotel offers you a wide range of additional services and
              facilities. Visit our restaurant to try exclusive meals, book a
              conference hall to organize a business meeting, or relax in the
              art-bar.
            </p>
          </Reveal>
        </SectionOne>
        <SectionTwo>
          <LHS>
            <ButtonCtn>
              <Image src={room_btn_default} alt="btn_default" />
            </ButtonCtn>
            <RoomDetails>
              <Reveal>
                <Numbering>01</Numbering>
              </Reveal>
              <Info>
                <Reveal textDelay={0.5} slideDelay={0.5}>
                  <h2>
                    Ice <br /> Restaurant
                  </h2>
                </Reveal>
                <Reveal textDelay={1} slideDelay={1}>
                  <p>
                    The hotel’s exclusive infrastructure is complemented by the
                    unique atmosphere of the Safe Restaurant. Author’s menu,
                    extensive wine card, and live music will set you for the
                    correct mood.
                  </p>
                </Reveal>
              </Info>
            </RoomDetails>
          </LHS>
          <RHS ref={imageThree}>
            <RevealCover bgColor="#fffcf6" />
            <ImageDiv>
              <Image src={img_3} alt="image_3" quality={100} />
            </ImageDiv>
          </RHS>
        </SectionTwo>
        <SectionThree>
          <Row>
            <div className="image_ctn">
              <RevealCover bgColor="#fffcf6" />
              <ImageDiv>
                <Image src={row_img_1} alt="row_img_1" quality={100} />
              </ImageDiv>
            </div>
            <div className="text_ctn">
              <Reveal>
                <h2>
                  <span>02</span>
                </h2>
              </Reveal>
              <Reveal textDelay={0.5} slideDelay={0.5}>
                <h2>Conference Hall</h2>
              </Reveal>
            </div>
            <Image className="arrow" src={arrow} alt="arrow" />
          </Row>
          <hr />
          <Row>
            <div className="image_ctn">
              <RevealCover bgColor="#fffcf6" />
              <ImageDiv>
                <Image src={row_img_2} alt="row_img_1" quality={100} />
              </ImageDiv>
            </div>
            <div className="text_ctn">
              <Reveal>
                <h2>
                  <span>03</span>
                </h2>
              </Reveal>
              <Reveal textDelay={0.5} slideDelay={0.5}>
                <h2>Wine bar “reserve”</h2>
              </Reveal>
            </div>
            <Image className="arrow" src={arrow} alt="arrow" />
          </Row>
          <hr />
        </SectionThree>
      </Inner>
    </Wrapper>
  );
};
export default OurFacilities;
