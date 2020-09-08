import {
    FETCH_BOOK_CATEGORIES_REQUEST,
    FETCH_BOOK_CATEGORIES_LOADING,
    FETCH_BOOK_CATEGORIES_SUCCESS,
    FETCH_BOOK_CATEGORIES_FAILED,
    SEARCH_BOOKS_REQUEST,
    SEARCH_BOOKS_SUCCESS,
    FETCH_BOOK_CATEGORIES_DETAIL_REQUEST,
    FETCH_BOOK_CATEGORIES_DETAIL_SUCCESS,
    FETCH_BOOK_CATEGORIES_DETAIL_FAILED,
} from "./actionTypes";


export const fetchBookCategories = () => ({
  type: FETCH_BOOK_CATEGORIES_REQUEST,
});

export const fetchBookCategoriesLoading = () => ({
  type: FETCH_BOOK_CATEGORIES_LOADING,
});

export const fetchBookCategoriesSuccess = (data) => ({
    type: FETCH_BOOK_CATEGORIES_SUCCESS,
    payload: data,
});

export const fetchBookCategoriesError = (error) => ({
    type: FETCH_BOOK_CATEGORIES_FAILED,
    payload: error,
});

export const searchBooks = (searchValue) => ({
    type: SEARCH_BOOKS_REQUEST,
    payload: searchValue,
});

export const searchBooksSuccess = (data) => ({
    type: SEARCH_BOOKS_SUCCESS,
    payload: data,
});

export const fetchBookCategoriesDetail = (id) => ({
    type: FETCH_BOOK_CATEGORIES_DETAIL_REQUEST,
    payload: id,
});

export const fetchBookCategoriesDetailSuccess = (data) => ({
    type: FETCH_BOOK_CATEGORIES_DETAIL_SUCCESS,
    payload: data,
});

export const fetchBookCategoriesDetailError = (error) => ({
    type: FETCH_BOOK_CATEGORIES_DETAIL_FAILED,
    payload: error,
});
