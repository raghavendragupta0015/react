import React from "react";

const App = () => {
  return (
    <div>
      <button
        onMouseEnter={() => {
          console.log("mouse entered");
        }}
        onClick={() => {
          console.log("button clicked!");
        }}
      >
        click me!
      </button>
      <br />
      <input
        type="text"
        placeholder="enter username"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
    </div>
  );
};

export default App;
