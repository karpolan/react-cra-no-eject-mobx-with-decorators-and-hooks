import React from 'react';
import { observer, useObserver } from 'mobx-react';
import { useStore } from '../store';

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
  // console.log('Rendering Function component with useObserver() hook, store:', store);
  return useObserver(() => (
    <div className="component">
      <h2>Function component with useObserver() hook</h2>
      <div>
        Elapsed time: <b>{store?.timer?.elapsedTime}</b>
      </div>
      <div>
        Observable value: <b>{store?.sample?.observable}</b>
      </div>
      <textarea readOnly value={CODE} />
    </div>
  ));
};

export default FunctionComponentUseObserver;
