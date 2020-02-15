import React from 'react';
import TodoItem from './components/01-09-26_TodoItem';
import './01-09-26_main.css';

function App() {
  return (
    <div className="todo-list">
      {TodoItem('Orange')}
      {TodoItem('Apple')}
      {TodoItem('Watermelon')}
      {TodoItem('Grape')}
    </div>
  );
}

export default App;
