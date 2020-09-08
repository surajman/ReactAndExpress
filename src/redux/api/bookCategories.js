import axios from 'axios';

export function* fetchBookCategories() {
    return yield axios.get('/api/book-categories')
        .then(data => data.data)
        .catch(err => err);
    // return yield axios.get('http://www.omdbapi.com/?t=galaxy&apikey=9075f344')
    //     .then(data =>{
    //         return data.data;
    //     })
    //     .catch(err => err);
}

export function* searchBooks(searchText) {
    return yield axios.get('/api/book-categories')
        .then(data => data.data)
        .catch(err => err);
    // return yield axios.get(`http://www.omdbapi.com/?apikey=9075f344&s=${searchText}`)
    //     .then(data =>{
    //         return data.data;
    //     })
    //     .catch(err => err);
}

export function* fetchSelectedBookApi(id) {
    return yield axios.get(`http://www.omdbapi.com/?apikey=9075f344&i=${id}`)
        .then(data =>{
            return data.data;
        })
        .catch(err => err);
}
