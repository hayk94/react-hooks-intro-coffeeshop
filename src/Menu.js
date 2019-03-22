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
