import { h } from 'preact';
import { useState } from 'preact/hooks'

function fakeLogin({ login, password }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      Math.random() > 0.5 ? res() : rej()
    }, 1500);
  })
}

const ERRORS = {
  LOGIN_ERROR: 'LOGIN_ERROR',
}

function useLogin() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null);
  
  const login = async (value) => {
    setIsLoading(true)
    setError(null)
    try {
      await fakeLogin(value)
    } catch (e) {
      setError(ERRORS.LOGIN_ERROR)
    }
    setIsLoading(false)
  }

  return [isLoading, error, login]
}

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
