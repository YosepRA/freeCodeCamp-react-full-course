import React from 'react';

class AnswerOne extends React.Component {
  constructor() {
    super();
    console.log(this);
  }

  render() {
    console.log('Before AnswerOne: ', this.props.appState);
    this.props.appState.answer = 'Yes';
    console.log('After AnswerOne: ', this.props.appState);
    return <p>The answer is {this.props.appState.answer}</p>;
  }
}

export default AnswerOne;
