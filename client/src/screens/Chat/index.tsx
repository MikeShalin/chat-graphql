import React from 'react'

import map from 'lodash/map'
import get from 'lodash/get'
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
import { WrapperChatArea } from 'features/WrapperChatArea'
import { Loader } from 'features/Loader'
import { ButtonLogout } from 'features/ButtonLogout'

import { GET_MESSAGES_LIST } from 'queries'
import { GET_LOCAL_STATE_PROFILE } from './queries'

type TMessage = {
  id: string,
  author: {
    nick: string,
    online: number,
  }
  message: string,
  createdAt: string,
} // todo чтобы не делать типизацию дважды, что можно сделать?

type TDataUser = {
  nick: string
}
export const Chat = () => {
  const {
    data,
    loading,
    error,
  } = useQuery<{ messages: Array<TMessage> }>(GET_MESSAGES_LIST)
  const {
    data: profile,
    // loading,
    // error
  } = useQuery<TDataUser>(GET_LOCAL_STATE_PROFILE )
  console.log({profile})
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
      <ButtonLogout />
      <List relaxed>
        {
          map(
            data.messages,
            ({
              author,
              message,
              id,
              createdAt,
            }) => {
              const timeAgo = m(+createdAt).fromNow()
              return <List.Item key={id}>
                <Message
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
      {/*
       // @ts-ignore*/}
      <WrapperChatArea>
        {/*
        // @ts-ignore todo остальные пропсы я передаю через cloneElement но тс их не видит*/}
        <ChatArea nick={get(profile, ['profile', 'nick'])}/>
      </WrapperChatArea>
    </Container>
  )
}
