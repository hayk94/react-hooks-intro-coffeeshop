### It's useEffect not effects

Take a look at this code.

```jsx harmony
useEffect(() => {
    // eslint-disable-next-line
    console.log('logger', selected, count);
    document.title = `Selected - ${selected}`;
});

```

While it may seem okay, conceptually it is not.

In the callback function, the 2 lines of code have different concerns.  
They do stuff unrelated to each other.  
We need better separation of concerns.

So in fact this is much more better.

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

  useEffect(() => {
    // eslint-disable-next-line
    console.log('logger', selected, count);
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

### Deps

Now we need our `document.title` effect run only when the `selected` state changed.  
In usual `componentDidUpdate` you'd do some `prevProps` comparisons and so on.

Guess what? `useEffect` now will do it for you! You just need to tell it what it needs to check.  
How do we tell it what variables to check? Just pass a second argument to it.

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

  useEffect(() => {
    // eslint-disable-next-line
    console.log('logger', selected, count);
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

Yes simple like that. `useEffect` gets second argument. It's an array.  
In that array you put any variable which change should trigger the effect.  
In case those variables don't change. The effect will not run.  

Just add another `console.log` to that effect and you will see it now runs only when the `selected` changes.

