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

  useDocumentTittle(selected);
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
