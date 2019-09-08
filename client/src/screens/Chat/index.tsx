import React from 'react'

import map from 'lodash/map'
import { List, Container } from 'semantic-ui-react'
import { useQuery } from '@apollo/react-hooks'

import { Message } from 'features/Message'
import { Header } from 'features/Header'
import { ChatArea } from 'features/ChatArea'
import { GET_MESSAGES_LIST } from './queries'

type TMessage = {
  id: string,
  author: {
    nick: string,
    user_pic: string,
    online: number,
  }
  message: string,
  timestamp: number,
} // todo чтобы не делать типизацию дважды, что можно сделать?

export const Chat = () => {
  const { data } = useQuery<{ messages: Array<TMessage> }>(GET_MESSAGES_LIST)
  if (!data) return null
  return (
    <Container content>
      <Header />
      <ChatArea />
      <List relaxed>
        {
          map(
            data.messages,
            ({
              author: {
                user_pic,
                ...author
              },
              message,
              id,
            }) => (
              <List.Item key={id}>
                <Message imgUrl={user_pic} {...author}>
                  {message}
                </Message>
              </List.Item>
            ),
          )
        }
      </List>
    </Container>
  )
}
