import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withStore } from '../store';

/**
 * Class Component with MobX decorator
 * Note: ESNext syntax with decorator syntax must be enabled
 */
@withStore // HOC from store utils
@observer // MobX standard decorator
class ClassComponentWithDecorator extends Component {
  render() {
    console.log('Rendering Class Component with @observer decorator, store:', this.props.store);
    return (
      <div>
        <h2>Class component with @observer decorator</h2>
        <pre>
          {`          
@observer
class ClassComponentWithDecorator extends Component {
  render() {
    ...
  };
}`}
        </pre>{' '}
      </div>
    );
  }
}

export default ClassComponentWithDecorator;
