import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to React Hooks</p>
          <a
            className="App-link"
            href="https://reactjs.org/docs/hooks-intro.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn about hooks
          </a>
        </header>
      </div>
    );
  }
}

export default App;
