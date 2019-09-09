import React from 'react'

import { Route, Switch as RouterSwitch, Redirect } from 'react-router-dom'

import get from 'lodash/get'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import { Login } from 'screens/Login'
import { Chat } from 'screens/Chat'
import { Profile } from 'screens/Profile'

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
      ? <Screen />
      : <Login />
  )

  return (
    <RouterSwitch>
      <Route path='/' exact render={render(Profile)} />
      <Route path='/login' component={Login} />
      <Route path='/chat' component={render(Chat)} />
      <Redirect from='*' to='/chat' />
    </RouterSwitch>
  )
}
