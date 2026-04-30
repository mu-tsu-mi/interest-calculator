import "./App.css";
import Header from "./components/Header";
import UserInput from "./components/user-input/UserInput";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="input-result-wrapper">
        <UserInput />
        {/* <CalculationResult /> */}
      </div>
    </div>
  );
}

export default App;
