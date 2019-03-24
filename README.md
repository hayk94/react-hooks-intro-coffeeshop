### New Requirement with lots async stuff
So suddenly a new requirement arrives.  
To implement it you added lots of async stuff to your on order function, so now it looks like this.

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
    setTimeout(() => {
      alert(`You ordered ${this.state.count} ${this.state.selected}`);
    }, 3000);
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

Everything seems to be working just fine, but then you get a bug report.  
Wrong item is being ordered sometimes.  

After trying to reproduce it for a while, you find the problem!

When you order a product then select another product before the order message appeared,  
you get a wrong product in the message as it appears.

Hmmm...
Why that would happen? Nothing seems to be wrong with our code.

Turn to the next branch...
