import React from 'react';

class TodoItem extends React.Component {
  render() {
    const { text, completedStatus } = this.props.item;

    return (
      <div className="todo-list__item">
        <input
          type="checkbox"
          onChange={() => console.log('Change is supposedly happening')}
          checked={completedStatus}
        />
        <p>{text}</p>
      </div>
    );
  }
}

export default TodoItem;
