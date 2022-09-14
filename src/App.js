import logo from "./logo.svg";
import "./App.css";
import React from "react";

export const endpoint = "http://localhost:8010/proxy/api/nft/collections_page";

export const App = () => {
  React.useEffect(() => {
    fetch(endpoint).then((res) => {
      if (res.ok) {
        console.log(res)
        return res.json()
      }
    }).then((data) => {
      console.log('data', data)
    })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
