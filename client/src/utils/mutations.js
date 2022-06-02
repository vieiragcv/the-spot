<<<<<<< HEAD
import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($commentText: String!) {
    addComment(commentText: $commentText) {
      _id
      thoughtText
      createdAt
      username
    }
  }
`;

export const ADD_PREFERENCE = gql`
  mutation addPreference($tagText: String!) {
    addPreference(tagText: $tag) {
      _id
      tagText
      createdAt
      username
    }
  }
`;

export const REMOVE_PREFERENCE = gql`
  mutation removePreference($tagText: String!) {
    removePreference(tagText: $tagText) {
      _id
      tagText
      createdAt
      username
      }
    }
  }
`;
=======
import { gql } from '@apollo/client';

export const LOGIN_USER = gql `

  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`

  mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_OPEN_BIO = gql`
  mutation addOpenBio($username: String!, $openBio: String!) {
    addOpenBio(username: $username, openBio: $openBio) {
      openBio
    }
  }
`;

export const ADD_CLOSED_BIO = gql`
  mutation addClosedBio($username: String!, $openBio: String!) {
    addClosedBio(username: $username, closedBio: $closedBio) {
      closedBio
    }
  }
`;
>>>>>>> ed95d642511021660f54c763cca68cabbe6bf6ee
