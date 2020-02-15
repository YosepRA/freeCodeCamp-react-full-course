/* 
  Change log:
  - Added change event handler that is only logging for now.
*/

import React from 'react';
import TodoItem from './components/02-26-01_TodoItem';
import todoData from './02-26-01_todoData';
import './02-26-01_main.css';

class App extends React.Component {
  constructor() {
    super();
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
