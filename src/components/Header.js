import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div name='home' className="banner">
      <Navbar />
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>Pizza Delivery</h3>
            <h1>MAESTRO PIZZINI</h1>
            <p>
            FREEDOM'S TASTY, COME AND TAKE A BITE OUT OF IT. PURE, UNADULTERATED, DON'T-TELL-ME-WHAT-TO-DO-FREEDOM, THE KIND THAT MAKES YOU FEEL, WELL... FREE. SO GRAB YOUR TASTE BUDDIES - AND LET'S HUSTLE.
            </p>
            <div className="banner__btn">
              <a href="" className="btn btn-smart">DELIVERY NOW</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
