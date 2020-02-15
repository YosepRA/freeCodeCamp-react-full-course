import React from 'react';
import FormPresentation from './04-24-44_FormPresentation';
import '../04-24-44_main.css';

class FormContainer extends React.Component {
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
      <FormPresentation data={this.state} handleChange={this.handleChange} />
    );
  }
}

export default FormContainer;
