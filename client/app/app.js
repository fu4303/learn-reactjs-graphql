import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import BookList from './components/BookList';
import Book from './components/Book';
import AddBook from './components/AddBook';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
        <BookList />
        <Book />
        <AddBook />
      </div>
    </ApolloProvider>
  );
};

export default App;
