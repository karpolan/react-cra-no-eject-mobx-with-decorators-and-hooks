import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withStore } from '../store';

/**
 * Class Component with MobX observer, but without decorator
 * Note: wrapped with withStore() HOC
 */
const ClassComponentWithObserver = observer(
  class ClassComponent extends Component {
    render() {
      console.log('Rendering Class Component with observer() wrapper, store:', this.props.store);
      return (
        <div>
          <h2>Class component with observer() wrapper</h2>
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

export default withStore(ClassComponentWithObserver);
