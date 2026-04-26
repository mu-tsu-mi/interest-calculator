import { useContext } from "react";
import { CalculatorContext } from "../contexts/CalculatorContext";

export default function UserInput() {
  const calculator = useContext(CalculatorContext);

  return <div>input</div>;
}
