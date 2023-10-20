import React, { Component } from 'react';
import './validation.css'; 

class RealTimeFormValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {
        email: 'Invalid Email',
        password: 'Password is necessary',
      },
      passwordRequirements: {
        length: false,
        number: false,
        specialCharacter: false,
        uppercaseLetter: false,
      },
    };
  }

  validateForm = () => {
    const { email, password } = this.state;
    const errors = {
      email: 'Invalid Email',
      password: '',
    };

    // Email validation
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      errors.email = 'Invalid Email';
    }

    // Password validation
    const passwordRequirements = {
      length: password.length >= 8,
      number: /\d/.test(password),
      specialCharacter: /[!@#$%^&*]/.test(password),
      uppercaseLetter: /[A-Z]/.test(password),
    };

    if (password) {
      errors.password = '';
    } else {
      errors.password = 'Password is necessary';
    }

    this.setState({ errors, passwordRequirements });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, this.validateForm);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.validateForm();
    const { email, password, errors } = this.state;

    // Check if there are no errors, and submit the form
    if (!errors.email && !errors.password) {
      console.log('Form submitted with email: ', email, ' and password: ', password);
    }
  };

  render() {
    const { email, password, errors, passwordRequirements } = this.state;

    return (
      <div>
        <h2>Real-Time Form Validation</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.handleInputChange}
            />
            <div className={`error ${errors.email ? 'invalid' : ''}`}>{errors.email}</div>
          </div>

          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
            />
            <div className={`error ${errors.password ? 'invalid' : ''}`}>{errors.password}</div>
            <ul className="password-requirements">
              <li className={`password-requirement ${!passwordRequirements.length ? 'invalid' : 'valid'}`}>
                Must be at least 8 characters long
              </li>
              <li className={`password-requirement ${!passwordRequirements.number ? 'invalid' : 'valid'}`}>
                Must contain at least one number
              </li>
              <li className={`password-requirement ${!passwordRequirements.specialCharacter ? 'invalid' : 'valid'}`}>
                Must contain at least one special character
              </li>
              <li className={`password-requirement ${!passwordRequirements.uppercaseLetter ? 'invalid' : 'valid'}`}>
                Must contain at least one uppercase letter
              </li>
            </ul>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default RealTimeFormValidation;
