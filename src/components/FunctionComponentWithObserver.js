import React from 'react';
import { observer } from 'mobx-react';

/**
 * Function Component with MobX observer
 */
const FunctionComponentWithObserver = observer((props) => {
  return (
    <div>
      <h2>Function component with Observer</h2>
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
