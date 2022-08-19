import React from "react";
import flouride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "Fluoride is a chemical that is used to treat teeth and gums. It is used to remove cavities and fill in missing teeth.",
      img: flouride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "Fluoride is a chemical that is used to treat teeth and gums. It is used to remove cavities and fill in missing teeth.",
      img: cavity,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description:
        "Fluoride is a chemical that is used to treat teeth and gums. It is used to remove cavities and fill in missing teeth.",
      img: whitening,
    },
  ];
  return (
    <div className="my-20">
      <div className="text-center">
        <h2 className="text-primary text-xl font-bold uppercase">
          Our Services
        </h2>
        <h2 className="text-4xl">Services We Provide</h2>
      </div>
      <div className="grid sm:grid-cols-1  lg:grid-cols-3 gap-4 justify-items-center mt-5">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
