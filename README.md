### Fucking bring hooks already!

Fine! Fine...

So you heard about this next hot thing that's called hooks.  
Now you want to refactor your `Menu.js` component to use hooks.  
You were going to refactor it anyway because of performance issues in branch 3, so lets refactor straight to hooks.


Create a new simple functional component `MenuFC.js`.

```jsx harmony
import React from 'react';

const MenuFc = () => {
  return (
    <div>
      <div>
        <b>Product: </b>
        <select>
          <option value="Purple Haze">Purple Haze</option>
          <option value="Amnesia">Amnesia</option>
          <option value="GoGreen">GoGreen</option>
        </select>
      </div>
      <div>
        <button>Order</button>
      </div>
    </div>
  );
};

export default MenuFc;
```

So plain and beautiful. Simple function that returns some jsx.  

Now what do you think, wouldn't it be nice if we could do something like this?

```jsx harmony
import React from 'react';

const MenuFc = () => {
  const state = 'Purple Haze';
  
  return (
    <div>
      <div>
        <b>Product: </b>
        <select value={state}>
          <option value="Purple Haze">Purple Haze</option>
          <option value="Amnesia">Amnesia</option>
          <option value="GoGreen">GoGreen</option>
        </select>
      </div>
      <div>
        <button>Order</button>
      </div>
    </div>
  );
};

export default MenuFc;
```

Wow, our state to be a simple variable in function scope. That's crazy man!  

But we need to somehow be able to change it, right? Otherwise it's not useful as state.  
Imagine if we had `setState` as simple function in scope.

```jsx harmony
<select onChange={setState} value={state}>
  <option value="Purple Haze">Purple Haze</option>
  <option value="Amnesia">Amnesia</option>
  <option value="GoGreen">GoGreen</option>
</select>
```

What do you think? It's so nice and clean.  
So how do we accomplish this with hooks?

```jsx harmony
import React, {useState} from 'react';

const MenuFc = () => {
  const [selected, setSelected] = useState('Purple Haze');
  const onProductChange = (e) => {
    setSelected(e.target.value);
  };

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
        <button>Order</button>
      </div>
    </div>
  );
};

export default MenuFc;

```

I know what you are thinking. "I liked you at first, but now, what kind of black magic is this?"  
```js
const [selected, setSelected] = useState('Purple Haze');
```

Please just give me a moment. It is a simple [ES6 Array Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring).  
You learnt the big and verbose class syntax, surely this tiny syntax won't hurt you.

#### Now let's look at benefits

Our `selected` and `setSelected` are just plain variables in our function scope.  

`useState` function imported from `react` gets one argument - the initial state.
It returns an array.  
The first element is the value of our state.  
The second is a function to change the value.  

We use that function to create a callback to execute when a user selects different product.

So take a look at this beauty once more.

```jsx harmony
import React, {useState} from 'react';

const MenuFc = () => {
  const [selected, setSelected] = useState('Purple Haze');
  const onProductChange = (e) => {
    setSelected(e.target.value);
  };

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
        <button>Order</button>
      </div>
    </div>
  );
};

export default MenuFc;

```

"But creating you are creating a new callback function on each render, it's bad for performance!".  
Some of you might say.  
Well it turns out... [No.](https://reactjs.org/docs/hooks-faq.html#are-hooks-slow-because-of-creating-functions-in-render)

[Here is what react official docs say about that.](https://reactjs.org/docs/hooks-faq.html#are-hooks-slow-because-of-creating-functions-in-render)

> No. In modern browsers, the raw performance of closures compared to classes doesn’t differ significantly except in extreme scenarios

Moreover

> Hooks avoid a lot of the overhead that classes require, like the cost of creating class instances and binding event handlers in the constructor.

So if we just separate out politics from these sentences, the raw meaning strictly equals  

_As React components classes do so much shit that if we just throw them away and use functions,  
we get a lot of performance benefit compared to which creating a new callback function at every render at most cases is nothing_

And you can find some performance tips and trick mentioned there. We'll dive into these later.

