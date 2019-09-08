import React, { useState } from 'react'

import { useMutation } from '@apollo/react-hooks'
import { Form, Message as MessageUI, TextArea } from 'semantic-ui-react'

import { Button } from 'features/Button'
import { Loader } from 'features/Loader'

import { GET_MESSAGES_LIST } from 'queries'

import { ADDED_MESSAGE } from './mutations'

type TVariables = {
  authorId: string,
  message: string,
}

export const ChatArea = () => {
  const {
    onChange,
    message,
    handleOnChange,
  } = useTextArea()

  const [addedMessage, { error, loading }] = useMutation<null, TVariables>(
    ADDED_MESSAGE, {
      variables: { authorId: '5d68a7ba89179b3d36f51503', message },
      refetchQueries: [{ query: GET_MESSAGES_LIST }],
    },
  )

  const onSubmit = () => {
    onChange('')
    return addedMessage()
  }

  if (error) return (
    <MessageUI
      header='Has network error'
      content={String(error)}
      error
    />
  )
  if (loading) return <Loader />
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <TextArea
          placeholder='Start chat'
          value={message}
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group>
        <Button>Submit</Button>
      </Form.Group>
    </Form>
  )
}

const useTextArea = () => {
  const [message, onChange] = useState('')

  const handleOnChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    onChange(e.currentTarget.value)
  }

  return {
    message,
    handleOnChange,
    onChange,
  }
}