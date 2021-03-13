import React from 'react';
import { useQuery } from '@apollo/client';

import { getAuthorsQuery } from '../../queries/author';

const AuthorsDropdown = (props) => {
  const { loading, error, data } = useQuery(getAuthorsQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { authors } = data;

  const renderDropdown = () => {
    return authors.map(({ id, name }) => (
      <option key={id} value={id}>
        {name}
      </option>
    ));
  };

  return (
    <select id="author" onChange={props.onChange} name="authorId">
      <option>Select author</option>
      {renderDropdown()}
    </select>
  );
};

export default AuthorsDropdown;
