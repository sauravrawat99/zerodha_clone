import React from "react";
import Award from "./Award";
import Education from "./Education";
import Hero from "./Hero";
import Statis from "./Statis";
import Pricing from "./pricing";

import Openaccount from "../Openaccount";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Award />
      <Statis />
      <Pricing />
      <Education />
      <Openaccount />
    </>
  );
};

export default HomePage;
