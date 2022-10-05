import React from "react";
import { format } from "date-fns";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { _id, name, slots } = treatment;
  const formattedDate = format(date, "PP");
  const [user, loading, error] = useAuthState(auth);

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    const booking = {
      treatmentId: _id,
      treatmentName: name,
      date: formattedDate,
      slot,
      patientEmail: user.email,
      patientName: user.displayName,
      phone: e.target.phone.value,
    };

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast(`Appointment is set, ${formattedDate} at ${slot}`);
        } else {
          toast.error(
            `Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`
          );
        }
        setTreatment(null);
      });
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
              {slots.map((slot, index) => (
                <option value={slot} key={index}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Yout Name"
              name="name"
              className="input input-bordered w-full max-w-xs"
              disabled
              value={user?.displayName || ""}
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone Numebr"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email || ""}
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
