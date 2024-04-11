import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
const variant = {
  hidden: {
    height: '100%',
  },
  visible: {
    height: '0%',
    transition: {
      duration: 2,
      ease: [0.83, 0, 0.17, 1],
    },
  },
};

export const imageVariants = {
  hidden: {
    scale: 1.4,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 2,
      ease: [0.83, 0, 0.17, 1],
    },
  },
};

const RevealCover = ({ bgColor }: { bgColor?: string }) => {
  const { pathname } = useRouter();
  return (
    <motion.div
      className="reveal_cover"
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      style={{ backgroundColor: bgColor }}
    ></motion.div>
  );
};

export default RevealCover;

export const ImageDiv = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      variants={imageVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};
