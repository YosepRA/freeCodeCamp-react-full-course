/* 
  Change log:
  - Moved todoData to internal state.
*/

import React from 'react';
import TodoItem from './components/02-20-07_TodoItem';
import todoData from './02-20-07_todoData';
import './02-20-07_main.css';

class App extends React.Component {
  constructor() {
    super();
    // Rather than rendering it directly from imported data, it's more appropriate to add it into the ~
    // ~ state. Because there might be a change that we're going to pass this data around componennts.
    this.state = {
      todoData
    };
  }

  render() {
    const todoComponents = this.state.todoData.map(todo => (
      <TodoItem key={todo.id} item={todo} />
    ));
    return <div className="todo-list">{todoComponents}</div>;
  }
}

export default App;
