import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../store';

const CODE = `const FunctionComponent = observer((props) => {
  const store = useStore();
  return (
    <div>{store?.xxx}</div>
    ...
  ); 
});`;

/**
 * Function Component with MobX observer
 */
const FunctionComponentWithObserver = observer((props) => {
  const store = useStore();
  // console.log('Rendering Function Component with observer() wrapper, store:', store);
  return (
    <div className="component">
      <h2>Function component with observer() wrapper</h2>
      <div>
        Elapsed time: <b>{store?.timer?.elapsedTime}</b>
      </div>
      <div>
        Observable value: <b>{store?.sample?.observable}</b>
      </div>
      <textarea readOnly value={CODE} />
    </div>
  );
});

export default FunctionComponentWithObserver;
