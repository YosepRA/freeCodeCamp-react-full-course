import React, { Component } from 'react';
import './03-14-32_main.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
    this.logClick = this.logClick.bind(this);
  }

  logClick() {
    this.setState(prevState => {
      prevState.isLoggedIn = !prevState.isLoggedIn;
      console.log(`Latest login status: ${prevState.isLoggedIn}`);
      return prevState;
    });
  }

  render() {
    return (
      <div>
        <header className="page-title">
          <h1>Conditional Rendering Practice</h1>
        </header>

        <section className="page-content">
          <div className="log-info">
            <h2>You are logged {this.state.isLoggedIn ? 'in' : 'out'}.</h2>
          </div>
          <div className="log-button">
            <button onClick={this.logClick}>
              Log {this.state.isLoggedIn ? 'out' : 'in'}
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
