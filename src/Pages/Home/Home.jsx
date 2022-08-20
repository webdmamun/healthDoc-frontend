import React from "react";
import Banner from "./Compo/Banner";
import HomeAppointment from "./Compo/HomeAppointment";
import Info from "./Compo/Info";
import Services from "./Compo/Services";
import Testimonials from "./Compo/Testimonials";

const Home = () => {
  return (
    <div className="lg:px-12">
      <Banner />
      <Info />
      <Services />
      <HomeAppointment />
      <Testimonials />
    </div>
  );
};

export default Home;
