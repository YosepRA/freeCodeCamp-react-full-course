import React from 'react';
import ReactDOM from 'react-dom';
import './00-24-36_FunctionalComponentPractice.css';

function MyInfo() {
  return (
    <div>
      <h1>YosepRA</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quibusdam porro aperiam
        voluptatum veniam nihil eius corrupti omnis vel saepe.
      </p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<MyInfo />, document.getElementById('root'));
