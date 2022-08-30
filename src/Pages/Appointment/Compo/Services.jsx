import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";

const Services = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
        {services.map((service) => (
          <Service
            key={service.id}
            setTreatment={setTreatment}
            service={service}
          ></Service>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          setTreatment={setTreatment}
          treatment={treatment}
        ></BookingModal>
      )}
    </>
  );
};

export default Services;
