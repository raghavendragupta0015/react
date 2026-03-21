import React from "react";
import "../App.css";

function Card() {
  const user = "Sai";
  return (
    <div>
      <div className="card">
        <h1>Hello, Gamers</h1>
        <h3>Hii, {user}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
          laboriosam.
        </p>
      </div>
    </div>
  );
}

export default Card;
