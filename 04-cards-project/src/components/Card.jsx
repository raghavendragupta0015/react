import React from "react";
import { Bookmark } from "lucide-react";

const Card = (props) => {
  console.log(props);

  return (
    <div className="card">
      <div className="top">
        <img src={props.src} alt="img" />
        <button>
          Save <Bookmark size={10} />
        </button>
      </div>
      <div className="center">
        <h4>
          {props.companyName} <span>{props.days} days ago</span>
        </h4>
        <h4>{props.work}</h4>
        <div>
          <button>{props.btn1}</button>
          <button>{props.btn2}</button>
        </div>
      </div>
      <div className="bottom">
        <h4>
          {props.pay} <br />
          <span>{props.workPlace}</span>
        </h4>

        <button>Apply now</button>
      </div>
    </div>
  );
};

export default Card;
