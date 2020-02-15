import React from 'react';

class TodoItem extends React.Component {
  render() {
    const { item, changeHandler } = this.props;
    // Giving checkboxes a passed down change handler from a component that holds the state, which is App. And ~
    // ~ thus, whenever a change event occurs, it will call that handler that is connected to the App's context ~
    // ~ and therefore its state object.
    return (
      <div className="todo-list__item">
        <input
          type="checkbox"
          checked={item.completedStatus}
          onChange={() => changeHandler(item.id)}
        />
        <p>{item.text}</p>
      </div>
    );
  }
}

export default TodoItem;
