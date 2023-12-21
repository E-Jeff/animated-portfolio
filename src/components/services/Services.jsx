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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          <br />
          Illo dolore amet facere beatae mollitia maxime!
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
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For your</motion.b> Business.
          </h1>
          <motion.button whileHover={{ color: "white" }}>
            What we do
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
          <h2>Branding</h2>
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
          <h2>Branding</h2>
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
          <h2>Branding</h2>
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
