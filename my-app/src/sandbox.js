import React from 'react';

function Person({ name }) {
  return <h1>Hi, {name}</h1>;
}

class Ninja extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export { Person, Ninja };
