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
      <div className="result-wrapper">
        <div>Balance ${calculator.result.total}</div>
        <div>Interest ${calculator.result.interest}</div>
      </div>
    </div>
  );
}
