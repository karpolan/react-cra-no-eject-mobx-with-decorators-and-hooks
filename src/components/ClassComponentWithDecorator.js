import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withStore } from '../store';

const CODE = `@observer
class ClassComponentWithDecorator extends Component {
  render() {
    <div>{this.props.store?.xxx}</div>
    ...
  };
}`;

/**
 * Class Component with MobX decorator
 * Note: ESNext syntax with decorator syntax must be enabled
 */
@withStore // HOC from store utils
@observer // MobX standard decorator
class ClassComponentWithDecorator extends Component {
  render() {
    // console.log('Rendering Class Component with @observer decorator, store:', this.props.store);
    return (
      <div className="component">
        <h2>Class component with @observer decorator</h2>
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

export default ClassComponentWithDecorator;
