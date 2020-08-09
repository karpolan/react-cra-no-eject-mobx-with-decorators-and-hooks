import React, { Component } from 'react';
import { Observer } from 'mobx-react';
import { withStore } from '../../store';

const CODE = `class UsingObserverComponent extends Component {
  render() {
    return (
      <Observer render={() => ( 
        <div>{this.props.store?.xxx}</div>
      )} />
      ...
    )
  };    
}

export default withStore(UsingObserverComponent)`;

/**
 * Class Component with MobX observer using <Observer/> component as render props function
 * Note: wrapped with withStore() HOC
 */
class UsingObserverComponentAsRenderProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  handleStateChangeClick = () => {
    const { value } = this.state;
    this.setState({ value: value + 1 }, () =>
      console.log('UsingObserverComponentAsRenderProps.state.value:', this.state.value)
    );
  };

  render() {
    return (
      <div className="component">
        <h2>Usage of MobX's {'<Observer />'} as Render Props</h2>
        <div className="container">
          <Observer
            render={() => {
              // console.log('Rendering <Observer/> with Render Props, store:', this.props.store);
              return (
                <div className="item">
                  <div>
                    Elapsed time: <b>{this.props?.store?.timer?.elapsedTime}</b>
                  </div>
                  <div>
                    Observable value: <b>{this.props?.store?.sample?.observable}</b>
                  </div>
                </div>
              );
            }}
          />
          <div className="item">
            <div>
              Internal state value: <b>{this.state.value}</b>
            </div>
            <button onClick={this.handleStateChangeClick}>Change internal state</button>
          </div>
        </div>
        <textarea readOnly value={CODE} />
      </div>
    );
  }
}

export default withStore(UsingObserverComponentAsRenderProps);
