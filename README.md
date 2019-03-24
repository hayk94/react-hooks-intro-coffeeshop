### App grows! Performance issues come up!

As our app grows, we are encountering some performance issues here and there.

To identify them we start using some debugging tools.  
So you decide to put some loggers in your `Menu.js`.

```jsx harmony
import React, {Component} from 'react';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'Purple Haze',
      count: 0,
    };

    this.onProductChange = this.onProductChange.bind(this);
    this.onOrder = this.onOrder.bind(this);
    this.onCountChange = this.onCountChange.bind(this);
  }

  componentDidMount() {
    // eslint-disable-next-line
    console.log('logger', this.state, this.props);
    document.title = `Selected - ${this.state.selected}`;
  }

  componentDidUpdate() {
    // eslint-disable-next-line
    console.log('logger', this.state, this.props);
    document.title = `Selected - ${this.state.selected}`;
  }

  onProductChange(e) {
    this.setState({selected: e.target.value});
  }

  onOrder() {
    alert(`You ordered ${this.state.count} ${this.state.selected}`);
  }

  onCountChange(e) {
    this.setState({count: e.target.value});
  }

  render() {
    return (
      <div>
        <div>
          <b>Product: </b>
          <select onChange={this.onProductChange}>
            <option value="Purple Haze">Purple Haze</option>
            <option value="Amnesia">Amnesia</option>
            <option value="GoGreen">GoGreen</option>
          </select>
        </div>
        <div>
          <b>Count: </b>
          <input
            type="number"
            min={0}
            value={this.state.count}
            onChange={this.onCountChange}
          />
        </div>
        <div>
          <button onClick={this.onOrder}>Order</button>
        </div>
      </div>
    );
  }
}

export default Menu;

```

So we put loggers in `componentDidUpdate` and `componentDidMount`.  
Now you see the proper log after `componentDidMount`.  
You select a product and see the proper log in `componentDidUpdate`, with new state and props.  
You change the product count and see new state and props logged by `componentDidUpdate`.  

But wait a minute...  
Doesn't that mean the `document.title = newTitle` code executes on every update,  
even though the selected product didn't change?

We need to fix that. And this logger tool is really helpful we should implement it for other components too in our app.

So maybe we fix the issue with an `if` check. And make a `HOC` for the logger.

As you are thinking about the solution a new high priority requirement arrives.

Turn to the next branch...