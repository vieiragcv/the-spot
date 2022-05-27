// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs

const typeDefs = gql`

type User {
    _id: ID
    username: String
    email: String
    category: String
    location: String
    downloadURL: String
    description: String
    preferences: String
}

type Preferences {
    _id: ID
    preferencesText: String
    username: String   
}

type Auth {
    token: ID!
    user: User
  }
  
type Query {
    me: User
    users: [User]
    user(username: String!): User
    preferences(username: String): [User]
    preferences(username: String): [POI]
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPreferences(username: String! preferencesText: String!): Preferences
    addFriend(friendId: ID!): User
}
`;

module.exports = typeDefs