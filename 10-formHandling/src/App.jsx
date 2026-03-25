import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");

  function handleEvent(e) {
    e.preventDefault();
    console.log("form submitted by", title);
    setTitle("");
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleEvent(e);
        }}
      >
        <input
          type="text"
          id="input"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
