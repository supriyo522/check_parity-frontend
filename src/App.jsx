import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const handleCheck = () => {
    if (value.trim() === "" || isNaN(value)) {
      setResult("Please enter a valid number");
    } else {
      const num = Number(value);
      if (num % 2 === 0) {
        setResult("Even");
      } else {
        setResult("Odd");
      }
    }
  };

  return (
    <div className="container">
      <h1>Check Even or Odd</h1>
      <input
        type="text"
        name="number"  // ✅ required by tests
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={handleCheck}>Check</button>
      <p>{result}</p>
    </div>
  );
}

export default App;
