import React from 'react';
import ReactDOM from 'react-dom';
import './base-style.css';

function App() {
  const firstName = 'Joe';
  const lastName = 'Rye';
  const isMorning = false;

  // Adding inline style is a bit odd. Remember that this is a react element instead of regular HTML element. ~
  // ~ Therefore, the way to do inline stylling is different. In React, we have to use an object containing ~
  // ~ bunch of key-value pairs. But since curly braces are used for JavaScript expression, we have to wrap it ~
  // ~ in yet another curly braces to declare an object. The property name is similar to HTML style properties, ~
  // ~ which is to use camelCase instead of dashed notation. For example 'font-size' becomes 'fontSize'.
  // Inline styling is used mainly for dynamic value purposes based on certain computation.

  // Or you can create a variable that contains the styling property.
  const headerStyle = {
    color: 'blue',
    fontSize: '1rem'
  };

  return (
    // <h1 style={{ color: 'blue', fontSize: '5rem' }}>
    //   Good {`${isMorning ? 'morning' : 'night'}, ${firstName} ${lastName}`}
    // </h1>
    <h1 style={headerStyle}>
      Good {`${isMorning ? 'morning' : 'night'}, ${firstName} ${lastName}`}
    </h1>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
