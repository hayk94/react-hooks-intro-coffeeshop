## And now this!

So now we have an error! Or rather the error...

You know it right?

Let's fix it!

```jsx harmony
import React, {Component} from 'react';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'Purple Haze',
    };
    this.onChange = this.onChange.bind(this);
    this.onOrder = this.onOrder.bind(this);
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

We needed to `bind` `this`.

### New Requirements

Suddenly we got new requirements from the client...  
They want the page title to be the selected item of the user.

So we need something like this.

```jsx harmony
import React, {Component} from 'react';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'Purple Haze',
    };
    this.onChange = this.onChange.bind(this);
    this.onOrder = this.onOrder.bind(this);
  }
  
  componentDidUpdate() {
    document.title = `Selected - ${this.state.selected}`;
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

Lifecycle methods yay!  
Now we got it once user selects an item the document title changes accordingly.

### Yet another requirement

And now we've been given another task based on the new requirements.
Users should be able to tell us how many products they want to order.

Pretty easy, right?

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

```

We add a number `input`, `count` to our state, and an `onCountChange` method.  
Oh and right, we need to `bind` `this`.

Great we accomplished a lot today and feel proud.

### Oh no, a bug was just reported

Whoops... We just barely finished the previous task,  
yet a bug was reported from our previous feature.

They say when the users enter the page first time,
the page title doesn't show the selected product.

But it's not a bug! The user didn't select any product yet!  
Oh really? It's a bug and you should fix it!

Anyway it needs to be done.  
So after thinking a while, the best place for this would be `componentDidMount`.  
Yay another lifecycle method to the rescue!

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

```

Phew... it's been a tough day, but we managed! Hooray!

Turn to the next branch...
