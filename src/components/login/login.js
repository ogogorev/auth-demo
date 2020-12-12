import { h } from 'preact';

import { useLogin } from '../../hooks/login';
import style from './login.css'

const Login = () => {
  const [isLoading, error, login] = useLogin();

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

  return (
    <div class={style.container}>
      <form onSubmit={handleSubmit}>
        <div class={style.inputBox}>
          <label htmlFor="login">Login</label>
          <input
            name="login"
            type="text"
            onChange={handleLoginChange}
          />
        </div>

        <div class={style.inputBox}>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
          />
        </div>

        <button
          type="submit"
          class={style.submitButton}
          disabled={isLoading}
        >
          {isLoading ? '...' : 'Login'}
        </button>

        {error && (
          <div>
            {error}
          </div>
        )}
      </form>
    </div>
  );
}

export default Login;
