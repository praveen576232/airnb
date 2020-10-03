import "./Card.css";
import React from "react";

function Card({ src, title, description, price }) {
  return (
    <div className="card">
      <img alt="" src={src}></img>
      <div className="card__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
}

export default Card;
