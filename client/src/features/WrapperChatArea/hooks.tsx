import React, { useState } from 'react'

import { useMutation } from '@apollo/react-hooks'

import { GET_MESSAGES_LIST } from 'queries'
import { ADDED_MESSAGE } from './mutations'

type TVariables = {
  authorId: string,
  message: string,
}

export const useGrapqlMutation = ({ message, authorId }: TVariables) => (
  useMutation<null, TVariables>(
    ADDED_MESSAGE, {
      variables: { authorId, message },
      refetchQueries: [{ query: GET_MESSAGES_LIST }],
    },
  )
)

export const useTextArea = () => {
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