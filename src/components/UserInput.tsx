import { useContext } from "react";
import { CalculatorContext } from "../contexts/CalculatorContext";

export default function UserInput() {
  const calculator = useContext(CalculatorContext);
  if (!calculator) {
    console.log("Calculator Context is not available");
    return null;
  }
  const { principal, setPrincipal, rate, setRate, months, setMonths, result } =
    calculator;

  return (
    <div>
      <div>
        <label>$ Amount / AUD</label>
        <input
          type="number"
          value={principal}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPrincipal(Number(e.target.value))
          }
        />
      </div>
      <div>
        <label>% Interest Rate</label>
        <span>{rate} %</span>
        <input
          type="range"
          min="0"
          max="20"
          step="0.1"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setRate(Number(e.target.value))
          }
        />
      </div>
    </div>
  );
}
