import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withStore } from '../../store';

const CODE = `const ClassComponentWithObserver = observer(
  class ClassComponent extends Component { 
    render () {
      <div>{this.props.store?.xxx}</div>
      ...
    };
  }
);

export default withStore(ClassComponentWithObserver);`;

/**
 * Class Component with MobX observer, but without decorator
 * Note: wrapped with withStore() HOC
 */
const ClassComponentWithObserver = observer(
  class ClassComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 0,
      };
    }

    handleStateChangeClick = () => {
      const { value } = this.state;
      this.setState({ value: value + 1 }, () =>
        console.log('ClassComponentWithObserver.state.value:', this.state.value)
      );
    };

    render() {
      // console.log('Rendering Class Component with observer() wrapper, store:', this.props.store);
      return (
        <div className="component">
          <h2>Class component with observer() wrapper</h2>
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
);

export default withStore(ClassComponentWithObserver);
