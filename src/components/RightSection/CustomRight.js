import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import "./styles/CustomRight.scss";

export default function CustomRight({ header, src, textContent }) {
  return (
    <div className="card-container">
      <header className="header">{header && header}</header>

      <div className="main-content-container">
     <div className="main-content">
              {src &&  <img src= {src} alt="" />}
          <p className="text-content">{textContent} </p>
          <AiOutlineRight />
        </div>
      </div>
      <div className="main-content-container">
     <div className="main-content">
              {src &&  <img src= {src} alt="" />}
          <p className="text-content">{textContent} </p>
          <AiOutlineRight />
        </div>
      </div>
      <div className="main-content-container">
     <div className="main-content">
              {src &&  <img src= {src} alt="" />}
          <p className="text-content">{textContent} </p>
          <AiOutlineRight />
        </div>
      </div>
      <div className="main-content-container">
     <div className="main-content">
              {src &&  <img src= {src} alt="" />}
          <p className="text-content">{textContent} </p>
          <AiOutlineRight />
        </div>
      </div>

    </div>
  );
}
