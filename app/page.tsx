"use client";
import React, { useState } from "react";
import SignUp from "./signup/signup";
import Login from "./login/login";

function page() {
  const [showSignup, setShowSignup] = useState(false);
  const [activeButton, setActiveButton] = useState("login");

  const handleSignupClick = () => {
    setShowSignup(true);
    setActiveButton("signup");
  };
  const handleLoginClik = () => {
    setShowSignup(false);
    setActiveButton("login");
  };
  return (
    <>
      <div
        className="bg-center bg-cover relative"
        style={{ backgroundImage: "url(/assets/background/bg.jpg)" }}
      >
        <div className="bg-gray-900 opacity-90 absolute h-full w-full top-0 left-0 pointer-events-none"></div>
        <div className="relative">
          {/* <Login /> */}
          <div className="min-h-screen flex items-center justify-center bg-scroll z-10">
            <div className="bg-gray-900 opacity-100 p-8 shadow-md rounded-md w-96">
              <div className="text-2xl text-gray-50  font-semibold mb-3 flex ">
                <h2>
                  <button
                    className={`pl-5 ${
                      activeButton === "signup" && " text-gray-600"
                    }`}
                    onClick={handleLoginClik}
                  >
                    Login
                  </button>
                </h2>
                &nbsp;&nbsp;&nbsp;<p className="text-gray-600">|</p>
                <h2>
                  <button
                    className={`pl-5 ${
                      activeButton === "login" && " text-gray-600 "
                    }`}
                    onClick={handleSignupClick}
                  >
                    Sign Up
                  </button>
                </h2>
              </div>
              {showSignup && <SignUp />}
              {!showSignup && <Login />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
