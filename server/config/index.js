const USER = 'mike'
const PASS = '123'
const URI_DB = 'cluster0-on5fb.mongodb.net'
const NAME_DB = 'chat-graphql'
const CONNECTION_PARAMS = {
  retryWrites: true,
  w: 'majority',
  useNewUrlParser: true,
  useFindAndModify: false,
}

module.exports = {
  USER,
  PASS,
  URI_DB,
  NAME_DB,
  CONNECTION_PARAMS,
}