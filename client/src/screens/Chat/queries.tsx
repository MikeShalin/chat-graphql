import { gql } from 'apollo-boost'

export const GET_MESSAGES_LIST = gql`
  query {
    messages {
      id
      authorId
      message
      timestamp
    }
  }
`