import { gql } from 'apollo-boost'

export const ADDED_MESSAGE = gql`
  mutation($authorId: String, $message: String) {
    addMessage(authorId: $authorId, message: $message){
      id
      message
      createdAt
    }
  }
`