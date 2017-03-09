import { combineReducers } from 'redux';

import BooksReducer from './Books';
import ActiveBookReducer from './ActiveBook';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;