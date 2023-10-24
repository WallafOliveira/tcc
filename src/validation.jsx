import React, { Component } from 'react';
import './validation.css';

class RealTimeFormValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {
        email: '',
        password: 'Password is necessary',
      },
      emailRequirements: {
        hasAtSymbol: false,
        hasLettersAfterAt: false,
        validFormat: false,
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
      email: '',
      password: '',
    };

    // Email validation
    const hasAtSymbol = email.includes('@');
    const hasLettersAfterAt = /^[^@]+@[^@]+$/.test(email);
    const validFormat = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);

    if (!email) {
      errors.email = 'Email is required';
    } else {
      if (!hasAtSymbol) {
        errors.email = 'Email must contain "@"';
      } else if (!hasLettersAfterAt) {
        errors.email = 'Email must have letters after "@"';
      } else if (!validFormat) {
        errors.email = 'Invalid Email';
      }
    }

    const emailRequirements = {
      hasAtSymbol,
      hasLettersAfterAt,
      validFormat,
    };

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

    this.setState({ errors, emailRequirements, passwordRequirements });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, this.validateForm);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.validateForm();
    const { email, password, errors } = this.state;

    if (!errors.email && !errors.password) {
      console.log('Form submitted with email: ', email, ' and password: ', password);
    }
  };

  render() {
    const { email, password, errors, emailRequirements, passwordRequirements } = this.state;

    return (
      <div>
        <h2>Real-Time Form Validation</h2>
        <form id="test" onSubmit={this.handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              className={`entrada ${errors.email ? 'invalid' : emailRequirements.validFormat ? 'valid' : ''}`}
              type="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
            />
            <div className={`error ${errors.email ? 'invalid' : ''}`}/>
            <ul className="email-requirements">
              <li className={`email-requirement ${emailRequirements.hasAtSymbol ? 'valid' : 'invalid'}`}>
                Email must contain "@"
              </li>
              <li className={`email-requirement ${emailRequirements.hasLettersAfterAt ? 'valid' : 'invalid'}`}>
                Email must have letters after "@"
              </li>
              <li className={`email-requirement ${emailRequirements.validFormat ? 'valid' : 'invalid'}`}>
                Email is valid
              </li>
            </ul>
          </div>

          <div>
            <label>Password:</label>
            <input className={`entrada ${errors.password ? 'invalid' : ''}`}
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
            />
            <div className={`error ${errors.password ? 'invalid' : ''}`}></div>
            <ul className="password-requirements">
              <li className={`password-requirement ${passwordRequirements.length ? 'valid' : 'invalid'}`}>
                Must be at least 8 characters long
              </li>
              <li className={`password-requirement ${passwordRequirements.number ? 'valid' : 'invalid'}`}>
                Must contain at least one number
              </li>
              <li className={`password-requirement ${passwordRequirements.specialCharacter ? 'valid' : 'invalid'}`}>
                Must contain at least one special character
              </li>
              <li className={`password-requirement ${passwordRequirements.uppercaseLetter ? 'valid' : 'invalid'}`}>
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
