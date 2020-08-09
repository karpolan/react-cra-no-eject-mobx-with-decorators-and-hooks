import React, { Component } from 'react';
import { Observer } from 'mobx-react';
import { withStore } from '../../store';

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
}

export default withStore(UsingObserverComponent);`;

/**
 * Class Component with MobX observer using <Observer/> component
 * Note: wrapped with withStore() HOC
 */
class UsingObserverComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  handleStateChangeClick = () => {
    const { value } = this.state;
    this.setState({ value: value + 1 }, () => console.log('UsingObserverComponent.state.value:', this.state.value));
  };

  render() {
    // console.log('Rendering <Observer/> with children, store:', this.props.store);
    return (
      <div className="component">
        <h2>Usage of MobX's {'<Observer />'} component</h2>
        <div className="container">
          <Observer>
            {() => (
              <div className="item">
                <div>
                  Elapsed time: <b>{this.props?.store?.timer?.elapsedTime}</b>
                </div>
                <div>
                  Observable value: <b>{this.props?.store?.sample?.observable}</b>
                </div>
              </div>
            )}
          </Observer>
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

export default withStore(UsingObserverComponent);
