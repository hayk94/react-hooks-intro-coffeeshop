import React, { Component } from 'react';
import './App.css';
import Menu from './Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section>
          <Menu/>
        </section>
      </div>
    );
  }
}

export default App;
