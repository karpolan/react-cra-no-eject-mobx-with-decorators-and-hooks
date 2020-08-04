import React, { Component } from 'react';
import { Observer } from 'mobx-react';
import { withStore } from '../store';

/**
 * Class Component with MobX observer using <Observer/> component as render props function
 * Note: wrapped with withStore() HOC
 */
class UsingObserverComponentAsRenderProps extends Component {
  render() {
    return (
      <div>
        <h2>Usage of MobX's {'<Observer />'} component as Render Props</h2>
        <Observer
          render={() => {
            console.log('Rendering <Observer/> with Render Props, store:', this.props.store);
            return <div>{this.props.somePropsAsObservable}</div>;
          }}
        />
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

export default withStore(UsingObserverComponentAsRenderProps);
