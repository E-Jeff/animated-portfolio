import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 1.5,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 15,
    },
  },
}


const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Jeffrey Essimi</motion.h2>
          <motion.h1 variants={textVariants}>Développeur Full Stack</motion.h1>
          <motion.div
            variants={textVariants}
            className="buttons"
          >
            <motion.button variants={textVariants}>
              Télécharger mon CV
            </motion.button>
            <motion.button variants={textVariants}>Contacter Moi</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        HTML/CSS PHP JS REACT SQL
      </motion.div>

      <div className="imageContainer">
        <img
          src="/hero2.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
