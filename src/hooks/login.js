import { useState } from 'preact/hooks'

function fakeLogin({ login, password }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      Math.random() > 0.5 ? res() : rej()
    }, 1500);
  })
}

export const ERRORS = {
  LOGIN_ERROR: 'LOGIN_ERROR',
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
      setError(ERRORS.LOGIN_ERROR)
    }
    setIsLoading(false)
  }

  return [isLoading, error, login]
}
