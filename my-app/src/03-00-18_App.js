import React, { Component } from 'react';
import Conditional from './components/03-00-18_Conditional';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1500);
  }

  render() {
    // return (
    //   <div>
    //     <h1>Conditional Rendering</h1>
    //     <Conditional isLoading={this.state.isLoading} />
    //   </div>
    // );

    // ======================================================================================================== //

    // Since the App is maintaining the load state, therefore it should have been App's responsibility to decide ~
    // ~ whether to render a certain component or not. The child component itself will only focus on showing its ~
    // ~ content rather than deciding whether to show up its component or not based on parent's state.
    const status = this.state.isLoading ? 'Loading...' : 'Ready!';

    return (
      <div>
        <h1>Conditional Rendering</h1>
        <Conditional status={status} />
      </div>
    );
  }
}

export default App;
