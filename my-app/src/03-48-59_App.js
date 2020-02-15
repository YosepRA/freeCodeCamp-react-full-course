import React from 'react';
import './03-48-59_main.css';

// The core concept of forms in React is about 'controlled form'. It's a situation where the state dictates ~
// ~ what is shown inside form's inputs. The state object is basically controlling the view of form just like ~
// ~ any other React elements. Therefore, it's important to save the data that are being input within the form ~
// ~ to state object.
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      likeCoffee: false,
      favoriteFruit: '',
      gender: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox') {
      this.setState({
        [name]: checked
      });
    } else {
      this.setState({
        [name]: value
      });
    }
  }

  render() {
    return (
      <div>
        <header className="page-title">
          <h1>Form Part 2</h1>
        </header>

        <section className="page-content">
          <form>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First name"
              onChange={this.handleChange}
            />
            <br />
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last name"
              onChange={this.handleChange}
            />
            <br />
            <textarea
              name="bio"
              value={this.state.bio}
              placeholder="Enter your description..."
              cols="50"
              rows="6"
              onChange={this.handleChange}
            />
            <br />
            <label>
              <input
                type="checkbox"
                name="likeCoffee"
                id="likeCoffee"
                checked={this.state.likeCoffee}
                onChange={this.handleChange}
              />{' '}
              Liking coffee?
            </label>

            <br />
            <label>
              <input
                type="radio"
                name="gender"
                id="genderMale"
                value="male"
                checked={this.state.gender === 'male'}
                onChange={this.handleChange}
              />{' '}
              Male
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="gender"
                id="genderFemale"
                value="female"
                checked={this.state.gender === 'female'}
                onChange={this.handleChange}
              />{' '}
              Female
            </label>
            <br />
            <label>
              Favorite fruit:{' '}
              <select
                name="favoriteFruit"
                id="favoriteFruit"
                value={this.state.favoriteFruit}
                onChange={this.handleChange}
              >
                <option value="apple">Apple</option>
                <option value="orange">Orange</option>
                <option value="grape">Grape</option>
              </select>
            </label>
          </form>
          {/* <h2>
            {this.state.firstName} {this.state.lastName}
          </h2> */}
        </section>
      </div>
    );
  }
}

export default App;
