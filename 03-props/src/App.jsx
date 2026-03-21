import React from "react";
import "./App.css";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="container">
      <Card
        user="sai"
        para="This profile belongs to sai"
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
      />
      <Card
        user="sita"
        para="This profile belongs to sita"
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
      />
      <Card
        user="abhi"
        para="This profile belongs to abhi"
        src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfDJ8MHx8fDA%3D"
      />
      <Card
        user="ram"
        para="This profile belongs to ram"
        src="https://images.unsplash.com/photo-1756806555510-476c26bffd6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHwyfDB8fHww"
      />
    </div>
  );
};

export default App;
