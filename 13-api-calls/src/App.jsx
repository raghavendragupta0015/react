import React from "react";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  async function getData() {
    // const response = await fetch("https://picsum.photos/v2/list");

    // const jsonData = await response.json();
    // console.log(response);
    // console.log(jsonData);
    // jsonData.map((ele) => {
    //   console.log(ele.id, ele.author, ele.url);
    // });

    const response = await axios.get("https://picsum.photos/v2/list");
    const jsonData = response.data;
    // console.log(response);
    // console.log(jsonData);
    setData(jsonData);
  }
  return (
    <div>
      <div>
        {data.map((ele) => (
          <h3>
            {ele.id} {ele.author} {ele.url}
          </h3>
        ))}
      </div>
      <button onClick={getData}>Get Data</button>
    </div>
  );
};

export default App;
