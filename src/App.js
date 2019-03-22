import React, { Component } from 'react';
import './App.css';
import Menu from './Menu';
import MenuFc from './MenuFC';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section>
          <h6>
            Class
          </h6>
          <Menu/>
        </section>
        <section>
          <h6>
            Hooks
          </h6>
          <MenuFc/>
        </section>
      </div>
    );
  }
}

export default App;
