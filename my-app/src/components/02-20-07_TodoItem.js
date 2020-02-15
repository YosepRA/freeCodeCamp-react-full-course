import React from 'react';

// function TodoItem({ item }) {
//   const { text, completedStatus } = item;

//   return (
//     <div className="todo-list__item">
//       <input type="checkbox" checked={completedStatus} />
//       <p>{text}</p>
//     </div>
//   );
// }

class TodoItem extends React.Component {
  // constructor() {
  //   super();
  //   console.log(this.props.item);
  // }

  render() {
    const { text, completedStatus } = this.props.item;

    return (
      <div className="todo-list__item">
        <input type="checkbox" checked={completedStatus} />
        <p>{text}</p>
      </div>
    );
  }
}

export default TodoItem;
