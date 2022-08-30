import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="card-title text-secondary mx-auto">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-600 font-bold">Try Another Date</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} avilable.
        </p>
        <div className="card-actions justify-center">
          <label
            htmlFor="booking-modal"
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            className="btn modal-button btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary uppercase"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
