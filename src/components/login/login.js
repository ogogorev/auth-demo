import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import { useLogin, LOGIN_ERRORS } from '../../hooks/login';
import style from './login.css'

const LOGIN_FORM_ERRORS = {
  EMAIL_INCORRECT: 'EMAIL_INCORRECT',
}

const ERROR_MESSAGES_MAP = {
  [LOGIN_ERRORS.WRONG_CREDENTIALS]: 'Your login and/or password do not match.',
  [LOGIN_ERRORS.CONNECTION_ERROR]: 'Our server is currently unavailable. Please try again later.',
  [LOGIN_FORM_ERRORS.EMAIL_INCORRECT]: 'Please enter a correct email address, e.g. username@example.com'
}

const emailRegExp = /^(?!.*\.\.)[\w.-]+@[\w-.]+[\w]{2}$/
function validateEmail(email) {
  return emailRegExp.test(email)
}

const Login = () => {
  const [isLoading, error, sendLogin] = useLogin();
  const [login, setLogin] = useState({ value: '', isValid: true });
  const [password, setPassword] = useState({ value: '', isValid: true });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      const formValue = { login: login.value, password: password.value };
  
      console.log({ formValue });
  
      sendLogin(formValue);
    }
  };

  const handleLoginChange = (e) => {
    const value = e.target.value;
    const error = validateLogin(value);
    setLogin({ value, isValid: !error, error });
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    const error = validatePassword(value);
    setPassword({ value, isValid: !error, error });
  };

  const validateLogin = (login) => {
    const isValid = validateEmail(login);
    if (!isValid) {
      return { error: LOGIN_FORM_ERRORS.EMAIL_INCORRECT };
    }
  };

  const validatePassword = (password) => {};

  const isFormValid = () => {
    return login.isValid && password.isValid;
  };

  return (
    <div class={style.container}>
      <form onSubmit={handleSubmit}>
        <div class={style.inputBox}>
          <label htmlFor="login">Login</label>
          <input
            name="login"
            type="text"
            onChange={handleLoginChange}
            value={login.value}
            aria-invalid={!login.isValid}
          />

          {login.error && (
            <p style={{ color: 'red' }}>
              {ERROR_MESSAGES_MAP[login.error]}
            </p>
          )}
        </div>

        <div class={style.inputBox}>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            value={password.value}
            onChange={handlePasswordChange}
            aria-invalid={!password.isValid}
          />
        </div>

        {error && (
          <p style={{ color: 'red' }}>
            {ERROR_MESSAGES_MAP[error]}
          </p>
        )}

        is form valid: {isFormValid()+''}

        <button
          type="submit"
          class={style.submitButton}
          disabled={isLoading}
        >
          {isLoading ? '...' : 'Login'}
        </button>
        
      </form>
    </div>
  );
}

export default Login;
