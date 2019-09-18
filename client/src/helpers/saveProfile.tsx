export const saveProfile = (userLogin: {}, client: any) => { //todo profile type && apolo client
  localStorage.isAuth = Boolean(userLogin)
  localStorage.profile = JSON.stringify(userLogin)
  client.writeData({ // todo сделать фрагменты
    data: {
      isAuth: Boolean(userLogin),
      profile: userLogin,
    },
  })
}
