import React, { useState } from "react";
import "./CalculatorApp.css"

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const clear = () => {
    setInput("");
  };

  return (
    <div className="container">
      <h2>Simple Calculator</h2>
      <input value={input} readOnly />
      <div className="keypad">
        {["1","2","3","+","4","5","6","-","7","8","9","*","0",".","=","/"].map((val) => (
          <button
            key={val}
            onClick={() => (val === "=" ? calculate() : handleClick(val))}
          >
            {val}
          </button>
        ))}
        <button onClick={clear} >
          C
        </button>
      </div>
    </div>
  );
}

export default App;
