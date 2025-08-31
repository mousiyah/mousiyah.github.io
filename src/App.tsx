import "./App.css";
import Header from "./partials/Header";

function App() {
  console.log("App component rendering");

  return (
    <div className="App">
      <div style={{ padding: "20px", background: "red", color: "white" }}>
        Debug: App is rendering
      </div>
      <Header />
    </div>
  );
}

export default App;
