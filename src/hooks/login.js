import { useState } from 'preact/hooks'

function fakeLogin({ login, password }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      Math.random() > 0.99 ?
        res() :
        rej(new Error(LOGIN_ERRORS.WRONG_CREDENTIALS))
    }, 1500);
  })
}

export const LOGIN_ERRORS = {
  WRONG_CREDENTIALS: 'WRONG_CREDENTIALS',
  CONNECTION_ERROR: 'CONNECTION_ERROR',
}

export function useLogin() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null);
  
  const login = async (value) => {
    setIsLoading(true)
    setError(null)
    try {
      await fakeLogin(value)
    } catch (e) {
      setError(e.message)
    }
    setIsLoading(false)
  }

  return [isLoading, error, login]
}
