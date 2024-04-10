import Image from 'next/image';
import styled from 'styled-components';
import label from '@/public/images/our_gallery/label.svg';
import center_img from '@/public/images/our_gallery/center_img.png';
import scattered_img_1 from '@/public/images/our_gallery/scattered_img_1.png';
import scattered_img_2 from '@/public/images/our_gallery/scattered_img_2.png';
import scattered_img_3 from '@/public/images/our_gallery/scattered_img_3.png';
import scattered_img_4 from '@/public/images/our_gallery/scattered_img_4.png';
import yellow_polygon from '@/public/svgs/yellow_polygon.svg';
import { ParallaxText } from '@/components/General/ParallaxText';
import Reveal from '@/components/General/Reveal';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import RevealCover, { ImageDiv } from '@/components/General/ImageReveal';
import {
  CenterImgCtn,
  Header,
  Inner,
  Main,
  ParallaxTextCtn,
  ScatteredImgCtn,
  SmallText,
  White,
  Wrapper,
} from './styles';
import useIsMobile from '@/libs/useIsMobile';

gsap.registerPlugin(ScrollTrigger);

const images = [
  scattered_img_1,
  scattered_img_2,
  scattered_img_3,
  scattered_img_4,
];

const OurGallery = () => {
  const isMobile = useIsMobile();

  const container = useRef<HTMLDivElement | null>(null);
  const imagesRef = useRef<any>([]);

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

      tl.to(imagesRef.current[0], { y: -150 }, 0);
      tl.to(imagesRef.current[1], { y: -300 }, 0);
      tl.to(imagesRef.current[2], { y: -250 }, 0);
      tl.to(imagesRef.current[3], { y: -200 }, 0);
    });

    return () => context.revert();
  }, [isMobile]);
  return (
    <Wrapper ref={container}>
      <Inner>
        <h2>
          <Reveal>Art & Congress Hall</Reveal>
        </h2>

        <Main>
          <Header>
            <Image src={label} alt="label" />
            <Reveal textDelay={0.5} slideDelay={0.5} width="auto">
              <h1>Our Gallery</h1>
            </Reveal>
            <Reveal textDelay={0.5} slideDelay={0.5} width="fit-content">
              <p>
                Explore our spacious rooms with the gorgeous view to the
                historical part of the city. Each room has an exclusive interior
                design decorated with modern art pieces that will make your stay
                unforgettable.
              </p>
            </Reveal>
          </Header>
          <CenterImgCtn>
            <div>
              <RevealCover />
              <ImageDiv>
                <Image src={center_img} alt="center_image" quality={100} />
              </ImageDiv>
            </div>
            <SmallText>
              <Image src={yellow_polygon} alt="yellow_polygon" />
              <Reveal>
                <p>
                  It is our pleasure to meet your most unrealistic expectations.
                </p>
              </Reveal>
            </SmallText>
          </CenterImgCtn>
          <ScatteredImgCtn>
            {images.map((image, i) => (
              <div key={i} ref={(ref) => (imagesRef.current[i] = ref)}>
                <Image src={image} alt="scattered_img" />
              </div>
            ))}
          </ScatteredImgCtn>
        </Main>
      </Inner>
      <ParallaxTextCtn>
        <ParallaxText baseVelocity={-3}>
          Bank hotel <White>Bank__hotel© </White> Bank hotel
        </ParallaxText>
        <ParallaxText baseVelocity={3}>
          Bank hotel <White>Bank__hotel© </White> Bank hotel
        </ParallaxText>
      </ParallaxTextCtn>
    </Wrapper>
  );
};

export default OurGallery;
