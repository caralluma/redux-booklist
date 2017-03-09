import React from 'react';
import PurpleAppBar from './../AppBar/PurpleAppBar';

import BookList from './../../containers/BookList/BookList';
import BookDetail from './../../containers/BookDetail/BookDetail';

const App = () => (
  <div>
    <PurpleAppBar />
    <BookList />
    <BookDetail />
  </div>
);

export default App;
