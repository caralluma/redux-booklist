import { combineReducers } from 'redux';
import BooksReducer from './Books';

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;