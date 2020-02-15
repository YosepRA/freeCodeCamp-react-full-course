import React from 'react';

class AnswerTwo extends React.Component {
  render() {
    console.log('Before AnswerTwo: ', this.props.appState);
    this.props.appState.answer = 'Nahhhh';
    console.log('Before AnswerTwo: ', this.props.appState);
    return <p>The answer is {this.props.appState.answer}</p>;
  }
}

export default AnswerTwo;
