import React from "react";
import clock from "../../../assets/icons/clock.svg";
import phone from "../../../assets/icons/phone.svg";
import marker from "../../../assets/icons/marker.svg";

const Info = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-5 text-white bg-base-200">
      {/* card one start */}
      <div className="card lg:card-side bg-gradient-to-r from-secondary to-primary shadow-xl px-3">
        <figure>
          <img src={clock} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Opening Hours</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>
      </div>
      {/* card one end */}
      {/* card two start */}
      <div className="card lg:card-side bg-accent shadow-xl px-3">
        <figure>
          <img src={marker} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Visit our location</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>
      </div>
      {/* card two end */}
      {/* card three start */}
      <div className="card lg:card-side bg-gradient-to-r from-secondary to-primary shadow-xl px-3">
        <figure>
          <img src={phone} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Contact us now</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>
      </div>
      {/* card three end */}
    </section>
  );
};

export default Info;
