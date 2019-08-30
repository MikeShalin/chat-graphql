// @ts-ignore
import React from 'react'

// @ts-ignore
import { useQuery } from '@apollo/react-hooks'
import { GET_USER_BY_ID } from './queries'

import {
  // @ts-ignore
  Card,
  // @ts-ignore
  Icon,
  // @ts-ignore
  Image,
} from 'semantic-ui-react'


type TDataUser = {
  login: string
  password: string
  nick: string
  about: string
  user_pic: string
  online: number
}
// @ts-ignore
export const UserCard: React.FC = () => {
  const { data, loading, error } = useQuery(
    GET_USER_BY_ID,
    { variables: { id: '5d68a7ba89179b3d36f51503' } }
  )
  if (loading) return'...loading'
  if (error) return <p>ERROR</p>
  return (
    <Card>
      <Image
        src={data.user.user_pic}
        wrapped ui={false}
      />
      <Card.Content>
        <Card.Header>{data.user.nick}</Card.Header>
        <Card.Description>
          {data.user.about}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          {data.user.online ? 'Online' : 'Offline'}
        </a>
      </Card.Content>
    </Card>
  )
}
