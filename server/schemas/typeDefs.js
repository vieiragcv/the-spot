const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    username: String
    email: String
    openBio: String
    closedBio: String
    category: String
    location: String
    preferences: String
    friends: [User]
    comments: [Comment]
}

type Comment {
    _id: ID
    commentText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
}

type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
}

type Preference {
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
    comments(username: String): [Comment]
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addLocation(username: String!, location: String!): Auth
    addOpenBio(username: String!, openBio: String!): User
    addClosedBio(username: String!, closedBio: String!): User
    addComment(commentText: String!): Comment
    updateUser(openBio: String!, closedBio: String!, category: String!): User
    addPreference(userId: ID!, preferenceBody: String!): User
    addReaction(commentId: ID!, reactionBody: String!): Comment
    addFriend(friendId: ID!): User
}
`;

module.exports = typeDefs;

// In mutation you will need an addPreferences function:
// addPreferences(username: String! preferencesText: String!): Preferences