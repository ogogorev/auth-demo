import { h } from 'preact';

import { useLogin } from '../../hooks/login';

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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="login">Login</label>
          <input
            name="login"
            type="text"
            onChange={handleLoginChange}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
          />
        </div>

        <button type="submit" disabled={isLoading}>
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
