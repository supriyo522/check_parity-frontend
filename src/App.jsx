import React, { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const checkNumber = () => {
    const num = Number(number);

    if (isNaN(num)) {
      setMessage("Not a valid number!");
    } else if (num % 2 === 0) {
      setMessage(`The number ${num} is even!`);
    } else {
      setMessage(`Oops, ${num} is odd!`);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Even/Odd Checker</h1>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={checkNumber}>Check</button>
      <p>{message}</p>
    </div>
  );
}

export default App;