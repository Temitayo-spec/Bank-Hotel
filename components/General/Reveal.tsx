import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  width?: 'fit-content' | '100%' | string;
  textDelay?: number;
  slideDelay?: number;
  overflow?: 'hidden' | 'visible';
}

const Reveal: React.FC<Props> = ({
  children,
  width = 'fit-content',
  textDelay = 0.25,
  slideDelay = 0,
  overflow = 'hidden',
}) => {
  const controls = useAnimation();
  const slideControls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      slideControls.start('visible');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  return (
    <div
      style={{
        position: 'relative',
        width: width,
        height: 'fit-content', // 'fit-content' | '100%
        overflow: overflow,
      }}
      ref={ref}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: textDelay }}
        style={{ width }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: 'easeIn', delay: slideDelay }}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: 'var(--text-color-secondary)',
          pointerEvents: 'none',
          zIndex: 200,
        }}
      />
    </div>
  );
};

export default Reveal;
