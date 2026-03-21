import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <img src={props.src} alt="img" />
        <h3>{props.user}</h3>
        <p>{props.para}</p>
        <button>View Profile</button>
      </div>
    </div>
  );
};

export default Card;
