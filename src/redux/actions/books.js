import {
    FETCH_BOOKS_LOADING,
    FETCH_BOOKS_ERROR,
    FETCH_BOOKS_SUCCESS,
    CREATE_BOOK_LOADING,
    CREATE_BOOK_ERROR,
    CREATE_BOOK_SUCCESS,
    UPDATE_BOOK_LOADING,
    UPDATE_BOOK_SUCCESS,
    UPDATE_BOOK_ERROR
} from "../actionTypes";

export const fetchBooks = (data) => ({
    type: FETCH_BOOKS_LOADING,
    payload: data,
});

export const fetchBooksSuccess = (data) => ({
    type: FETCH_BOOKS_SUCCESS,
    payload: data,
});

export const fetchBooksError = (error) => ({
    type: FETCH_BOOKS_ERROR,
    payload: error,
});

export const createBook = (data) => ({
    type: CREATE_BOOK_LOADING,
    payload: data,
});

export const createBookSuccess = (data) => ({
    type: CREATE_BOOK_SUCCESS,
    payload: data,
});

export const createBookError = (error) => ({
    type: CREATE_BOOK_ERROR,
    payload: error,
});

export const updateBook = (data) => ({
    type: UPDATE_BOOK_LOADING,
    payload: data,
});

export const updateBookSuccess = (data) => ({
    type: UPDATE_BOOK_SUCCESS,
    payload: data,
});

export const updateBookError = (error) => ({
    type: UPDATE_BOOK_ERROR,
    payload: error,
});
