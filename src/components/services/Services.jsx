import "./services.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
      type: "spring",
      stiffness: 50,
    },
  },
};
const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      //   initial="initial"
      //   whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer">
        <p>
        Développeur web passionné, ma mission est de vous accompagner dans la conception et la création de votre site internet. .
          <br />
          Je vous propose des solutions adaptées à vos besoins et à votre budget. 
        </p>
        <hr />
      </motion.div>
      <motion.div
        className="titleContainer"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <div className="title">
          <img
            src="/people.webp"
            alt=""
          />
          <h1>
            Des <motion.b whileHover={{ color: "orange" }}>Idées</motion.b> unique
          </h1>
        </div>
        <div className="title">
          <h1>
            Pour vos <motion.b whileHover={{ color: "orange" }}>Projets</motion.b>
          </h1>
          <motion.button whileHover={{ color: "white" }}>
            Ce que nous faisons
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        className="listContainer"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Fonctionnalité I</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            odio eum. Blanditiis in dolores unde, minima ullam dolorum ratione a
            praesentium nemo aliquam repudiandae possimus consequatur nam
            nostrum, quaerat quia error repellat fuga quam aliquid, corporis
            enim? Dolor, rerum possimus?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Fonctionnalité II</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            odio eum. Blanditiis in dolores unde, minima ullam dolorum ratione a
            praesentium nemo aliquam repudiandae possimus consequatur nam
            nostrum, quaerat quia error repellat fuga quam aliquid, corporis
            enim? Dolor, rerum possimus?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Fonctionnalité III</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            odio eum. Blanditiis in dolores unde, minima ullam dolorum ratione a
            praesentium nemo aliquam repudiandae possimus consequatur nam
            nostrum, quaerat quia error repellat fuga quam aliquid, corporis
            enim? Dolor, rerum possimus?
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
