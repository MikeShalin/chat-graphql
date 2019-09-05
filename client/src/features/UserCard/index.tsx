import React from 'react'

import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import get from 'lodash/get'

import {
  Card,
  Icon,
  Image,
  // @ts-ignore
} from 'semantic-ui-react'

type TDataUser = {
  login: string
  password: string
  nick: string
  about: string
  user_pic: string
  online: number
}

const query = gql`
  {
    profile @client {
      nick
      about
      user_pic
      online
    }
  }
`

// @ts-ignore
export const UserCard: React.FC = () => {
  const { data, loading, error } = useQuery<TDataUser, string>(query )
  if (loading) return'...loading'
  if (error) return <p>ERROR</p>
  if (!data) return 'bad request'
  const {
    user_pic,
    nick,
    about,
    online,
  } = get(data, 'profile', {})
  return (
    <Card>
      <Image
        src={user_pic}
        wrapped ui={false}
      />
      <Card.Content>
        <Card.Header>{nick}</Card.Header>
        <Card.Description>
          {about}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          {online ? 'Online' : 'Offline'}
        </a>
      </Card.Content>
    </Card>
  )
}
