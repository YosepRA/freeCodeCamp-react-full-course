/* 
  Change log:
  - Added change event handler (toggle) for each todo items.
*/

import React from 'react';
import TodoItem from './components/02-39-40_TodoItem';
import todoData from './02-39-40_todoData';
import './02-39-40_main.css';

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
      // console.log(
      //   `The status of '${todoData[targetIndex].text}' is ${
      //     todoData[targetIndex].completedStatus ? 'finished' : 'not finished'
      //   }.`
      // );
      return prevState;
    });

    // this.setState(prevState => {
    //   const { todoData } = prevState;
    //   return {
    //     todoData: todoData.map(todo => {
    //       if (todo.id === id) {
    //         todo.completedStatus = !todo.completedStatus;
    //       }
    //       return todo;
    //     })
    //   };
    // });
  }

  render() {
    const todoComponents = this.state.todoData.map(todo => (
      <TodoItem key={todo.id} item={todo} changeHandler={this.handleChange} />
    ));
    return <div className="todo-list">{todoComponents}</div>;
  }
}

export default App;
