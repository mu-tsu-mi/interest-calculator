import "./App.css";
import Header from "./components/Header";
import UserInput from "./components/user-input/UserInput";
import CalculationResult from "./components/calc-result/CalculationResult";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="input-result-wrapper">
        <UserInput />
        <CalculationResult />
      </div>
    </div>
  );
}

export default App;
