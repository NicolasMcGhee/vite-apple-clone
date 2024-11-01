import React from "react";
import "./index.css";

export default function Banner() {
  return (
    <div className="banner roboto-regular">
      <div className="gradient"></div>
      <div></div>
      <div className="header flex">
        <h1>Apple Intelligence is here.</h1>
        <h3 className="container">
          Experience it now on the lastest iPhone, iPad, and Mac models with a
          free software update.
        </h3>
      </div>
      <div className="header flex">
        <h1>MacBook Pro</h1>
        <h3>A work of smart</h3>
        <h4 className="transperant">Available starting 11.8 </h4>
        <div className="flex gap flex_button">
          <button>learn more</button>
          <button>Pre-order</button>
        </div>
      </div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <p className="colored">Hello, Apple Intelligence</p>
      </div>
    </div>
  );
}
