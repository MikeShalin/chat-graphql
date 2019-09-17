import React from 'react'

import { Link } from 'react-router-dom'

import { useApolloClient, useLazyQuery } from '@apollo/react-hooks'
import { Message } from 'semantic-ui-react'
import get from 'lodash/get'

import { Form } from 'features/Form'
import { FormWrapper } from 'features/FormWrapper'
import { Loader } from 'features/Loader'
import { useForm } from 'hooks/useForm'
import { saveProfile } from 'helpers/saveProfile'
import { checkedNotEmptyInputs } from 'helpers/form'

import { inputs } from './config'
import { GET_USER_BY_LOGIN_AND_PASSWORD } from './queries'

type THook = {
  login: string,
  password: string,
  setError: (value: boolean) => void
}

const useLogin = ({ login, password, setError }: THook) => {
  const client = useApolloClient()

  const [getUserQuery, { data, loading }] = useLazyQuery(
    GET_USER_BY_LOGIN_AND_PASSWORD,
    {
      variables: { login, password },
      onCompleted: () => {
        const userLogin = get(data, 'userLogin')

        setError(!userLogin)
        if (userLogin) {
          saveProfile(userLogin, client)
        }
      },
    },
  )


  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    getUserQuery()
  }

  return { onSubmit, loading }
}

export const Login = () => {
  const {
    handleChange,
    error,
    setError,
    nick,
    ...values
  } = useForm()
  const { onSubmit, loading } = useLogin({ ...values, setError })
  if (loading) return <Loader />
  return (
    <FormWrapper>
      <Form
        inputs={inputs}
        submitButtonValue='login'
        title='Log-in to your account'
        onChange={handleChange}
        values={values}
        onSubmit={onSubmit}
        error={error}
        submitButtonDisable={loading || checkedNotEmptyInputs(values)}
      />
      <Message>
        New to us?
        <Link to='registration'> Sign Up</Link>
      </Message>
    </FormWrapper>
  )
}

