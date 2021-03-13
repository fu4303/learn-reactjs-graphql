import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import { addBookMutation } from '../../mutations/book';
import AuthorsDropdown from '../AuthorsDropdown';

const AddBook = () => {
  const history = useHistory();
  const [addBook] = useMutation(addBookMutation);

  const [book, setBook] = useState({
    name: '',
    genre: '',
    authorId: ''
  });

  const handleInputChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = (e) => {
    e.preventDefault();

    addBook({
      variables: {
        ...book
      }
    });

    history.push('/');
  };

  return (
    <div className="add-book-page">
      <h4>Add Book</h4>
      <form id="add-book" onSubmit={submitForm}>
        <div className="field">
          <label htmlFor="name">Book name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleInputChange}
            value={book.name}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            id="genre"
            name="genre"
            onChange={handleInputChange}
            value={book.genre}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="author">Author</label>
          <AuthorsDropdown onChange={handleInputChange} />
        </div>
        <div className="add-book-actions">
          <button className="add-book-btn">Add Book</button>
          <button className="add-book-btn" onClick={() => history.push('/')}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
