const { User } = require('../models/user');

const { PubSub } = require('apollo-server');

const pubsub = new PubSub();

const typeDefs = `
type User {
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
}

type Query {
  user(id: ID): User
  users: [User]
}

type Mutation {
  saveUserProfile(login: String, nick: String, about: String, user_pic: String): User
  exitUserFromChat(id: ID, nick: String): User
}
`;

const ENTERED_USER = 'ENTERED_USER';
const EXITED_USER = 'EXITED_USER';

const resolvers = {
  Subscription: {
    enteredUser: {
      subscribe: () => pubsub.asyncIterator([ENTERED_USER]),
    },
    exitedUser: {
      subscribe: () => pubsub.asyncIterator([EXITED_USER]),
    },
  },
  Query: {
    user: (_, { id }) => User.findById(id),
    users: () => User.find({}),
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
  },
};

module.exports = { typeDefs, resolvers };