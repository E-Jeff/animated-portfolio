import "./portfolio.scss";
// import { motion, useScroll, useRef, useSpring } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Social Media App",
    img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    title: "Rampa UI Design",
    img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    title: "E-commerce Web Design",
    img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 4,
    title: "Relax Mobile App",
    img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const Single = ({ item }) => {
//   const ref = useRef();

  return (
    <section>
      <div className="container">
        <img
          src={item.img}
          alt=""
        />
        <div className="textContainer">
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
//   const ref = useRef();

//   const { ScrollYProgress } = useScroll({
//     target: ref,
//     offset: ["end end", "end start"],
//   });

//   const scaleX = useSpring(ScrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//   });

  return (
    <div
      className="portfolio"
    //   ref={ref}
    >
      <div className="progress">
        <h1> Projets : </h1>
        <div
        //   style={{ scaleX }}
          className="progressBar"
        ></div>
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
