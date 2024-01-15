import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portefolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
// import ContactUs from "./components/contacttest/Contacttest";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section>
        <Parallax type="services" />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portefolio />
      <section id="Contact">
        <Contact />
        {/* <ContactUs /> */}
      </section>
    </div>
  );
};

export default App;
