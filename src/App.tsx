import "./App.css";
import Header from "./components/Header";
import UserInput from "./components/user-input/UserInput";
import CalculationResult from "./components/calc-result/CalculationResult";

function App() {
  return (
    <div className="app">
      <div className="app-card">
        <Header />
        <div className="input-result-wrapper">
          <UserInput />
          <CalculationResult />
        </div>
      </div>
    </div>
  );
}

export default App;
