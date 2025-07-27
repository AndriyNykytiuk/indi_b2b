import { delay, motion } from 'framer-motion'
export const leftVariant = {
  hidden: { opacity: 0, x: 0 },
  visible: { opacity: 1, x: 0, transition: {delay:1.5,duration: 3 } },
};
export const leftVariantBottom = {
  hidden: { opacity: 0, x: 0 },
  visible: { opacity: 1, x: 0, transition: {  delay:2.5,duration: 3 } },
};

export const rightVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: i => ({
    opacity: 1,
    x: 0,
    transition: { delay: 3.2, duration: 3 }
  }),
};

export const imageVariant = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: [3.2, 0.75, 1],
  
    opacity: 1,
    transition: { duration: 1 }
  },
};

export const firstStep={
  hidden:{opacity:0, x:0},
  visible:{
    opacity: 1,
    transition: { duration: 1.5 }
  }
}
export const secondStep={
    hidden:{opacity:0, x:0},
  visible:{
    opacity: 1,
    transition: {delay:1.5, duration: 1.5 }
  }
}
export const thirdStep={
    hidden:{opacity:0, x:0},
  visible:{
    opacity: 1,
    transition: {delay:3, duration: 1.5 }
  }
}
export const fourthStep={
    hidden:{opacity:0, x:0},
  visible:{
    opacity: 1,
    transition: {delay:4.5, duration: 1.5 }
  }
}
export const navbar = {
  hidden: {
    opacity: 0,
    y: -50, 
    pointerEvents: 'none', 
  },
  visible: {
    y: [0, 50, 0], 
    opacity: [0, 1],
    pointerEvents: 'auto',
    transition: {
      y: { delay: 4.5, duration: 1.2 },
      opacity: { delay: 4.5, duration: 1.2 },
    },
  },
};

export const menuVariants={
  open:{x:0},
  close:{x:'100%'}
}
