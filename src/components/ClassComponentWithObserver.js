import React, { Component } from 'react';
import { observer } from 'mobx-react';

/**
 * Class Component with MobX observer, but without decorator
 */
const ClassComponentWithObserver = observer(
  class ClassComponent extends Component {
    render() {
      return (
        <div>
          <h2>Class component with Observer as Wrapper</h2>
          <pre>
            {`          
const ClassComponentWithObserver = observer(
  class ClassComponent extends Component { 
    render () {
      ...
    };
  }
);`}
          </pre>
        </div>
      );
    }
  }
);

export default ClassComponentWithObserver;
