import React from 'react';
import ReactDOM from 'react-dom';
import './base-style.css';

function App() {
  const firstName = 'Joe';
  const lastName = 'Rye';
  const isMorning = false;

  // When you're inside a JSX syntax, put any JavaScript expression inside a curly braces.
  return (
    <h1>
      Good {`${isMorning ? 'morning' : 'night'}, ${firstName} ${lastName}`}
    </h1>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
