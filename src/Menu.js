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
    document.title = `Selected - ${this.state.selected}`;
  }

  componentDidUpdate() {
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
