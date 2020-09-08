import { put, takeEvery, all } from 'redux-saga/effects';
import { fetchBookCategoriesSuccess, searchBooksSuccess, fetchBookCategoriesDetailSuccess } from '../actions';
import {
    FETCH_BOOK_CATEGORIES_REQUEST,
    SEARCH_BOOKS_REQUEST,
    FETCH_BOOK_CATEGORIES_DETAIL_REQUEST,
    FETCH_BOOKS_LOADING,
    CREATE_BOOK_LOADING,
    UPDATE_BOOK_LOADING,
} from '../actionTypes';
import { fetchBookCategories, searchBooks, fetchSelectedBookApi } from '../api/bookCategories';
import { fetchBooks, createBook, updateBook } from '../api/books.js';

import { fetchBooks as fetchBooksAction, fetchBooksError, fetchBooksSuccess, createBookSuccess, createBookError, updateBookError, updateBookSuccess } from '../actions/books'

export function* fetchBookList() {
    const res = yield fetchBookCategories();
    yield put(fetchBookCategoriesSuccess(res.categories));
}

export function* fetchSelectedBook(action) {
    const res = yield fetchSelectedBookApi(action.payload);
    yield put(fetchBookCategoriesDetailSuccess(res));
}

export function* searchBook(action) {
    const res = yield searchBooks(action.payload);
    yield put(searchBooksSuccess(res));
}

export function* watchfetchBookList() {
    yield takeEvery(FETCH_BOOK_CATEGORIES_REQUEST, fetchBookList);
}

export function* watchSearchBookList() {
    yield takeEvery(SEARCH_BOOKS_REQUEST, searchBook);
}

export function* watchFetchSelectedBook() {
    yield takeEvery(FETCH_BOOK_CATEGORIES_DETAIL_REQUEST, fetchSelectedBook);
}


/*
    Books saga starts here
*/

export function* fetchBooksSaga(action) {
    try {
        const res = yield fetchBooks(action.payload);
        yield put(fetchBooksSuccess(res));
    } catch (err) {
        put(fetchBooksError(err));
    }
}
export function* watchFetchBooks() {
    yield takeEvery(FETCH_BOOKS_LOADING, fetchBooksSaga);
}

export function* createBookSaga(action) {
    try {
        const res = yield createBook(action.payload);
        yield put(createBookSuccess(res));
        yield put(fetchBooksAction());
    } catch (err) {
        put(createBookError(err));
    }
}
export function* watchCreateBook() {
    yield takeEvery(CREATE_BOOK_LOADING, createBookSaga);
}

export function* updateBookSaga(action) {
    try {
        const res = yield updateBook(action.payload);
        yield put(updateBookSuccess(res));
        yield put(fetchBooksAction());
    } catch (err) {
        put(updateBookError(err));
    }
}
export function* watchUpdateBook() {
    yield takeEvery(UPDATE_BOOK_LOADING, updateBookSaga);
}


export default function* rootSaga() {
    yield all([
        watchfetchBookList(),
        watchSearchBookList(),
        watchFetchSelectedBook(),
        watchFetchBooks(),
        watchCreateBook(),
        watchUpdateBook(),
    ])
}