import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import { useLogin, LOGIN_ERRORS } from '../../hooks/login';
import style from './login.css'

const LOGIN_FORM_ERRORS = {
  EMAIL_INCORRECT: 'LOGIN_INCORRECT',
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
  const [isLoading, error, login] = useLogin();
  const [loginInputState, setLoginInputState] = useState({ isInvalid: false })
  const [passwordInputState, setPasswordInputState] = useState({ isInvalid: false })

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formValue = {
      login: e.target.elements.login.value,
      password: e.target.elements.password.value,
    }

    console.log({ formValue })

    login(formValue)
  };

  const handleLoginChange = (e) => {
    const isValid = validateEmail(e.target.value)
    setLoginInputState({
      isInvalid: !isValid,
      error: !isValid ? LOGIN_FORM_ERRORS.EMAIL_INCORRECT : null, 
    })
  };

  useEffect(() => {
    if (error === LOGIN_ERRORS.WRONG_CREDENTIALS) {
      setLoginInputState({ isInvalid: true })
      setPasswordInputState({ isInvalid: true })
    }
  }, [error])

  console.log('states', loginInputState, passwordInputState)

  return (
    <div class={style.container}>
      <form onSubmit={handleSubmit}>
        <div class={style.inputBox}>
          <label htmlFor="login">Login</label>
          <input
            name="login"
            type="text"
            onChange={handleLoginChange}
            aria-invalid={loginInputState.isInvalid}
          />

          {loginInputState.error && (
            <p style={{ color: 'red' }}>
              {ERROR_MESSAGES_MAP[loginInputState.error]}
            </p>
          )}
        </div>

        <div class={style.inputBox}>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            aria-invalid={passwordInputState.isInvalid}
          />
        </div>

        {error && (
          <p style={{ color: 'red' }}>
            {ERROR_MESSAGES_MAP[error]}
          </p>
        )}

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
