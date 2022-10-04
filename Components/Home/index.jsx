import React from "react";

import Hero from "./Hero";

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
    </div>
  );
};

export default Home;
