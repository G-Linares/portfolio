import Head from "next/head";
import React from "react";
import { Home as HomeComponent } from "../Components";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home Page | Portfolio</title>
      </Head>
      <HomeComponent />
    </>
  );
};

export default Home;
