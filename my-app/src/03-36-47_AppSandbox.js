import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nameForm: {}
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const key = event.target.name;
    const value = event.target.value;

    this.setState({
      nameForm: {
        [key]: value
      }
    });
  }

  // Form input 'onChange' event is not the same as DOM's change event. It behaves more like input event which ~
  // ~ will fire event on each key input rather than DOM's change event that will fire once the input field ~
  // ~ loses focus.
  render() {
    return (
      <div>
        <header className="page-title">
          <h1>Forms Part 1</h1>
        </header>

        <section className="page-content">
          {console.log('Rendering')}
          <form>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              onChange={this.handleChange}
            />
          </form>
          <h2>{this.state.nameForm.firstName}</h2>
        </section>
      </div>
    );
  }
}

export default App;
