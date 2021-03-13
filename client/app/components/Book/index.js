import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';

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
    <div className="book-page">
      <div className="back-link-block">
        <Link to="/" className="btn-link">
          Back
        </Link>
      </div>
      <div className="book">
        <p>{book.name}</p>
        <p>Genre: {book.genre}</p>
        <p>All books by {book.author.name}</p>
        <ul>
          {book.author.books.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Book;
