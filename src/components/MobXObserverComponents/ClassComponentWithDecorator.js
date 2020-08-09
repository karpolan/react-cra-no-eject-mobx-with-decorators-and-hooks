import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withStore } from '../../store';

const CODE = `@withStore
@observer
class ClassComponentWithDecorator extends Component {
  render() {
    <div>{this.props.store?.xxx}</div>
    ...
  };
}`;

/**
 * Class Component with MobX decorator
 * Note: ESNext syntax with decorator syntax must be enabled
 */
@withStore // HOC from store utils
@observer // MobX standard decorator
class ClassComponentWithDecorator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  handleStateChangeClick = () => {
    const { value } = this.state;
    this.setState({ value: value + 1 }, () =>
      console.log('ClassComponentWithDecorator.state.value:', this.state.value)
    );
  };

  render() {
    // console.log('Rendering Class Component with @observer decorator, store:', this.props.store);
    return (
      <div className="component">
        <h2>Class component with @observer decorator</h2>
        <div className="container">
          <div className="item">
            <div>
              Elapsed time: <b>{this.props?.store?.timer?.elapsedTime}</b>
            </div>
            <div>
              Observable value: <b>{this.props?.store?.sample?.observable}</b>
            </div>
          </div>
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

export default ClassComponentWithDecorator;
