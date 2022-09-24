import React, { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  let signErrorMessage;

  if (error) {
    signErrorMessage = (
      <>
        <div className="alert alert-error shadow-lg mb-5">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{error?.message}</span>
          </div>
        </div>
      </>
    );
  }
  if (sending) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card  w-96 bg-base-100 shadow-xl mx-auto">
        <div className="card-body">
          <h2 className="card-title">Reset Password!</h2>
          <p>
            Enter the email of your account to reset the password. Then you will
            receive a link to email to reset the password. If you have any issue
            about reset password{" "}
            <Link className="underline" to="/contact-us">
              Contact Us.
            </Link>
          </p>
          <div className="card-actions justify-center">
            <input
              type="email"
              placeholder="Email Adress"
              className="input input-bordered w-full max-w-xs"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {signErrorMessage}
            <button
              onClick={async () => {
                await sendPasswordResetEmail(email);
                alert("Sent email");
              }}
              className="btn btn-primary"
            >
              Reset Password
            </button>
          </div>
          <div className="flex justify-between">
            <p>Sign In your account</p>
            <p>Not a member? Sign Up</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
