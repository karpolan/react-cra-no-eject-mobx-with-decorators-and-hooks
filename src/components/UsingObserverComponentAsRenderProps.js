import React, { Component } from 'react';
import { Observer } from 'mobx-react';
import { withStore } from '../store';

const CODE = `class UsingObserverComponent extends Component {
  render() {
    return (
      <Observer render={() => ( 
        <div>{this.props.store?.xxx}</div>
      )} />
      ...
    )
  };    
}`;

/**
 * Class Component with MobX observer using <Observer/> component as render props function
 * Note: wrapped with withStore() HOC
 */
class UsingObserverComponentAsRenderProps extends Component {
  render() {
    return (
      <div className="component">
        <h2>Usage of MobX's {'<Observer />'} as Render Props</h2>
        <Observer
          render={() => {
            // console.log('Rendering <Observer/> with Render Props, store:', this.props.store);
            return (
              <>
                <div>
                  Elapsed time: <b>{this.props?.store?.timer?.elapsedTime}</b>
                </div>
                <div>
                  Observable value: <b>{this.props?.store?.sample?.observable}</b>
                </div>
              </>
            );
          }}
        />
        <textarea readOnly value={CODE} />
      </div>
    );
  }
}

export default withStore(UsingObserverComponentAsRenderProps);
