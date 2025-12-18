import React from "react";
import Banner from "./Home/Banner";
import Contact from "./Home/Contact";
import About from "./Home/About";
import Why from "./Home/Why";
import Services from "./Home/Services";
import Trailer from "./Home/Trailer";
import ISK from "./Home/ISK";
import Testimony from "./Home/Testimony";

function Home() {
  return (
    <>
      <Banner />
      <About />
      <Why />
      <Services />
      <Trailer />
      <ISK />
      <Testimony />
      <Contact />
    </>
  );
}

export default Home;
