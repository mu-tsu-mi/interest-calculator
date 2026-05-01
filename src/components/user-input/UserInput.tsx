import "./UserInput.css";
import { useContext } from "react";
import { CalculatorContext } from "../../contexts/CalculatorContext";

export default function UserInput() {
  const calculator = useContext(CalculatorContext);
  if (!calculator) {
    console.log("Calculator Context is not available");
    return null;
  }
  const { principal, setPrincipal, rate, setRate, months, setMonths } =
    calculator;

  // slider for interest rate
  const minRate = 0.1;
  const maxRate = 20;

  // slider for duration(months)
  const minMonth = 6;
  const maxMonth = 60;

  return (
    <div className="user-input-container">
      <div className="amount-display">
        <label>Principal/AUD</label>
        <input
          id="amount-input"
          type="number"
          value={principal}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPrincipal(Number(e.target.value))
          }
        />
      </div>
      <div className="slider-container">
        <div className="slider-wrapper">
          <div className="rate-display">
            <label htmlFor="rate-slider">Interest Rate</label>
            <span className="slider-value-rate"> {rate}%</span>
          </div>
          <input
            id="rate-slider"
            value={rate}
            type="range"
            min={minRate}
            max={maxRate}
            step="0.1"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setRate(Number(e.target.value))
            }
          />
          <div className="slider-labels">
            <span>{minRate}</span>
            <span>{maxRate}</span>
          </div>
        </div>
      </div>
      <div className="slider-container">
        <div className="slider-wrapper">
          <div className="months-display">
            <label htmlFor="month-slider">Duration</label>
            <div className="slider-value-month"> {months} months</div>
          </div>
          <input
            id="month-slider"
            value={months}
            type="range"
            min={minMonth}
            max={maxMonth}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMonths(Number(e.target.value))
            }
          />
          <div className="slider-labels">
            <span>{minMonth}</span>
            <span>{maxMonth}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
