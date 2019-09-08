import React from 'react'

import { useApolloClient, useQuery } from '@apollo/react-hooks'

import { Form } from 'features/Form'
import { useForm } from 'hooks/useForm'
import { inputs } from './config'
import { GET_USER_BY_LOGIN_AND_PASSWORD } from './queries'

type TProps = {}

export const Login = ({}: TProps) => {
  const {
    login,
    password,
    handleChange,
    error,
    setError,
  } = useForm()
  const client = useApolloClient()
  const { data } = useQuery(GET_USER_BY_LOGIN_AND_PASSWORD,{
    variables: { login, password }
  })

  const { userLogin } = data
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setError(!userLogin)

    client.writeData({ // todo сделать фрагменты
        data: {
          isAuth: Boolean(userLogin),
          profile: userLogin
        },
    })
  }
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
      error={error}
    />
  )
}

