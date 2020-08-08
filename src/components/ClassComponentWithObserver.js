import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withStore } from '../store';

const CODE = `const ClassComponentWithObserver = observer(
  class ClassComponent extends Component { 
    render () {
      <div>{this.props.store?.xxx}</div>
      ...
    };
  }
);`;

/**
 * Class Component with MobX observer, but without decorator
 * Note: wrapped with withStore() HOC
 */
const ClassComponentWithObserver = observer(
  class ClassComponent extends Component {
    render() {
      // console.log('Rendering Class Component with observer() wrapper, store:', this.props.store);
      return (
        <div className="component">
          <h2>Class component with observer() wrapper</h2>
          <div>
            Elapsed time: <b>{this.props?.store?.timer?.elapsedTime}</b>
          </div>
          <div>
            Observable value: <b>{this.props?.store?.sample?.observable}</b>
          </div>
          <textarea readOnly value={CODE} />
        </div>
      );
    }
  }
);

export default withStore(ClassComponentWithObserver);
