import React from 'react';
import './02-27-20_main.css';

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0
//     };
//     // Whenever you define a new class method that's going to use setState, you will need to bind its function ~
//     // ~ context to this component object. Basically redirecting the function's context.
//     // You can also not define a bound function directly to your component instance and only bind the function ~
//     // ~ from inside of element's event assignment (onEvent properties). But do remember that 'setState' will also ~
//     // ~ re-render the page on state change. Therefore on each render, the code will need to re-bind the function ~
//     // ~ all over again. In the end, performance </> memory tradeover.
//     this.handleClick = this.handleClick.bind(this);
//   }

//   render() {
//     return (
//       <div className="container counter">
//         <h1 className="counter__number">{this.state.count}</h1>
//         <button className="counter__button" onClick={this.handleClick}>
//           Count
//         </button>
//       </div>
//     );
//   }

//   handleClick() {
//     // const prevState = this.state; // Check object reference.

//     // NEVER directly edit the state because you will miss an amazing feature of React.
//     // this.state.count++;

//     // Use 'Component.prototype.setState()' to change the state. If we use this method, the view will also get ~
//     // ~ updated based on the component's current state. Basically an automatic view updater. Every changes in ~
//     // ~ state object will be reflected into view by recalling component's render method.
//     // setState is asynchronous.

//     // One way to use set state is to provide an object. The given object will later be combined with the old one.
//     // I assume it to be the usage of 'Object.assign' method.
//     // this.setState({ count: 1, isClicked: true });

//     // The other way is to give a callback. The callback will be given the previous state. The callback will need ~
//     // ~ to return the new version of state. Using callback is good when we need to access the previous state and ~
//     // ~ do some computations from that previous state.
//     this.setState(prevState => {
//       // One way (my way).
//       // prevState.count++;
//       // console.log('Inside setState: ', this.state.count);
//       // return prevState;

//       // Another way (perhaps the proper one).
//       return {
//         count: prevState.count + 1
//       };
//     });

//     // ======================================================================================================== //
//     // Asynchronous checks.

//     // console.log('After setState', this.state.count);

//     // setTimeout(() => {
//     //   console.log('After 100ms', this.state);
//     //   console.assert(
//     //     prevState === this.state,
//     //     'State is still the same object.'
//     //   );
//     // }, 100);
//   }
// }

// ======================================================================================================== //

// Retry
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.addOne = this.addOne.bind(this);
    this.addFive = this.addFive.bind(this);
    this.addHalf = this.addHalf.bind(this);
  }

  addOne() {
    this.setState(prevState => {
      prevState.count++;
      console.log('Added by 1 to: ' + prevState.count);
      return prevState;
    });
  }
  addFive() {
    this.setState(prevState => {
      prevState.count += 5;
      console.log('Added by 5 to: ' + prevState.count);
      return prevState;
    });
  }
  addHalf() {
    this.setState(prevState => {
      prevState.count += 0.5;
      console.log('Added by half to: ' + prevState.count);
      return prevState;
    });
  }

  render() {
    return (
      <div className="counter">
        <h1 className="counter__number">{this.state.count}</h1>
        <button
          className="counter__button counter__button--add-one"
          onClick={this.addOne}
        >
          Add one
        </button>
        <button
          className="counter__button counter__button--add-five"
          onClick={this.addFive}
        >
          Add five
        </button>
        <button
          className="counter__button counter__button--add-half"
          onClick={this.addHalf}
        >
          Add &frac12;
        </button>
      </div>
    );
  }
}

export default App;
