/* 
  Change log v7:
  - Added styling to completed todos.
*/

import React from 'react';
import TodoItem from './components/03-23-11_TodoItem';
import todoData from './03-23-11_todoData';
import './03-23-11_main.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // 'handleChange' will toggle the todo item's state.
  handleChange(id) {
    this.setState(prevState => {
      const { todoData } = prevState;
      const targetIndex = todoData.findIndex(todo => todo.id === id);
      todoData[targetIndex].completedStatus = !todoData[targetIndex]
        .completedStatus;
      return prevState;
    });
  }

  render() {
    const todoComponents = this.state.todoData.map(todo => (
      <TodoItem key={todo.id} item={todo} changeHandler={this.handleChange} />
    ));
    return <div className="todo-list">{todoComponents}</div>;
  }
}

export default App;
