import React, { useState, useCallback, useEffect } from 'react';
import { useObserver } from 'mobx-react';
import { useStore } from '../../store';

const CODE = `const FunctionComponentUseObserver = (props) => {
  const store = useStore();
  return useObserver(() => (
    <div>{store?.xxx}</div>
    ...
  )); 
};`;

/**
 * Function Component with MobX useObserver() hook
 */
const FunctionComponentUseObserver = (props) => {
  const store = useStore();
  const [value, setValue] = useState(0);

  const handleStateChangeClick = useCallback(() => {
    setValue(value + 1);
  }, [value]);

  useEffect(() => {
    console.log('FunctionComponentUseObserver.value:', value);
  }, [value]);

  // console.log('Rendering Function component with useObserver() hook, store:', store);
  return useObserver(() => (
    <div className="component">
      <h2>Function component with useObserver() hook</h2>
      <div className="container">
        <div className="item">
          <div>
            Elapsed time: <b>{store?.timer?.elapsedTime}</b>
          </div>
          <div>
            Observable value: <b>{store?.sample?.observable}</b>
          </div>
        </div>
        <div className="item">
          <div>
            Internal state value: <b>{value}</b>
          </div>
          <button onClick={handleStateChangeClick}>Change internal state</button>
        </div>
      </div>
      <textarea readOnly value={CODE} />
    </div>
  ));
};

export default FunctionComponentUseObserver;
