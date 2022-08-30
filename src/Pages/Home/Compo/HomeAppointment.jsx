import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appintmentBg from "../../../assets/images/appointment.png";

const HomeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${appintmentBg})`,
        backgroundSize: "cover",
      }}
      className="flex justify-center items-center"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-150px]" src={doctor} alt="HealthDoc Doctor" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl text-primary my-6">Appointment</h3>
        <h2 className="text-3xl text-white my-6">Make an Appointment Today</h2>
        <p className="text-white my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          molestiae iusto veniam! Dolore possimus consequatur totam veritatis
          ipsam reiciendis in minus porro aliquid distinctio quidem illo optio
          earum, modi quia nihil excepturi ab, voluptatem praesentium beatae
          quos hic? Ex, eveniet?
        </p>
        <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HomeAppointment;
