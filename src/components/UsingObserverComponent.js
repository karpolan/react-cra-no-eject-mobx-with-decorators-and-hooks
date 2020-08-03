import React, { Component } from 'react';
import { Observer } from 'mobx-react';

/**
 * Class Component with MobX observer using <Observer/> component
 */
class UsingObserverComponent extends Component {
  render() {
    return (
      <div>
        <h2>Usage of MobX's {'<Obsever />'} component</h2>
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

export default UsingObserverComponent;
