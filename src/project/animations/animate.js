export const animateView = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      delay: 0.2,
    },
  },
};
export const slideCollection = {
  initial: {
    x: "-100vw",
  },
  animate: {
    x: "0vw",
    transition: {
      duration: 0.5,
    },
  },
};

export const cardAnimate = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.7 * i,
    },
  }),
};

export const slideTitle = {
  initial: {
    x: "0vw",
  },
  animate: {
    x: "-100vw",
    transition: {
      duration: 0.5,
    },
  },
};

export const pageTransition = {
  initial:{
      opacity:0,
  },
  animate:{
      opacity:1
  },
  exit:{
      opacity:0,
      transition:{
        duration: 2
      }
  }
}