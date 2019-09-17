import React from 'react'

import { Route, Switch as RouterSwitch, Redirect } from 'react-router-dom'

import get from 'lodash/get'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import { Login } from 'screens/Login'
import { Chat } from 'screens/Chat'
import { Registration } from 'screens/Registration'

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

  const render = (Screen: React.FC) => () => (
    get(data, 'isAuth')
      ? <Chat />
      : <Screen />
  )

  return (
    <RouterSwitch>
      <Route path='/login' component={render(Login)} />
      <Route path='/registration' component={render(Registration)} />
      <Route path='/' component={render(Login)} />
      <Redirect from='*' to='/chat' />
    </RouterSwitch>
  )
}
