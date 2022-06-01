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
