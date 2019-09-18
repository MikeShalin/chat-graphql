// import { useQuery } from '@apollo/react-hooks'

import { gql } from 'apollo-boost'

export const GET_LOCAL_STATE_PROFILE = gql`
  {
    profile @client {
      nick
    }
  }
`

// // @ts-ignore
// export const UserCard: React.FC = () => {
//   const { data, loading, error } = useQuery<TDataUser, string>(query )
