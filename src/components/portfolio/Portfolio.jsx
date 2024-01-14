import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "E-commerce en vente d'instruments de musique",
    img: "https://images.pexels.com/photos/63695/pexels-photo-63695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    title: "Suika Game",
    img: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    title: "Relax Mobile App",
    img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

// const Single = ({ item }) => {

//   return (
//   <section>{item.title}</section>
//     )   
// }

// const Portfolio = () => {

//   const ref = useRef();

//   const {ScrollYProgress} = useScroll({
//     target: ref,
//      offset: ["end end", "start start"],
//     });

//     const scaleX = useSpring(ScrollYProgress, {
//       stiffness: 100,
//       damping: 30,
//     })

//   return (
//     <div className="portfolio" ref={ref}>
//       <div className="progress">
//         <h1>Projets :</h1>
//         <motion.div style={{scaleX}} className="progressBar"></motion.div>
//       </div>
//       {items.map((item) => (
//         <Single
//           item={item}
//           key={item.id}
//         />
//       ) )}
//     </div>
//     )
// }

const Single = ({ item }) => {
  const ref = useRef();

  const { ScrollYProgress } = useScroll({
    target: ref,
  });

  // const y = useTransform(ScrollYProgress, [0, 1], [-300, 300]);

  return (
    <section ref={ref}>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer">
            <img
              src={item.img}
              alt=""
            />
          </div>
          <motion.div
            className="textContainer"
            // style={{ y }}
          >
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>Voir</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { ScrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(ScrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div
      className="portfolio"
      ref={ref}
    >
      <div className="progress">
        <h1> Projets : </h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single
          item={item}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default Portfolio;
