import React from 'react'

import get from 'lodash/get'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import { Login } from '../../screens/Login'
import { Chat } from '../../screens/Chat'

const query = gql`
{
  isAuth @client
}
`

type TData = {
  isAuth: boolean
}

export const Switch = () => {
  const { data } = useQuery<TData, string>(query)
  return (
    get(data, 'isAuth')
      ? <Chat />
      : <Login />
  )
}
