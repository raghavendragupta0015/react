import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  useEffect(() => {
    changeA();
  }, [a]);

  useEffect(() => {
    changeB();
  }, [b]);

  function changeA() {
    console.log("A value is changing");
  }
  function changeB() {
    console.log("B value is changing");
  }
  // useEffect(() => {
  //   console.log("Mounted");

  //   return () => {
  //     console.log("Unmounted");
  //   };
  // }, []);

  // function random() {
  //   const a = Math.floor(Math.random() * 10) + 1;
  //   console.log(a);
  // }
  // random();

  return (
    <div>
      <h1>react</h1>
      <h3>{a}</h3>
      <button
        onClick={() => {
          setA(a + 1);
        }}
      >
        Increment
      </button>
      <h3>{b}</h3>
      <button
        onClick={() => {
          setB(b - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default App;
