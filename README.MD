## App Intro
Imagine we are writing a coffeeshop menu app.  
Users can choose the product they want and order it.

#### Good Old Classes

First we make a` Menu.js` component.

```jsx harmony
import React, {Component} from 'react';

class Menu extends Component {
  render() {
    return (
      <div>
        Menu
      </div>
    );
  }
}

export default Menu;

```

And make it render in our `App.js` component.

```jsx harmony
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

```

Then we add a `select` to our menu app, with some products.  
Add a button for ordering.

```jsx harmony
import React, {Component} from 'react';

class Menu extends Component {
  render() {
      return (
        <div>
          <b>Order: </b>
          <select>
            <option value="Purple Haze">Purple Haze</option>
            <option value="Amnesia">Amnesia</option>
            <option value="GoGreen">GoGreen</option>
          </select>
          <div>
            <button>Order</button>
          </div>
        </div>
      );
    }
}

export default Menu;

```

Apparently this is what they sell at coffeeshops, isn't it?

Now we need some state for the selected product.

```jsx harmony
import React, {Component} from 'react';

class Menu extends Component {
  constructor(props) {
      super(props);
      this.state = {
        selected: 'Purple Haze',
      };
  }
    
  render() {
      return (
        <div>
          <b>Order: </b>
          <select>
            <option value="Purple Haze">Purple Haze</option>
            <option value="Amnesia">Amnesia</option>
            <option value="GoGreen">GoGreen</option>
          </select>
          <div>
            <button>Order</button>
          </div>
        </div>
      );
    }
}

export default Menu;

```

Finally we need methods to select the product and order it.

```jsx harmony
import React, {Component} from 'react';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'Purple Haze',
    };
  }

  onChange(e) {
    this.setState({selected: e.target.value});
  }

  onOrder() {
    alert(`You ordered ${this.state.selected}`);
  }
  render() {
    return (
      <div>
        <b>Order: </b>
        <select onChange={this.onChange}>
          <option value="Purple Haze">Purple Haze</option>
          <option value="Amnesia">Amnesia</option>
          <option value="GoGreen">GoGreen</option>
        </select>
        <div>
          <button onClick={this.onOrder}>Order</button>
        </div>
      </div>
    );
  }
}

export default Menu;

```

And here we made our app that's it.  
Now lets go and order some stuff.  

And...

Oops...

Right...

We get a big nice error message, guess what?

Turn to the next branch...