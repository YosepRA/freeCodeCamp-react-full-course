// A sandbox where I play around with 'componentDidMount' and fetching data.

import React from 'react';
import NameList from './components/03-00-18_NameList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      fetch('./data/name.json')
        .then(res => res.json())
        .then(data => {
          // Change load status and save data to state.
          this.setState({
            isLoading: false,
            names: data
          });
        });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>App Sandbox is rendered</h1>
        <h3>Loading status: {this.state.isLoading ? 'Loading...' : 'Ready'}</h3>
        <NameList names={this.state.names} />
      </div>
    );
  }
}

export default App;
