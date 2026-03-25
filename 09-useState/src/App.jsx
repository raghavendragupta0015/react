import React, { useState } from "react";

const App = () => {
  /* const [num, setNum] = useState(0);
  function handleIncrement() {
    console.log(num);
    setNum(num + 1);
    console.log(num);
  }
  function handleDecrement() {
    console.log(num);
    num > 0 ? setNum(num - 1) : null;

    console.log(num);
  } */
  const [obj, setObj] = useState({ user: "sai", age: 19 });

  function handleChange() {
    const newObj = { ...obj };
    newObj.user = "satya";
    newObj.age = 20;
    setObj(newObj);
    console.log(obj);
  }

  return (
    <div>
      {/* <h1>{num}</h1>
      <button onClick={handleIncrement}>Increase</button>
      <button onClick={handleDecrement}>Decrease</button> */}
      <h2>
        {obj.user} {obj.age}
      </h2>
      <button onClick={handleChange}>change</button>
    </div>
  );
};

export default App;
