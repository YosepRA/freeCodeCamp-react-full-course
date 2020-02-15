import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  // Form input 'onChange' event is not the same as DOM's change event. It behaves more like input event which ~
  // ~ will fire event on each key input rather than DOM's change event that will fire once the input field ~
  // ~ loses focus.
  render() {
    return (
      <div>
        <header className="page-title">
          <h1>Form Part 1</h1>
        </header>

        <section className="page-content">
          <form>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              onChange={this.handleChange}
            />
            <br />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              onChange={this.handleChange}
            />
          </form>
          <h2>
            {this.state.firstName} {this.state.lastName}
          </h2>
        </section>
      </div>
    );
  }
}

export default App;
