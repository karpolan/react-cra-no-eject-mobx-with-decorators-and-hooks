import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../store';

/**
 * Function Component with MobX observer
 */
const FunctionComponentWithObserver = observer((props) => {
  const store = useStore();
  console.log('Rendering Function Component with observer() wrapper, store:', store);
  return (
    <div>
      <h2>Function component with observer() wrapper</h2>
      <pre>
        {`          
const FunctionComponentWithObserver = observer((props) => {
  return (
   ...
  ); 
});`}
      </pre>
    </div>
  );
});

export default FunctionComponentWithObserver;
