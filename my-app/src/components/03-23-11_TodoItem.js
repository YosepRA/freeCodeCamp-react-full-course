import React from 'react';

class TodoItem extends React.Component {
  render() {
    const { item, changeHandler } = this.props;

    return (
      <div className="todo-list__item">
        <input
          type="checkbox"
          checked={item.completedStatus}
          onChange={() => changeHandler(item.id)}
        />
        <p className={item.completedStatus ? 'completed' : ''}>{item.text}</p>
      </div>
    );
  }
}

export default TodoItem;
