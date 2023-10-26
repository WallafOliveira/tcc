import "./login.css";
import React, { useState } from "react";
import logo from "./logo.png";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();

  const [valida, setValida] = useState({
    email: "",
    password: "",
    errors: {
      email: "Email is necessary",
      password: "Password is necessary",
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

  function validateForm() {
    const { email, password } = valida;
    const errors = {
      email: "",
      password: "",
    };
    // Email validation
    const hasAtSymbol = email.includes("@");
    const validFormat = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(
      email
    );
    if (!email) {
      errors.email = "Email is required";
    } else {
      if (!hasAtSymbol) {
        errors.email = 'Email must contain "@"';
      } else if (!validFormat) {
        errors.email = "Invalid Email";
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
      errors.password = "";
    } else {
      errors.password = "Password is necessary";
    }
    setValida({ errors, emailRequirements, passwordRequirements });
  }

  function handleInputChange (e) {
    const { name, value } = e.target; 
    // setValida({ [name]: value }, validateForm()); ---- parei aqui
  };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.validateForm();
//     const { email, password, errors } = this.state;

//     if (!errors.email && !errors.password) {
//       console.log(
//         "Form submitted with email: ",
//         email,
//         " and password: ",
//         password
//       );
//     }
//   };

  return (
    <div className="container_login">
      <img
        className="logo"
        src={logo}
        alt="Eduquiz"
        onClick={() => {
          navigate("/");
        }}
      />
      <span className="title">Bem vindo de volta!</span>
      <div className="email_password">
        {/* <input className="input" type="email" placeholder="email@gmail.com" /> */}
        <div>
            <label>Email:</label>
            <input
              className={`entrada ${valida.errors.email ? 'invalid' : valida.emailRequirements.validFormat ? 'valid' : ''}`}
              type="email"
              placeholder="email@gmail.com"
              name="email"
              value={valida.email}
              onChange={e => handleInputChange(e)}
            />
            <div className={`error ${valida.errors.email ? 'invalid' : ''}`}/>
            <ul className="email-requirements">
              <li className={`email-requirement ${valida.emailRequirements.hasAtSymbol ? 'valid' : 'invalid'}`}>
                Email must contain "@"
              </li>
              <li className={`email-requirement ${valida.emailRequirements.validFormat ? 'valid' : 'invalid'}`}>
                Email is valid
              </li>
            </ul>
          </div>
        <input className="input" type="password" placeholder="123ABC!" />
      </div>
      <div className="check_btn">
        <label className="checkbox-label">
          <input type="checkbox" />
          Lembrar Usuário
        </label>
        <a href="/">Esqueseu sua senha?</a>
      </div>
      <div className="btn_cad_log">
        <button
          className="btn"
          onClick={() => {
            navigate("/homeusuario");
          }}
        >
          Login
        </button>
        <button
          className="btn"
          onClick={() => {
            navigate("/cadastro");
          }}
        >
          Cadastro
        </button>
      </div>
      <div className="rede_login">
        <img
          className="logo_social"
          src="https://img.freepik.com/icones-gratis/google_318-278809.jpg"
          alt="Google"
          onChange="$"
        />
        <img
          className="logo_social"
          src="https://www.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png"
          alt="Facebook"
          onChange="$"
        />
      </div>
    </div>
  );
}
export default Login;
