### Side effects!

Where did we perform side effects in class components?  
Lifecycle methods.

To perform side effects in functional components now we have `useEffect`.

In our `Menu.js` class component we have a side effect for changing our document title.  
Here is how we do it in `MenuFC.js`

```jsx harmony
import React, {useState, useEffect} from 'react';

const MenuFc = () => {
  const [selected, setSelected] = useState('Purple Haze');
  const onProductChange = e => {
    setSelected(e.target.value);
  };

  const [count, setCount] = useState(0);
  const onCountChange = e => {
    setCount(e.target.value);
  };

  const onOrder = () => {
    setTimeout(() => {
      alert(`You ordered ${count} ${selected}`);
    }, 3000);
  };

  useEffect(() => {
    document.title = `Selected - ${selected}`;
  });

  return (
    <div>
      <div>
        <b>Product: </b>
        <select onChange={onProductChange}>
          <option value="Purple Haze">Purple Haze</option>
          <option value="Amnesia">Amnesia</option>
          <option value="GoGreen">GoGreen</option>
        </select>
      </div>
      <div>
        <b>Count: </b>
        <input type="number" min={0} value={count} onChange={onCountChange} />
      </div>
      <div>
        <button onClick={onOrder}>Order</button>
      </div>
    </div>
  );
};

export default MenuFc;

```

`useEffect` accepts a function as an argument.  
There we perform our side effects.  
It runs on every render.
It behaves
> as componentDidMount, componentDidUpdate, and componentWillUnmount combined.

https://reactjs.org/docs/hooks-effect.html

We also had a logger in our class component. Let's add it.

```jsx harmony
import React, {useState, useEffect} from 'react';

const MenuFc = () => {
  const [selected, setSelected] = useState('Purple Haze');
  const onProductChange = e => {
    setSelected(e.target.value);
  };

  const [count, setCount] = useState(0);
  const onCountChange = e => {
    setCount(e.target.value);
  };

  const onOrder = () => {
    setTimeout(() => {
      alert(`You ordered ${count} ${selected}`);
    }, 3000);
  };

  useEffect(() => {
    // eslint-disable-next-line
    console.log('logger', selected, count);
    document.title = `Selected - ${selected}`;
  });

  return (
    <div>
      <div>
        <b>Product: </b>
        <select onChange={onProductChange}>
          <option value="Purple Haze">Purple Haze</option>
          <option value="Amnesia">Amnesia</option>
          <option value="GoGreen">GoGreen</option>
        </select>
      </div>
      <div>
        <b>Count: </b>
        <input type="number" min={0} value={count} onChange={onCountChange} />
      </div>
      <div>
        <button onClick={onOrder}>Order</button>
      </div>
    </div>
  );
};

export default MenuFc;

```

Everything looks great right? Before we go deeper one thing...

### useEffect is a whole new concept

Do not think of `useEffect` as a new lifecycle method.  
It's a whole new concept.

It's not a lifecycle method, it behaves similar to them.

`useEffect` timing is different.  

https://reactjs.org/docs/hooks-reference.html#timing-of-effects

##### Old problems

In our class component we had a few issues.  
As state changes our component re-renders.  
`componentDidUpdate` fires and `document.title = this.state.selected` was running,  
even though we changed only the count and not the title. With classes we'd put some if check.

Also we wanted to make our logger functionality reusable. With classes we'd make a HOC.

The same problems we have now here with our `useEffect` hook.  
At the moment it's as bad as lifecycle methods.

Let's see how it's actually better.  
Turn to the next branch.