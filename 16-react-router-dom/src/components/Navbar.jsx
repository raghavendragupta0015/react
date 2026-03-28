import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-evenly h-20 items-center bg-pink-300">
        <h3 className="font-bold">Wander Lust</h3>

        <div className="flex gap-40 justify-around">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/product" className="hover:underline">
            Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
