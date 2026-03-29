import React, { useContext } from "react";
import Navbar2 from "./Navbar2";
import { ThemeDataContext } from "../context/ThemeContext";

const Navbar = (props) => {
  const [theme, setTheme] = useContext(ThemeDataContext);

  return (
    <div className={theme}>
      <h4>WanderLust</h4>
      <Navbar2 theme={props.theme} />
    </div>
  );
};

export default Navbar;

{
  /*  {props.children[0]}
      {props.children[1]}
      {props.children[2]} */
}

/* console.log(props.children[0]);
  console.log(props.children[1]);
  console.log(props.children[2]); */
