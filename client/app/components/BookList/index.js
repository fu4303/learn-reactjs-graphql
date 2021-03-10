import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import { getBooksQuery } from '../../queries/book';

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.books.map(({ id, name }) => (
    <Link key={id} to={`/book/edit/${id}`}>
      {name}
    </Link>
  ));
};

export default BookList;
