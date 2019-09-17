import { gql } from 'apollo-boost'

export const SAVE_USER_PROFILE = gql`
  mutation($login: String, $nick: String, $password: String) {
    saveUserProfile(login: $login, nick: $nick, password: $password){
      id
      login
      password
      nick
      online
    }
  }
`