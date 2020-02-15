import React from 'react';
import ReactDOM from 'react-dom';

// ======================================================================================================== //

// For functional components, use constructor convention to its naming.
// One thing it needs to do is to return HTML that's going to be put in somewhere.
function MyApp() {
  return (
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
      <li>Item 5</li>
    </ul>
  );
}

ReactDOM.render(<MyApp />, document.getElementById('root'));
