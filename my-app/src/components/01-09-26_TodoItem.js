import React from 'react';

function TodoItem(text) {
  return (
    <div className="todo-list__item">
      <input type="checkbox" />
      <p>{text}</p>
    </div>
  );
}

export default TodoItem;
