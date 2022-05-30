import { gql } from '@apollo/client';

export const QUERY_MY_PROFILE = gql`
  {
    me {
      _id
      username
      descriptionText
      closedDescriptionText
    }
  }
`;