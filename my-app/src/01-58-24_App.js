import React from 'react';
import GroceryItem from './01-58-24_GroceryItem';

// function App() {
//   return <h1>Code goes here</h1>;
// }

// Class based component. Using class and inherit the functionality of React component.
class App extends React.Component {
  // Render method is mandatory if we want to return a UI.
  render() {
    return (
      <ul>
        <GroceryItem item="Orange" />
        <GroceryItem item="Apple" />
        <GroceryItem item="Watermelon" />
      </ul>
    );
  }
}

export default App;
