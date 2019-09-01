import React, { useState } from 'react'

import { Form } from '../../features/Form'
import { inputs } from './config'

type TProps = {}

export const Login = ({}: TProps) => {
  const { value, onChange } = useLogin()
  return (
    <Form
      inputs={inputs}
      submitButtonValue='login'
      title='Log-in to your account'
      onChange={console.log}
      values={{
        login: value,
        password: value,
      }}
    />
  )
}

export const useLogin = () => {
  const [value, onChange] = useState('')
  return { value, onChange }
}