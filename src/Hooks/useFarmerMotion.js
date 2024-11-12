// ===== Framer Motion Variants ======
// This file contains the animation variants for Framer

const topSideVariants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
    },
  },
};

const ModaltopSideVariants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
  exit:{
    y:500,
    opacity:0
  }
};

const slidetoLeft = {
  initial: {
    x: "50px",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
    },
  },
  exit: {
    x: "50px",
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const slidetoRight = {
  initial: {
    x: " -50px",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
    },
  },
  exit: {
    x: "-5000px",
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const expandWidth = {
    initial: {
      width: 0,
      opacity: 0,
      right: 0,
    },
    animate: {
      width: "100%",
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
const gridAnimateVariants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const itemAnimateVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const TextAnimateVariants = (i) => {
  return {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: i / 10,
      },
    },
  };
};

const scaleAnimateVariant = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: 1,
    rotate: [0, 30, 0, 30, 0],
    transition: {
      duration: 1.2,
      delay: 0.1,
      repeat: Infinity,
    },
  },
};

// Shake Anim
const topAnimShakeVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    y: [500, -50, 0],
    opacity: 1,
    transition: {
      duration: 2,
      delay: 0.4,
      staggerChildren: 0.1,
    },
  },
};

// modal open animation
// ============================ EXPORT =============================
const useFarmerMotion = () => {
  return {
    topSideVariants,
    ModaltopSideVariants,
    expandWidth,
    slidetoLeft,
    slidetoRight,
    gridAnimateVariants,
    itemAnimateVariants,
    TextAnimateVariants,
    scaleAnimateVariant,
    topAnimShakeVariants,
  };
};

export default useFarmerMotion;
