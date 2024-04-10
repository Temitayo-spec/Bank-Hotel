import Image from 'next/image';
import about_us_img_1 from '@/public/images/about_us_img_1.png';
import about_us_img_2 from '@/public/images/about_us_img_2.png';
import about_us_img_3 from '@/public/images/about_us_img_3.png';
import about_us_label from '@/public/images/about_us_label.png';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import RevealCover, { ImageDiv } from '@/components/General/ImageReveal';
import {
  Inner,
  LHS,
  MainImgCtn,
  Middle,
  RHS,
  SubtitleCtn,
  TitleCtn,
  Wrapper,
} from './styles';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const title = useRef<HTMLHeadingElement | null>(null);
  const titleTwo = useRef<HTMLHeadingElement | null>(null);
  const imageOne = useRef<HTMLHeadingElement | null>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      tl.to(title.current, { y: -50 }, 0);
      tl.to(titleTwo.current, { y: -20 }, 0);
      tl.to(imageOne.current, { y: -80 }, 0);
    });

    return () => context.revert();
  }, []);

  return (
    <Wrapper id="about" ref={container}>
      <Inner>
        <LHS ref={imageOne}>
          <RevealCover />
          <ImageDiv>
            <Image src={about_us_img_1} alt="about_us_img_1" quality={100} />
          </ImageDiv>
        </LHS>
        <Middle>
          <TitleCtn>
            <h1 ref={title}>ABOUT</h1>
            <h1 ref={titleTwo}>US</h1>
          </TitleCtn>
          <SubtitleCtn ref={title}>
            <h3>High Quality</h3>
            <p>
              The five-star Bank Hotel was reopened to visitors in 2016. The
              building was renovated and modernized to meet the expectations of
              the most demanding guests. We offer luxurious rooms, numerous
              facilities, and exceptional service.
            </p>
          </SubtitleCtn>
        </Middle>
        <RHS>
          <MainImgCtn ref={imageOne}>
            <Image src={about_us_label} alt="about_us_img_2" />
            <div>
              <RevealCover />
              <ImageDiv>
                <Image
                  src={about_us_img_2}
                  alt="about_us_img_2"
                  quality={100}
                />
              </ImageDiv>
            </div>
          </MainImgCtn>
          <Image src={about_us_img_3} alt="about_us_img_3" />
        </RHS>
      </Inner>
    </Wrapper>
  );
};

export default AboutUs;
