import React from 'react';

// function App() {
//   return (
//     <div>
//       <h1>Click the button below</h1>
//       <button onClick={() => console.log('The button is clicked')}>
//         Click me
//       </button>
//     </div>
//   );
// }

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     count: 0
  //   };
  // }

  render() {
    let count = 0;

    return (
      <div>
        <h1 onMouseEnter={() => console.log('Hovering over the header')}>
          Click the button below
        </h1>
        <button onClick={() => console.log(`Counting at ${count++}`)}>
          Click me
        </button>
        {/* <button
          onClick={function() {
            console.log(this);
          }}
        >
          Click me
        </button> */}
      </div>
    );
  }
}

export default App;
