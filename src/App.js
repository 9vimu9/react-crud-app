import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    var head = "ggggg"
    const list = ["fff","rrrr"]

  return (
    <div className="App">
      <header className="App-header">
        <h1>{head}</h1>
          <h1>
              {
                  list.map(
                      item=>{
                          return (
                              <div>{item}</div>
                          );
                      }
                  )
              }
          </h1>
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
}

export default App;
