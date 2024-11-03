import React from "react";
import './index.css'
import reactLogo from '../../assets/react.svg'

export default function IMac(props) {
  return (
    <div className="background flex column centered gap">
      <div className=" flex column centered">
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
        <p className="transperant">{props.date}</p>
      </div>
      <div>
        <img src={reactLogo} alt="" />
      </div>
      <div className="flex gap flex_button">
        <button>learn more</button>
        <button>Pre-order</button>
      </div>
      <div>
        <p className="colored">Hello, Apple Intelligence</p>
      </div>
    </div>
  );
}
