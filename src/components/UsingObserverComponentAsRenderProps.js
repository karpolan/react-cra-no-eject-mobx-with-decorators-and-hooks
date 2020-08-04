import React, { Component } from 'react';
import { Observer } from 'mobx-react';

/**
 * Class Component with MobX observer using <Observer/> component as render props function
 */
class UsingObserverComponentAsRenderProps extends Component {
  render() {
    return (
      <div>
        <h2>Usage of MobX's {'<Observer />'} component as Render Props</h2>
        <Observer render={() => <div>{this.props.somePropsAsObservable}</div>} />
        <pre>
          {`          
class UsingObserverComponent extends Component {
  render() {
    return (
      <Observer render={() => <div>{this.props.somePropsAsObservable}</div>} />
      ...
    )
  };    
}`}
        </pre>
      </div>
    );
  }
}

export default UsingObserverComponentAsRenderProps;
