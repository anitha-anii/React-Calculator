import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  function performOperation(operation) {
    if (num1.trim() === "" || num2.trim() === "") {
      setErrorMessage("Error: Input fields cannot be empty.");
      setSuccessMessage("");
      setResult("");
      return;
    }
  
    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);
  
    if (isNaN(parsedNum1) || isNaN(parsedNum2)) {
      setErrorMessage("Error: Please enter valid numbers.");
      setSuccessMessage("");
      setResult("");
      return;
    }
  
    setErrorMessage("");
    setSuccessMessage("Success!");
    
    switch (operation) {
      case "add":
        setResult(parsedNum1 + parsedNum2);
        break;
      case "subtract":
        setResult(parsedNum1 - parsedNum2);
        break;
      case "multiply":
        setResult(parsedNum1 * parsedNum2);
        break;
      case "divide":
        setResult(parsedNum1 / parsedNum2);
        break;
      default:
        break;
    }
  }

  return (
    <div className="calculator">
        <h1>React Calculator</h1>
      <input type="text" placeholder="Num1" value={num1} onChange={(e) => setNum1(e.target.value)} />
      <input type="text" placeholder="Num2" value={num2} onChange={(e) => setNum2(e.target.value)} />
      
<div>
  <button onClick={() => performOperation("add")}>+</button>
  <button onClick={() => performOperation("subtract")}>-</button>
  <button onClick={() => performOperation("multiply")}>*</button>
  <button onClick={() => performOperation("divide")}>/</button>
</div>
<div>
  {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
  {successMessage && <p style={{ color: "blue" }}>{successMessage}</p>}
  {result && <p>Result: {result}</p>}
</div>
    </div>
  );
}

export default Calculator;
  