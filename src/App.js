import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <h1>My Dictionary App on React!</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">Coded by Viksy</footer>
      </div>
    </div>
  );
}
