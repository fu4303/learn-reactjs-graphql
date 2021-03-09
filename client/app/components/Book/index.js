import React from 'react';
import { useQuery, gql } from '@apollo/client';

import { getBookQuery } from '../../queries/book';

const Book = () => {
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: { id: '604ec89b2e2779e35e23a7be' }
  });

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (!data.book) {
    return <p>No book found!</p>;
  }

  const { book } = data;

  return (
    <div>
      <p>{book.name}</p>
      <p>{book.genre}</p>
      <p>All books by {book.author.name}</p>
      <ul>
        {book.author.books.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Book;
