import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from "./components/Table";  
import TableTemplate from './components/Table';
import Chart from './components/Chart'
import Chart2 from './components/Chart2'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          zmiana tekstu <code>src/App.js</code> and save to reload.
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
      <TableTemplate />
      <div className="wrapper">
        <Chart />
        <Chart2 />
      </div>
    </div>
  );
}

export default App;
