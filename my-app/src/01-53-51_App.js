import React from 'react';
import TodoItem from './components/01-53-51_TodoItem';
import todoData from './01-53-51_todoData';
import './01-53-51_main.css';

function App() {
  let todoComponents = todoData.map(todo => (
    <TodoItem key={todo.id} item={todo} />
  ));

  return <div className="todo-list">{todoComponents}</div>;
}

export default App;
