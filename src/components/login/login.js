import { h } from 'preact';
import { useState } from 'preact/hooks'

function fakeLogin({ login, password }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      Math.random() > 0.3 ? res() : rej()
    }, 1500);
  })
}

function useLogin() {
  const [isLoading, setIsLoading] = useState(false)
  const login = async (value) => {
    setIsLoading(true)
    await fakeLogin(value)
    setIsLoading(false)
  }

  return [isLoading, login]
}

const Login = () => {
  const [isLoading, login] = useLogin();

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
      <form action="" onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
}

export default Login;
