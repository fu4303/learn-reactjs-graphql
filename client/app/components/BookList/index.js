import React from 'react';
import { useQuery } from '@apollo/client';

import { getBooksQuery } from '../../queries/book';

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.books.map(({ id, name }) => (
    <div key={id}>
      <p>{name}</p>
    </div>
  ));
};

export default BookList;
