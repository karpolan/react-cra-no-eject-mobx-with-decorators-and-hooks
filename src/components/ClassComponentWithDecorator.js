import React, { Component } from 'react';
import { observer } from 'mobx-react';

/**
 * Class Component with MobX decorator
 * Note: ESNext syntax with decorator syntax must be enabled
 */
@observer
class ClassComponentWithDecorator extends Component {
  render() {
    return (
      <div>
        <h2>Class component with Observer as Decorator</h2>
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
