import React, { Component } from 'react';

class Conditional extends Component {
  render() {
    return (
      <div>
        <h3>Component loading status: {this.props.status}</h3>
      </div>
    );
  }
}

export default Conditional;
