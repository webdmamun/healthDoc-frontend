import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import ReviewCard from "./ReviewCard";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
      img: people1,
    },
    {
      id: 2,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
      img: people2,
    },
    {
      id: 3,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
      img: people3,
    },
  ];
  return (
    <section>
      <div className="flex justify-between my-20">
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonials</h4>
          <h2 className="text-3xl">What our Patients Says</h2>
        </div>
        <div>
          <img src={quote} alt="Qoute HealthDoc" className="w-24 lg:w-48" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review}></ReviewCard>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
