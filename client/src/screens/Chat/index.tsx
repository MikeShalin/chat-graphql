import React from 'react'

import map from 'lodash/map'
import {
  List,
  Container,
  Message as MessageUI,
} from 'semantic-ui-react'
import { useQuery } from '@apollo/react-hooks'
import m from 'moment'

import { Message } from 'features/Message'
import { Header } from 'features/Header'
import { ChatArea } from 'features/ChatArea'
import { Loader } from 'features/Loader'

import { GET_MESSAGES_LIST } from 'queries'

type TMessage = {
  id: string,
  author: {
    nick: string,
    user_pic: string,
    online: number,
  }
  message: string,
  createdAt: string,
} // todo чтобы не делать типизацию дважды, что можно сделать?

export const Chat = () => {
  const {
    data,
    loading,
    error,
  } = useQuery<{ messages: Array<TMessage> }>(GET_MESSAGES_LIST)
  if (!data) return null
  if (error) return (
    <MessageUI
      header='Has network error'
      content={String(error)}
      error
    />
  )
  if (loading) return <Loader />
  return (
    <Container>
      <Header />
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
              createdAt,
            }) => {
              const timeAgo = m(+createdAt).fromNow()
              return <List.Item key={id}>
                <Message
                  imgUrl={user_pic}
                  createdAt={timeAgo}
                  {...author}
                >
                  {message}
                </Message>
              </List.Item>
            },
          )
        }
      </List>
      <ChatArea />
    </Container>
  )
}
