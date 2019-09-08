const { User } = require('../models/user');
const { Message } = require('../models/message');

const { PubSub } = require('apollo-server');

const pubsub = new PubSub();

const typeDefs = `
type Message {
  id: ID
  author: User
  message: String
  createdAt: String
  updatedAt: String
}

type User {
  id: ID
  login: String
  password: String
  nick: String
  about: String
  user_pic: String
  online: Int
}

type Subscription {
  enteredUser(nick: String): User
  exitedUser(nick: String): User
  addedMessage(authorId: String, messageId: String): Message
}

type Query {
  user(id: ID): User
  userLogin(login: String, password: String): User
  users: [User]
  message(id: ID): Message
  messages: [Message]
}

type Mutation {
  saveUserProfile(login: String, nick: String, about: String, user_pic: String): User
  exitUserFromChat(id: ID, nick: String): User
  addMessage(authorId: String, message: String): Message
}
`;

const ENTERED_USER = 'ENTERED_USER';
const EXITED_USER = 'EXITED_USER';
const ADDED_MESSAGE = 'ADDED_MESSAGE';

const resolvers = {
  Subscription: {
    enteredUser: {
      subscribe: () => pubsub.asyncIterator([ENTERED_USER]),
    },
    exitedUser: {
      subscribe: () => pubsub.asyncIterator([EXITED_USER]),
    },
    addedMessage: {
      subscribe: () => pubsub.asyncIterator([ADDED_MESSAGE]),
    },
  },
  Query: {
    user: (_, { id }) => User.findById(id),
    userLogin: (_, { login, password }) => User.findOne({ login, password }),
    users: () => User.find({}),
    message: (_, { id }) => Message.findById(id),
    messages: () => Message.find({}).populate('author')
  },
  Mutation: {
    saveUserProfile: (_, args) => {
      const todo = new User({ online: 1, ...args });
      pubsub.publish(
        ENTERED_USER, {
          enteredUser: { nick: args.nick },
        })
      return todo.save();
    },
  
    exitUserFromChat: (_, { id, nick }) => {
      pubsub.publish(EXITED_USER, { exitedUser: { nick } })
      return User.findByIdAndUpdate(
        id,
        { $set: { online: 0 } },
        { new: true },
      );
    },
  
    addMessage: (_, { authorId, message }) => {
      pubsub.publish(ADDED_MESSAGE, { authorId, message })
      const userMessage = new Message({
        message,
        author: authorId,
      });
      return userMessage.save();
    },
  },
};

module.exports = { typeDefs, resolvers };