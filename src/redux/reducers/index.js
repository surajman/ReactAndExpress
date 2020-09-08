import { combineReducers } from 'redux';
import bookList from './bookList';
import books from './books';

export default combineReducers({ bookList, books });
