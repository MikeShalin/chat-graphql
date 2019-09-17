import React, { useState } from 'react'

type TActions = {
 [key: string]: (value: string) => void
}

export const useForm = () => {
  const [login, onChangeLogin] = useState('')
  const [password, onChangePassword] = useState('')
  const [nick, onChangeNick] = useState('')
  const [error, setError] = useState(false)

  const actions: TActions = {
    login: onChangeLogin,
    password: onChangePassword,
    nick: onChangeNick,
  }

  const handleChange = (key: string) =>
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      const onChange = actions[key]
      onChange(target.value)
      setError(false)
    }

  return {
    login,
    password,
    nick,
    error,
    setError,
    handleChange,
  }
}
