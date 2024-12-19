import { useState } from "react";
import { add } from "./calculator";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  // Handle input changes
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Handle the calculate button click
  const handleCalculate = () => {
    try {
      const res = add(input); // Call the add function with the user input.
      setResult(res); // Set the result.
    } catch (error) {
      setResult(error.message); // Display error message if there is any.
    }
  };

  // Handle the clear button click
  const handleClear = () => {
    setInput(""); // Clear the input field.
    setResult(0); // Reset the result to 0.
  };

  return (
    <div className="container">
      <h1>String Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter numbers"
        className="input-field"
      />
      <button onClick={handleCalculate} className="calculate-button">
        Calculate
      </button>
      <button onClick={handleClear} className="clear-button">
        Clear
      </button>
      <div className="result">
        <h2>Result: {result}</h2>
      </div>
    </div>
  );
}

export default App;
