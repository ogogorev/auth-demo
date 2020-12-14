import { useState } from 'preact/hooks'

let counter = 0;
function fakeLogin({ login, password }) {
  counter++;
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (counter > 1) {
        if (password === 'qwerty') {
          counter = 0;
          res();
        } else {
          rej(new Error(LOGIN_ERRORS.WRONG_CREDENTIALS));
        }
      } else {
        rej(new Error(LOGIN_ERRORS.CONNECTION_ERROR))
      }
    }, 1500);
  });
}

export const LOGIN_ERRORS = {
  WRONG_CREDENTIALS: 'WRONG_CREDENTIALS',
  CONNECTION_ERROR: 'CONNECTION_ERROR',
}

export function useLogin(onSuccessfulLogin) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const login = async (value) => {
    setIsLoading(true);
    setError(null);
    try {
      await fakeLogin(value);
      if (onSuccessfulLogin) {
        onSuccessfulLogin();
      }
    } catch (e) {
      setError(e.message);
    }
    setIsLoading(false);
  }

  return [isLoading, error, login];
}
