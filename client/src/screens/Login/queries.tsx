import { gql } from 'apollo-boost'

export const GET_USER_BY_LOGIN_AND_PASSWORD = gql`
  query($login: String, $password: String) {
    userLogin(login: $login, password: $password) {
      id
      login
      password
      nick
      about
      user_pic
      online
    }
  }
`