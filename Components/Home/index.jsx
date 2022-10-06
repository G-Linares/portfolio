import React from "react";
import About from "./About";
import Contact from "./Contact";

//here are my componenets
import Hero from "./Hero";
import Services from "./Services";
import Technologies from "./Technologies";
import Work from "./Work";

const Home = () => {
  const HomeStyling = {
    backgroundImage: "url(./images/background.jpg)",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  };
  return (
    <div
      style={{
        ...HomeStyling
      }}
    >
      <Hero />
      <About />
      <Services />
      <Work />
      <Technologies />
      <Contact />
    </div>
  );
};

export default Home;
