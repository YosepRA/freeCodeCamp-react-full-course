import React from 'react';
import AnswerOne from './components/02-07-21_AnswerOne';
import AnswerTwo from './components/02-07-21_AnswerTwo';

class App extends React.Component {
  constructor() {
    // If we want to use a constructor, we have to use the Component's constructor by calling super.
    super();
    // All states will be held inside component's state property.
    // We can't change the props coming from parent component, but every rule regarding an object ~
    // ~ copied by reference still holds true. Meaning that you still can change the state's value ~
    // ~ outside the main component and the changes will be applied to every other siblings that uses ~
    // ~ that state object.
    this.state = {
      answer: 'No'
    };
  }

  render() {
    return (
      <div>
        <h1>State</h1>
        <AnswerOne appState={this.state} />
        <AnswerTwo appState={this.state} />
      </div>
    );
  }
}

export default App;
