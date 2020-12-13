import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import Error from '../form/error/error';
import { useLogin, LOGIN_ERRORS } from '../../hooks/login';
import style from './login.css';

const LOGIN_FORM_ERRORS = {
  EMAIL_INCORRECT: 'EMAIL_INCORRECT',
  LOGIN_REQUIRED: 'LOGIN_REQUIRED',
  PASSWORD_REQUIRED: 'PASSWORD_REQUIRED',
};

const ERROR_MESSAGES_MAP = {
  [LOGIN_ERRORS.WRONG_CREDENTIALS]: 'Your login and/or password do not match.',
  [LOGIN_ERRORS.CONNECTION_ERROR]: 'Our server is currently unavailable. Please try again later.',
  [LOGIN_FORM_ERRORS.EMAIL_INCORRECT]: 'Please enter a correct email address, e.g. username@example.com',
  [LOGIN_FORM_ERRORS.LOGIN_REQUIRED]: 'Login is required.',
  [LOGIN_FORM_ERRORS.PASSWORD_REQUIRED]: 'Password is required.',
};

const emailRegExp = /^(?!.*\.\.)[\w.-]+@[\w-.]+[\w]{2}$/
function validateEmail(email) {
  return emailRegExp.test(email)
}

function useFormInput(initialValue) {
  const [state, setState] = useState({
    value: initialValue,
    isValid: true,
    isDirty: false,
  });
  
  const update = (newState) => {
    setState(state => ({ ...state, ...newState }));
  };

  return [state, update];
}

const Login = () => {
  const [isLoading, error, sendLogin] = useLogin();
  const [login, setLogin] = useFormInput('');
  const [password, setPassword] = useFormInput('');

  console.log('render')

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const formValue = { login: login.value, password: password.value };
  
      console.log({ formValue });

      makePristine();
  
      sendLogin(formValue);
    }
  };

  const handleLoginChange = (e) => {
    updateLogin(e.target.value);
  };
  
  const handlePasswordChange = (e) => {
    updatePassword(e.target.value);
  };

  const validateLogin = (value) => {
    value = value ?? login.value;
    let error = null;

    if (!value) {
      error = LOGIN_FORM_ERRORS.LOGIN_REQUIRED;
    }
  
    if (!error && !validateEmail(value)) {
      error = LOGIN_FORM_ERRORS.EMAIL_INCORRECT;
    }

    setLogin({ isValid: !error, error: { error } });
    return !error;
  };
  
  const validatePassword = (value) => {
    value = value ?? password.value;
    let error = null;

    if (!value) {
      error = LOGIN_FORM_ERRORS.PASSWORD_REQUIRED;
    }

    setPassword({ isValid: !error, error : { error } });
    return !error;
  };
  
  const updateLogin = (value) => {
    setLogin({ value });
    validateLogin(value);
  };

  const updatePassword = (value) => {
    setPassword({ value });
    validatePassword(value);
  };

  const validateForm = () => {
    return validateLogin() & validatePassword();
  };

  const isFormValid = () => login.isValid && password.isValid;
  const isFormDirty = () => login.isDirty || password.isDirty;
  const makePristine = () => {
    setLogin({ isDirty: false });
    setPassword({ isDirty: false });
  };

  return (
    <div class={style.container}>
      <form onSubmit={handleSubmit}>
        <div class={style.inputBox}>
          <label htmlFor="login">Login</label>
          <input
            name="login"
            type="text"
            placeholder="Email address"
            value={login.value}
            onChange={handleLoginChange}
            onFocus={() => setLogin({ isDirty: true })}
            aria-invalid={!login.isValid}
          />

          <Error
            isDisplayed={login.error}
            msg={ERROR_MESSAGES_MAP[login.error?.error]}
          />
        </div>

        <div class={style.inputBox}>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password.value}
            onChange={handlePasswordChange}
            onFocus={() => setPassword({ isDirty: true })}
            aria-invalid={!password.isValid}
          />

          <Error
            isDisplayed={password.error}
            msg={ERROR_MESSAGES_MAP[password.error?.error]}
          />
        </div>

        <Error
          isDisplayed={!isFormDirty() && error}
          msg={ERROR_MESSAGES_MAP[error]}
        />

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
