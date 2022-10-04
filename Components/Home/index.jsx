import React from "react";
import About from "./About";

import Hero from "./Hero";
import Services from "./Services";
import Work from "./Work";

const Home = () => {
  const HomeStyling = {
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  };
  return (
    <div
      className="bg-red-500"
      style={{
        ...HomeStyling
      }}
    >
      <Hero />
      <About />
      <Services />
      <Work />
    </div>
  );
};

export default Home;
