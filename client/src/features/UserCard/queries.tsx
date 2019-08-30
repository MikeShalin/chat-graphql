import { gql } from 'apollo-boost'

export const GET_USER_BY_ID = gql`
  query($id: ID) {
    user(id: $id) {
      login
      nick
      about
      user_pic
      online
    }
  }
`