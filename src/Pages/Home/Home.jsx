import React from "react";
import Banner from "./Compo/Banner";
import Info from "./Compo/Info";
import Services from "./Compo/Services";

const Home = () => {
  return (
    <div className="lg:px-12">
      <Banner />
      <Info />
      <Services />
    </div>
  );
};

export default Home;
