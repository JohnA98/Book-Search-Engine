import { gql } from "@apollo/client";

export const GET_ME = gql`
  query MeQuery {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
