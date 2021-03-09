import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { addBookMutation } from '../../mutations/book';
import AuthorsDropdown from '../AuthorsDropdown';

const AddBook = () => {
  const [addBook, { data }] = useMutation(addBookMutation);

  const [book, setBook] = useState({
    name: '',
    genre: '',
    authorId: ''
  });

  console.log('book', 'book', book);

  const handleInputChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log('submit');

    addBook({
      variables: {
        ...book
      }
    });
  };

  return (
    <form id="add-book" onSubmit={submitForm}>
      <div className="field">
        <label htmlFor="name">Book name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleInputChange}
          value={book.name}
        />
      </div>
      <div className="field">
        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          id="genre"
          name="genre"
          onChange={handleInputChange}
          value={book.genre}
        />
      </div>
      <div className="field">
        <label htmlFor="author">Author:</label>
        <AuthorsDropdown onChange={handleInputChange} />
      </div>
      <button>Add Book</button>
    </form>
  );
};

export default AddBook;
