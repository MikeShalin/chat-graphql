import React from 'react'

import get from 'lodash/get'
import {
  useApolloClient,
  useMutation,
  useLazyQuery,
} from '@apollo/react-hooks'

import { saveProfile } from 'helpers/saveProfile'

import { SAVE_USER_PROFILE } from './mutations'
import { GET_USER_BY_LOGIN } from './queries'


type THook = {
  login: string,
  password: string,
  nick: string,
  setError: (value: boolean) => void
}

export const useRegistration = ({
  login,
  password,
  setError,
  nick,
}: THook) => {
  const client = useApolloClient()
  const [saveUserProfile] = useMutation(SAVE_USER_PROFILE)
  const [getUserQuery, { data: dataQuery, loading }] = useLazyQuery(
    GET_USER_BY_LOGIN,
    {
      variables: { login },
      onCompleted: () => {
        const hasUser = get(dataQuery, 'getUser')
        if (hasUser) return setError(true)
        const promise = saveUserProfile({
          variables: {
            login,
            password,
            nick,
          },
        })

        promise.then(({ data }) => saveProfile(data.saveUserProfile, client))
      }
    }
  )

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    getUserQuery()
  }

  return { onSubmit, loading }
}
