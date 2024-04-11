import { motion } from 'framer-motion';

const PageTransition = (OgComponent: any) => {
  // eslint-disable-next-line react/display-name
  return () => (
    <>
      <OgComponent />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className="slide__in"
      />
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className="slide__out"
      />
    </>
  );
};

export default PageTransition;
