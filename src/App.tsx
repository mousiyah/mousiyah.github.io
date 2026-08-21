import "./App.css";
import { useState } from "react";
import Header from "./partials/Header";

function App() {
  const [isDiscoActive, setIsDiscoActive] = useState(false);

  return (
    <div className={`App${isDiscoActive ? " disco-active" : ""}`}>
      <div className="disco-bubbles" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <Header onDiscoChange={setIsDiscoActive} />
    </div>
  );
}

export default App;
