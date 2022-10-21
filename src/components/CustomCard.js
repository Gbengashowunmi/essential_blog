import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import "./styles/Architect.scss";
import "./styles/CustomCard.scss";

export default function CustomCard({
  title,
  src,
  author,
  desfontSize = "14px",
  datefontSize = "14px",
  authorIcon,
}) {
  return (
    <div className="architect">
      <div className="image-container">
        <img src={src && src} alt="" />
        <div className="button">
          <button>Future</button>
          <h5>{title && title}</h5>
          <p>{author && author}</p>
        </div>
      </div>
      <div className="architect-details">
        <span>
          <p>{authorIcon && authorIcon}</p> <p>2</p>
          <p style={{ fontSize: datefontSize }}>
            <AiOutlineClockCircle /> May 21, 2015
          </p>
        </span>
        <p style={{ fontSize: desfontSize }}>
          Hi everyone! This is my architectural concept. I wanted to get snowy
          atmosphere. That is quick matte painting sketch. I hope you enjoy it!
          Iphone dolo... R
        </p>
      </div>
    </div>
  );
}
