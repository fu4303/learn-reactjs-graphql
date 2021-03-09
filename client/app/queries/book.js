import { gql } from '@apollo/client';

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const getBookQuery = gql`
  query GetBook($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        books {
          name
          id
        }
      }
    }
  }
`;

export { getBooksQuery, getBookQuery };
