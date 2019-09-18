import React, { ReactElement } from 'react'

import { Form, Message as MessageUI } from 'semantic-ui-react'

import { Loader } from 'features/Loader'

import { useTextArea, useGrapqlMutation } from './hooks'

export const WrapperChatArea = ({ children }: { children: ReactElement }) => {
  const {
    onChange,
    message,
    handleOnChange,
  } = useTextArea()

  const [addedMessage, { error, loading }] = useGrapqlMutation({
    message,
    authorId: '5d68a7ba89179b3d36f51503',
  })

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
      {
        React.cloneElement(
          children, {
            handleOnChange,
            message,
          },
        )
      }
    </Form>
  )
}
