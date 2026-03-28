import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const navigate = useNavigate();
  return (
    <div className="px-3 bg-gray-700 py-4">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-green-700 text-white font-medium px-6 py-3 cursor-pointer active:scale-95 me-3 rounded"
      >
        Return To Home
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-green-700 text-white font-medium px-6 py-3 cursor-pointer active:scale-95 me-3 rounded"
      >
        Go Back
      </button>
      <button
        onClick={() => {
          navigate(+1);
        }}
        className="bg-green-700 text-white font-medium px-6 py-3 cursor-pointer active:scale-95 me-3 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Navbar2;
