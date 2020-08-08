import React, { Component } from 'react';
import { Observer } from 'mobx-react';
import { withStore } from '../store';

const CODE = `class UsingObserverComponent extends Component {
  render() {
    return (
      <Observer>
        {() => (
          <div>{this.props.store?.xxx}</div>
        )}
      </Observer>
      ...
    )
  };    
}`;

/**
 * Class Component with MobX observer using <Observer/> component
 * Note: wrapped with withStore() HOC
 */
class UsingObserverComponent extends Component {
  render() {
    console.log('Rendering <Observer/> with children, store:', this.props.store);
    return (
      <div className="component">
        <h2>Usage of MobX's {'<Observer />'} component</h2>
        <Observer>
          {() => (
            <>
              <div>
                Elapsed time: <b>{this.props?.store?.timer?.elapsedTime}</b>
              </div>
              <div>
                Observable value: <b>{this.props?.store?.sample?.observable}</b>
              </div>
            </>
          )}
        </Observer>
        <textarea readOnly value={CODE} />
      </div>
    );
  }
}

export default withStore(UsingObserverComponent);
