import React, { useState } from "react";
import AppointmentBanner from "./Compo/AppointmentBanner";
import Services from "./Compo/Services";

const Appointment = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="lg:px-12">
      <AppointmentBanner date={date} setDate={setDate} />
      <Services date={date} />
    </div>
  );
};

export default Appointment;
