import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className="card lg:max-w-xl bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{review.review}</p>

        <div className="flex items-center mt-5">
          <div className="avatar">
            <div className="w-17 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5">
              <img src={review.img} alt="people" />
            </div>
          </div>

          <div>
            <h4 className="text-xl">{review.name}</h4>
            <h6>{review.location}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
