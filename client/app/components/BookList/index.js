import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import { getBooksQuery } from '../../queries/book';

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="books-page">
      <div className="add-book-link-block">
        <Link to="/book/add" className="btn-link">
          Add Book
        </Link>
      </div>
      <div className="books">
        {data.books.map(({ id, name }) => (
          <Link key={id} to={`/book/edit/${id}`} className="book-link">
            <h4 className="book-name">{name}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BookList;
