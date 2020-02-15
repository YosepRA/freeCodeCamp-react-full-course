import React from 'react';
import './04-04-26_main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      annualPlan: '',
      extraPackages: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      this.setState(prevState => {
        // If it's checked up. Add to array.
        if (checked) {
          prevState.extraPackages.push(value);
        } else {
          // If not, then remove it.
          prevState.extraPackages = prevState.extraPackages.filter(
            p => p !== value
          );
        }
        return prevState;
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
          <h1>Form Practice</h1>
        </header>

        <section className="page-content">
          <div className="form">
            <form>
              <div className="form__group form__group--first-name">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
              </div>

              <div className="form__group form__group--last-name">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
              </div>

              <div className="form__group form__group--age">
                <input
                  type="number"
                  name="age"
                  id="age"
                  placeholder="Age"
                  value={this.state.age}
                  onChange={this.handleChange}
                />
              </div>

              <div className="form__group form__group--gender">
                Gender:{' '}
                <label>
                  <input
                    type="radio"
                    name="gender"
                    id="genderMale"
                    value="Male"
                    checked={this.state.gender === 'Male'}
                    onChange={this.handleChange}
                  />{' '}
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    id="genderFemale"
                    value="Female"
                    checked={this.state.gender === 'Female'}
                    onChange={this.handleChange}
                  />{' '}
                  Female
                </label>
              </div>

              <div className="form__group form__group--annual-plan">
                Annual plan:{' '}
                <select
                  name="annualPlan"
                  id="annualPlan"
                  value={this.state.annualPlan}
                  onChange={this.handleChange}
                >
                  <option value="">Choose your annual plan</option>
                  <option value="20">$20 / year</option>
                  <option value="50">$50 / year</option>
                  <option value="100">$100 / year</option>
                </select>
              </div>

              <div className="form__group form__group--extra-packages">
                {/* Array of checkboxes */}
                Extra packages:
                <label>
                  <input
                    type="checkbox"
                    name="extraPackages"
                    value="Midnight Supreme"
                    checked={this.state.extraPackages.includes(
                      'Midnight Supreme'
                    )}
                    onChange={this.handleChange}
                  />
                  Midnight Supreme
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="extraPackages"
                    value="10% Discount"
                    checked={this.state.extraPackages.includes('10% Discount')}
                    onChange={this.handleChange}
                  />
                  10% Discount
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="extraPackages"
                    value="Vacation Ticket"
                    checked={this.state.extraPackages.includes(
                      'Vacation Ticket'
                    )}
                    onChange={this.handleChange}
                  />
                  Vacation Ticket
                </label>
              </div>

              <button type="submit" className="form__submit">
                Submit
              </button>
            </form>
          </div>

          <div className="result">
            <header className="result__header">
              <h2>Entered Information</h2>
            </header>

            <section className="result__content">
              <div className="result__name">
                <p>
                  Full name{' '}
                  <span className="result__text">
                    : {this.state.firstName} {this.state.lastName}
                  </span>
                </p>
              </div>

              <div className="result__age">
                <p>
                  Age <span className="result__text">: {this.state.age}</span>
                </p>
              </div>

              <div className="result__gender">
                <p>
                  Gender{' '}
                  <span className="result__text">: {this.state.gender}</span>
                </p>
              </div>

              <div className="result__annual-plan">
                <p>
                  Annual plan{' '}
                  <span className="result__text">
                    :{' '}
                    {this.state.annualPlan &&
                      `$${this.state.annualPlan} / year`}
                  </span>
                </p>
              </div>

              <div className="result__extra-packages">
                <p>
                  Extra packages{' '}
                  <span className="result__text">
                    : {this.state.extraPackages.join(', ')}
                  </span>
                </p>
              </div>
            </section>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
