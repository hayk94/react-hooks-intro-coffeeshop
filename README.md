### Ugh not this again!

So why that bug happens?

To give you a hint, lets take a look at the solution first.

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
    const {count, selected} = this.state;
    setTimeout(() => {
      alert(`You ordered ${count} ${selected}`);
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
So we only changed this piece.
```js
  onOrder() {
    const {count, selected} = this.state;
    setTimeout(() => {
      alert(`You ordered ${count} ${selected}`);
    }, 3000);
  }
```

Just one line of code fixes our issue.

Let's dive deep and understand what happens here.

#### The "this" is mutable

```js
  onOrder() {
    setTimeout(() => {
      alert(`You ordered ${this.state.count} ${this.state.selected}`);
    }, 3000);
  }
```
Let's take a look at this buggy code first.

We select a product - "GoGreen". State changes to it. Component re-renders.  
`this.state.selected === "GoGreen"`  
Click the order button. The `onOrder` method fires.  
`setTimeout` starts. 3 seconds pass. The callback is executed.  
We read `this.state.selected` and get "GoGreen".

Here everything is working great. Now let's see how the bug happens.

We select a product - "Amnesia". State changes to it. Component re-renders.  
`this.state.selected === "Amnesia"`  
Click the order button. The `onOrder` method fires.  
`setTimeout` starts. **Before** 3 seconds pass, we select another product - "GoGreen".  
State changes to it. Component re-renders.  
`this.state.selected === "GoGreen"`  
3 seconds pass. `setTimeout` callback runs. We read `this.state.selected` and get "GoGreen".  
However this time we clicked the order button when we selected the "Amnesia" product.  
The problem here is the `this`. It changes during the scope of the `onOrder`.

##### Solution

Now let's take a look at the solution.

 ```js
   onOrder() {
     const {count, selected} = this.state;
     setTimeout(() => {
       alert(`You ordered ${count} ${selected}`);
     }, 3000);
   }
 ```
 
 We select a product - "Amnesia". State changes to it. Component re-renders.  
 `this.state.selected === "Amnesia"`  
 Click the order button. The `onOrder` method fires. 
 We read the `this.state.selected` and assign it to the new variable `selected` in the function scope.  
 `selected === "Amnesia"` 
 `setTimeout` starts. **Before** 3 seconds pass, we select another product - "GoGreen".  
 State changes to it. Component re-renders.  
 `this.state.selected === "GoGreen"`  
 3 seconds pass. `setTimeout` callback runs. We read the `selected` of the function scope not from the `this`. And get "Amnesia".  
The `this` changed/mutated but function scope and variables in it were still the same.

So we solved the `this` problem by function scope.

#### 2 Dimensions

One way that I find easy to think about the `this` and function scope, is to think about them like dimensions.

![dimensions](https://i.imgur.com/M3HJ0lY.png)

We have these 2 dimensions where we store our data.

The `this` can change during the scope.

![dimensions](https://i.imgur.com/gFhXEH1.png)

So you need to be aware of the 2 dimensions where our data reside. And how they interact. 