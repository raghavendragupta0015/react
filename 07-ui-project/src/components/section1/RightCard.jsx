import React from "react";
import { ArrowRight } from "lucide-react";

const RightCard = (props) => {
  return (
    <div className="h-full w-70 rounded-2xl overflow-hidden relative shrink-0">
      <img src={props.src} alt="img" className="h-full w-full object-cover" />
      <div className="h-full w-full top-0 left-0 absolute flex flex-col justify-between p-6">
        <h1 className="h-12 w-12 rounded-full bg-white flex justify-center items-center font-semibold text-2xl">
          {props.id + 1}
        </h1>
        <div>
          <p className="text-lg leading-relaxed text-white mb-2">
            {props.desc}
          </p>
          <div className="flex justify-between">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full ">
              {props.remarks}
            </button>
            <ArrowRight className="h-10 w-10 rounded-full  flex justify-center items-center text-2xl text-white bg-blue-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
