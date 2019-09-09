import React from 'react'

import { useApolloClient } from '@apollo/react-hooks'

import { Button } from 'features/Button'

export const ButtonLogout = () => {
  const client = useApolloClient()

  const handleLogout = () => {
    localStorage.removeItem('isAuth') // todo нет тестов для этого
    localStorage.removeItem('profile') // todo нет тестов для этого
    client.writeData({
      data: {
        isAuth: false,
        profile: null,
      },
    })
  }

  return (
    <Button onClick={handleLogout}>
      logout
    </Button>
  )
}
