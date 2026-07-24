export const pageStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

export const riseIn = {
  hidden: { opacity: 0, y: 28, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export const softFade = {
  hidden: { opacity: 0, scale: 0.98 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export const floating = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 4.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};
