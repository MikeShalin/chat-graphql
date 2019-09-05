import React, { useState } from 'react'

export const useForm = () => {
  const [login, onChangeLogin] = useState('')
  const [password, onChangePassword] = useState('')
  const [error, setError] = useState(false)

  const actions = {
    login: onChangeLogin,
    password: onChangePassword,
  }

  const handleChange = (key: string) =>
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      // @ts-ignore
      const onChange = actions[key]
      onChange(target.value)
      setError(false)
    }

  return {
    login,
    password,
    error,
    setError,
    handleChange,
  }
}
