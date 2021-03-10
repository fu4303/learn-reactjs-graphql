import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BookList from './components/BookList';
import Book from './components/Book';
import AddBook from './components/AddBook';
import NotFound from './components/NotFound';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <BookList />
    </Route>
    <Route exact path="/book/edit/:id">
      <Book />
    </Route>
    <Route exact path="/book/add">
      <AddBook />
    </Route>
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
);

export default Routes;
