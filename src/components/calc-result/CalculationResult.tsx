import "./CalculationResult.css";
import { useContext } from "react";
import { CalculatorContext } from "../../contexts/CalculatorContext";

export default function CalculationResult() {
  const calculator = useContext(CalculatorContext);

  if (!calculator) {
    console.log("Calculator Context is not available");
    return null;
  }
  
  return (
    <div className="result-container">
      <div className="balance-wrapper">
        <span className="result-display">Balance</span>
        <span>${calculator.result.total}</span>
      </div>
      <div className="interest-wrapper">
        <span className="result-display">Interest</span>
        <span>${calculator.result.interest}</span>
      </div>
    </div>
  );
}
