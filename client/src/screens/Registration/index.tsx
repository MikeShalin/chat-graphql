import React from 'react'

import { Link } from 'react-router-dom'
import { Message } from 'semantic-ui-react'

import { Form } from 'features/Form'
import { FormWrapper } from 'features/FormWrapper'
import { Loader } from 'features/Loader'
import { useForm } from 'hooks/useForm'
import { checkedNotEmptyInputs } from 'helpers/form'

import { inputs } from './config'
import { useRegistration } from './hooks'

export const Registration = () => {
  const {
    handleChange,
    error,
    setError,
    nick,
    ...values
  } = useForm()
  const { onSubmit, loading } = useRegistration({ ...values, setError, nick })
  if (loading) return <Loader />
  return (
    <FormWrapper>
      <Form
        inputs={inputs}
        submitButtonValue='sign up'
        title='Let`s sign up!'
        onChange={handleChange}
        values={values}
        onSubmit={onSubmit}
        error={error}
        submitButtonDisable={loading || checkedNotEmptyInputs({ ...values, nick })}
      />
      <Message>
        Have account?
        <Link to='login'> Log-in</Link>
      </Message>
    </FormWrapper>
  )
}

