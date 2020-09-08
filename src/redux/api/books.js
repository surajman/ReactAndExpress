import axios from 'axios';

export function* fetchBooks(key) {
    return yield axios.get('/api/book/list', {params: {key}})
        .then(data => data.data)
        .catch(err => err);
}

export function* createBook(book) {
    return yield axios.post('/api/book/create', {...book})
        .then(data => data.data)
        .catch(err => err);
}

export function* updateBook(book) {
    return yield axios.put('/api/book/update', {...book})
        .then(data => data.data)
        .catch(err => err);
}