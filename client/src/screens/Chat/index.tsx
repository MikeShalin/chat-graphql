import React from 'react'

import { List } from 'semantic-ui-react'
import { useQuery  } from '@apollo/react-hooks'

import { Message } from '../../features/Message'
import { GET_MESSAGES_LIST } from './queries'

export const Chat = () => {
  const { data } = useQuery(GET_MESSAGES_LIST)
  console.log(data)
  return (
    <List relaxed>
      <List.Item>
        <Message
          imgUrl='https://sun9-12.userapi.com/c855616/v855616888/d8e07/3FSBKuZOcZg.jpg'
          nick='Pidr "Bones" Loh'
          online={1}
        >
          Hello Jon!
        </Message>
      </List.Item>
      <List.Item>
        <Message
          imgUrl='https://sun9-12.userapi.com/c855616/v855616888/d8e07/3FSBKuZOcZg.jpg'
          nick='Jon "Bones" Jones'
          online={1}
        >
          Hello Pidr!
        </Message>
      </List.Item>
    </List>
  )
}
