import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const PreloaderStyled = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background: url('/images/restaurant/curve.png'), var(--bg-color);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 9;

  @media (max-width: 768px) {
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const PreloaderInner = styled(motion.div)`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;

  span {
    font-size: 3.5rem;
    font-weight: 700;
    font-family: var(--font-secondary);
    color: var(--text-color-secondary);
    text-transform: uppercase;
    letter-spacing: 0.5rem;

    @media (max-width: 768px) {
      font-size: 2rem;
      width: 100%;
    }
  }
`;

const InitialCover = () => {
  const animate = {
    initial: {
      y: '100%',
    },
    open: (i: number) => ({
      y: '0%',
      transition: { duration: 2, delay: 0.1 * i, ease: [0.76, 0, 0.24, 1] },
    }),
    exit: (i: number) => ({
      y: '-100%',
      transition: { duration: 2, delay: 0.1 * i, ease: [0.76, 0, 0.24, 1] },
    }),
  };

  const bgVariant = {
    hidden: {
      scaleY: 1,
    },
    visible: {
      scaleY: 0,
      transformOrigin: 'top',
      height: 0,
      transition: { duration: 2, delay: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const ref = useRef(null);
  const [triggerExit, setTriggerExit] = useState(false);

  useEffect(() => {
    // Trigger exit animation after a delay
    const exitTimeout = setTimeout(() => {
      setTriggerExit(true);
    }, 2500); // Change the delay as needed

    return () => clearTimeout(exitTimeout);
  }, []);

  return (
    <PreloaderStyled
      variants={bgVariant}
      initial="hidden"
      animate={triggerExit ? 'visible' : ''}
    >
      <PreloaderInner ref={ref}>
        {'Bank Hotel'.split('').map((char, i) => (
          <motion.span
            key={i}
            variants={animate}
            initial="initial"
            animate={triggerExit ? 'exit' : 'open'}
            custom={i}
          >
            {char}
          </motion.span>
        ))}
      </PreloaderInner>
    </PreloaderStyled>
  );
};

export default InitialCover;
