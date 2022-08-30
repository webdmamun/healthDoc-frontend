import React from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ date, setDate }) => {
  let footer = (
    <p className="text-muted text-center text-xl">
      Please pick a day from the calendar.
    </p>
  );
  if (date) {
    footer = (
      <p className="text-xl text-primary text-center">
        Avilable Appointments on
        <span className="text-accent text-3xl"> {format(date, "PP")}</span>
      </p>
    );
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="max-w-lg rounded-lg shadow-2xl"
            alt="chair"
          />
          <div>
            <DayPicker mode="single" selected={date} onSelect={setDate} />
          </div>
        </div>
      </div>
      {/* Avilable Appointments */}
      <div>
        <p>{footer}</p>
      </div>
    </div>
  );
};

export default AppointmentBanner;
