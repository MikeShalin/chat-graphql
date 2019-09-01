import React from 'react'

import { useQuery } from '@apollo/react-hooks'

import { Form } from '../../features/Form'
import { useForm } from '../../hooks/useForm'
import { inputs } from './config'
import { GET_USER_BY_LOGIN_AND_PASSWORD } from './queries'

type TProps = {}

export const Login = ({}: TProps) => {
  const {
    login,
    password,
    handleChange,
  } = useForm()

  const { data, loading, error } = useQuery(
    GET_USER_BY_LOGIN_AND_PASSWORD,
    { variables: { login, password } }
  )

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.table({ login, password })
  }

  console.log({ data, loading, error })

  if (data.length) return <h2>login!</h2>
  return (
    <Form
      inputs={inputs}
      submitButtonValue='login'
      title='Log-in to your account'
      onChange={handleChange}
      values={{
        login,
        password,
      }}
      onSubmit={onSubmit}
    />
  )
}

