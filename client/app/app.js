import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { Router } from 'react-router-dom';

import history from './history';
import Routes from './routes';
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
      <Router history={history}>
        <div className="application">
          <main>
            <Routes />
          </main>
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;
