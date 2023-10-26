import './validation.css';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
function RealTimeFormValidation() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: '',
    password: '',
    errors: {
      email: 'Email is necessary',
      password: 'Password is necessary',
    },
    emailRequirements: {
      hasAtSymbol: false,
      validFormat: false,
    },
    passwordRequirements: {
      length: false,
      number: false,
      specialCharacter: false,
      uppercaseLetter: false,
    },
  });
  const validateForm = () => {
    const { email, password } = state;
    const errors = {
      email: '',
      password: '',
    };
    // Email validation
    const hasAtSymbol = email.includes('@');
    const validFormat = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
    if (!email) {
      errors.email = 'Email is required';
    } else {
      if (!hasAtSymbol) {
        errors.email = 'Email must contain "@"';
      } else if (!validFormat) {
        errors.email = 'Invalid Email';
      }
    }
    const emailRequirements = {
      hasAtSymbol,
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

    setState({ ...state, errors, emailRequirements, passwordRequirements });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value }, validateForm);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    const { email, password, errors } = state;
    if (!errors.email && !errors.password) {
      console.log('Form submitted with email: ', email, ' and password: ', password);
      navigate('/'); // Navigate to the desired route
    }
  };
  const { email, password, errors, emailRequirements, passwordRequirements } = state;
  return (
    <div id="test">
      <h2>Real-Time Form Validation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            className={`entrada ${errors.email ? 'invalid' : emailRequirements.validFormat ? 'valid' : ''}`}
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
          <div className={`error ${errors.email ? 'invalid' : ''}`} />
          <ul className="email-requirements">
            <li className={`email-requirement ${emailRequirements.hasAtSymbol ? 'valid' : 'invalid'}`}>
              Email must contain "@"
            </li>
            <li className={`email-requirement ${emailRequirements.validFormat ? 'valid' : 'invalid'}`}>
              Email is valid
            </li>
          </ul>
        </div>
        <div>
          <label>Password:</label>
          <input
            className={`entrada ${errors.password ? 'invalid' : ''}`}
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
          <div className={`error ${errors.password ? 'invalid' : ''}`} />
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
export default RealTimeFormValidation;