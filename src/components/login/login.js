import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import { useLogin, ERRORS } from '../../hooks/login';
import style from './login.css'

const ERROR_MESSAGES_MAP = {
  [ERRORS.WRONG_CREDENTIALS]: 'Your login and/or password do not match.',
  [ERRORS.CONNECTION_ERROR]: 'Our server is currently unavailable. Please try again later.',
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

  const handleLoginChange = (e) => {};

  useEffect(() => {
    if (error === ERRORS.WRONG_CREDENTIALS) {
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
