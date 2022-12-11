import React from "react";

import pingLogo from "../images/logo.svg";

function ThankYou({ setIsSubmitted }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="wrapper flex justify-center items-center flex-col px-5 ">
        <div className="card shadow-2xl rounded-3xl p-20">
          <div className="susbscribe-container flex flex-col justify-center items-center ">
            <img className="w-14 md:w-16" src={pingLogo} alt="Ping Logo" />
            <h1 className="mt-10 text-2xl font-light md:text-4xl">
              Thanks for{" "}
              <span className="font-bold text-black">subscribing!</span>
            </h1>
            <h2 className="text-xs mt-4 md:text-base">
              You will get notified when our website launches
            </h2>
          </div>
          <div className="form-container flex  justify-center flex-col w-full md:flex-row md:gap-4 ">
            <button
              onClick={() => setIsSubmitted(false)}
              className="button-form font-semibold text-gray-50 text-xs rounded-full px-6 py-3 shadow-xl md:w-72 mt-4  md:mt-8 md:text-sm "
              type="submit"
            >
              GO BACK
            </button>
          </div>

          <footer className="text-xs mt-6 text-center">
            &copy; Copyright Ping. All rigths reserved.
          </footer>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
