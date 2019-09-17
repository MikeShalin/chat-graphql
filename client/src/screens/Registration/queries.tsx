import { gql } from 'apollo-boost'

export const GET_USER_BY_LOGIN = gql`
query($login: String) {
  getUser(login: $login){
    id
  }
}
`