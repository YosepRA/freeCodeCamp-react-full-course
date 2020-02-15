import React from 'react';
import Header from './components/02-03-39_Header';
import Greeting from './components/02-03-39_Greeting';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header name="Yosep" />
        <Greeting />
      </div>
    );
  }
}

export default App;
