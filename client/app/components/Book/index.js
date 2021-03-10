import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { getBookQuery } from '../../queries/book';

const Book = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: { id }
  });

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
