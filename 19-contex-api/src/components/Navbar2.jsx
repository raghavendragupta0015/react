import React, { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Navbar2 = (props) => {
  const [theme, setTheme] = useContext(ThemeDataContext);

  return (
    <div className="nav2">
      <h4>Home</h4>
      <h4>About</h4>
      <h4>Listings</h4>
      <h4>Contact Us</h4>
      <h4>{theme}</h4>
    </div>
  );
};

export default Navbar2;
