import React, { Component } from 'react';
import { Observer } from 'mobx-react';
import { withStore } from '../store';

/**
 * Class Component with MobX observer using <Observer/> component
 * Note: wrapped with withStore() HOC
 */
class UsingObserverComponent extends Component {
  render() {
    console.log('Rendering <Observer/> with children, store:', this.props.store);
    return (
      <div>
        <h2>Usage of MobX's {'<Observer />'} component</h2>
        <Observer>{() => <div>{this.props.somePropsAsObservable}</div>}</Observer>
        <pre>
          {`          
class UsingObserverComponent extends Component {
  render() {
    return (
      <Observer>{() => <div>{this.props.somePropsAsObservable}</div>}</Observer>
      ...
    )
  };    
}`}
        </pre>
      </div>
    );
  }
}

export default withStore(UsingObserverComponent);
