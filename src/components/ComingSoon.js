import React from "react";

import pingLogo from "../images/logo.svg";
import dashboard from "../images/illustration-dashboard.png";

import { FaFacebookF } from "react-icons/fa/";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai/";

function ComingSoon({ setIsSubmitted }) {
  const isValid = () => {
    const email = document.querySelector(".email-form");
    const invalidEmail = document.querySelector(".invalid-email");
    if (email.value !== "") {
      if (email.checkValidity()) {
        setIsSubmitted(true);
      }
    } else {
      invalidEmail.innerHTML = "Please provide a valid email adress";
      invalidEmail.classList.remove("sm:hidden");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="wrapper flex justify-center items-center flex-col px-5">
        <div className="susbscribe-container flex flex-col justify-center items-center ">
          <img className="w-14 mt-24 md:w-16" src={pingLogo} alt="Ping Logo" />
          <h1 className="mt-10 text-2xl font-light md:text-4xl">
            We are launching <span className="font-bold text-black">soon!</span>
          </h1>
          <h2 className="text-sm mt-4 md:text-base">
            Susbcribe and get notified
          </h2>
        </div>
        <div className="form-container flex  justify-center flex-col w-full md:flex-row md:gap-4 ">
          <input
            className="email-form mt-8 text-xs px-6 py-3 rounded-full w-full md:text-sm "
            type="email"
            name="email"
            id="email"
            placeholder="Your email adress.."
          />
          <div className="invalid-email w-full text-center pt-2 text-xs sm:hidden md:hidden"></div>
          <button
            onClick={() => isValid()}
            className="button-form font-semibold text-gray-50 text-xs rounded-full px-6 py-3 shadow-xl md:w-72 mt-4  md:mt-8 md:text-sm "
            type="submit"
          >
            Notify me
          </button>
        </div>

        <img
          className="dashboard mt-10 drop-shadow-lg"
          src={dashboard}
          alt="Dashboard illustration"
        />
        <ul className="mt-28 flex gap-3 hover:cursor-pointer">
          <a href="https://www.facebook.com/">
            <li>
              <FaFacebookF />
            </li>
          </a>
          <a href="https://www.twitter.com/">
            <li>
              <AiOutlineTwitter />
            </li>
          </a>
          <a href="https://www.twitter.com/">
            <li>
              <AiFillInstagram />
            </li>
          </a>
        </ul>
        <footer className="text-xs mt-6">
          &copy; Copyright Ping. All rigths reserved.
        </footer>
      </div>
    </div>
  );
}

export default ComingSoon;
