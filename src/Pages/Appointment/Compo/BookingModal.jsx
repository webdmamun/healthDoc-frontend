import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { _id, name, slots } = treatment;

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    setTreatment(null);
    console.log(slot);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 className="font-bold text-lg text-secondary text-center">
            Booking for: {name}
          </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 justify-items-center mt-2"
          >
            <input
              type="text"
              readOnly
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              <option defaultValue>Select a time slot</option>
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Yout Name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              placeholder="Phone Numebr"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered w-full max-w-xs"
            />

            <input
              type="submit"
              value="Submit"
              className="input input-bordered btn btn-accent w-full max-w-xs"
            />
          </form>
          {/* <div className="modal-action">
            <label htmlFor="booking-modal" className="btn">
              Submit
            </label>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
