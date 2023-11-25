import React, { useState } from 'react';
import 'login.css';

const Login = () => {
  // State variables for controlling form visibility and handling errors
  const [isLoginFormVisible, setLoginFormVisible] = useState(true);
  const [loginError, setLoginError] = useState('');
  const [createAccountError, setCreateAccountError] = useState('');

  // Function to toggle between login and create account forms
  const toggleForm = () => {
    setLoginFormVisible(!isLoginFormVisible);
    setLoginError('');
    setCreateAccountError('');
  };

  // Function to handle login form submission
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    // Assuming you have state for username and password
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;

    try {
      // You may want to make an API call to your backend for authentication
      const response = await fetch('your-authentication-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Successful login logic (e.g., redirect to another page)
        console.log('Login successful');
      } else {
        // Handle login error
        const responseBody = await response.json();
        setLoginError(responseBody.message || 'Invalid username/password combination');
      }
    } catch (error) {
      // Handle fetch or other errors
      console.error('Login error:', error);
    }
  };

  // Function to handle create account form submission
  const handleCreateAccountSubmit = async (e) => {
    e.preventDefault();

    // Assuming you have state for username, email, password, and confirmPassword
    const username = e.target.elements.username.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const confirmPassword = e.target.elements.confirmPassword.value;

    if (password !== confirmPassword) {
      setCreateAccountError("Passwords don't match");
      return;
    }

    try {
      // You may want to make an API call to your backend for user registration
      const response = await fetch('your-registration-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        // Successful registration logic (e.g., redirect to login page)
        console.log('Registration successful');
        // You may want to redirect to the login page after successful registration
        setLoginFormVisible(true);
      } else {
        // Handle registration error
        const responseBody = await response.json();
        setCreateAccountError(responseBody.message || 'Error creating account');
      }
    } catch (error) {
      // Handle fetch or other errors
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="container">
      {/* Login Form */}
      <form className={`form ${isLoginFormVisible ? '' : 'form--hidden'}`} id="login" onSubmit={handleLoginSubmit}>
        <h1 className="form__title">Login</h1>
        <div className="form__message form__message--error">{loginError}</div>
        <div className="form__input-group">
          <input type="text" className="form__input" autoFocus placeholder="Username or email" name="username" />
          <div className="form__input-error-message"></div>
        </div>
        <div className="form__input-group">
          <input type="password" className="form__input" autoFocus placeholder="Password" name="password" />
          <div className="form__input-error-message"></div>
        </div>
        <button className="form__button" type="submit">
          Continue
        </button>
        <p className="form__text">
          <a href="#" className="form__link">
            Forgot your password?
          </a>
        </p>
        <p className="form__text">
          <a className="form__link" href="#" onClick={toggleForm}>
            Don't have an account? Create account
          </a>
        </p>
      </form>

      {/* Create Account Form */}
      <form className={`form ${isLoginFormVisible ? 'form--hidden' : ''}`} id="createAccount" onSubmit={handleCreateAccountSubmit}>
        <h1 className="form__title">Create Account</h1>
        <div className="form__message form__message--error">{createAccountError}</div>
        <div className="form__input-group">
          <input type="text" id="signupUsername" className="form__input" autoFocus placeholder="Username" name="username" />
          <div className="form__input-error-message"></div>
        </div>
        <div className="form__input-group">
          <input type="text" className="form__input" autoFocus placeholder="Email Address" name="email" />
          <div className="form__input-error-message"></div>
        </div>
        <div className="form__input-group">
          <input type="password" className="form__input" autoFocus placeholder="Password" name="password" />
          <div className="form__input-error-message"></div>
        </div>
        <div className="form__input-group">
          <input type="password" className="form__input" autoFocus placeholder="Confirm password" name="confirmPassword" />
          <div className="form__input-error-message"></div>
        </div>
        <button className="form__button" type="submit">
          Continue
        </button>
        <p className="form__text">
          <a className="form__link" href="#" onClick={toggleForm}>
            Already have an account? Sign in
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
