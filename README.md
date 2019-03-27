### Re-usable hooks

Let's dive right into coding.

We create a new `hooker.js` file.

```jsx harmony
import {useEffect} from 'react';

// updateDocumentTitle name is bad the custom hook name should start with "use"
export const useDocumentTittle = title => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export const useLogger = (...args) => {
  useEffect(() => {
    // eslint-disable-next-line
    console.log('logger', ...args);
  });
};

```

Then we do this in our `MenuFC.js`

```jsx harmony
import React, {useState} from 'react';
import {useDocumentTittle, useLogger} from './hooker';

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

  useDocumentTittle(`Selected - ${selected}`);
  useLogger(selected, count);

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

That's right!
Now we can use any of these hooks in any **React Functional Component**.

That's how simple sharing logic can be.

### Some general rules for hooks

Remember that custom hooks should be named as native hooks. The **use** word should be **used**.

Hooks cannot be in conditions. But you can have conditions in your `useEffect` callback

And so on... You definitely should check [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) 

### To be continued...

And that's it for hooks intro!  
Soon I'll dive deeper into more specific cases...  
So keep up with me!
See you soon!