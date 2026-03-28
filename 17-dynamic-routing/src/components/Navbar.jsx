import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="bg-cyan-700 flex justify-between py-4 items-center text-white px-8 mb-1">
        <h3 className="font-bold">Wander Lust</h3>
        <div className="flex gap-10">
          <Link to="/" className="hover:underline font-medium">
            Home
          </Link>
          <Link to="/about" className="hover:underline font-medium">
            About
          </Link>
          <Link to="/contact" className="hover:underline font-medium">
            Contact
          </Link>
          <Link to="/courses" className="hover:underline font-medium">
            Courses
          </Link>
          <Link to="/product" className="hover:underline font-medium">
            Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
