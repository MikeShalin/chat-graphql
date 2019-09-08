import { gql } from 'apollo-boost'

export const GET_MESSAGES_LIST = gql`
  query {
    messages {
      id
      author{
        nick
        user_pic
        online
      }
      message
      createdAt
    }
  }
`