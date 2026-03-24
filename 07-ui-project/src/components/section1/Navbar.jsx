import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-6 px-19">
      <h4 className="bg-black text-white rounded-full py-4 px-6 uppercase hover:cursor-pointer">
        Target Audience
      </h4>
      <button className="bg-gray-500 text-white py-4 px-6 rounded-full uppercase hover:cursor-pointer">
        Digital banking Platform
      </button>
    </div>
  );
};

export default Navbar;
