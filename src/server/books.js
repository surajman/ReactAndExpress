const express = require('express');
const booksDb = require('./db-book-category');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

router.get('/list', (req, res) => {
    const query = req.query.key;
    const filteredList = query ?
        booksDb.bookList.filter(x => String(x.name).toLowerCase().includes(query) || String(x.author).toLowerCase().includes(query) || String(x.edition).toLowerCase().includes(query) || String(x.category).toLowerCase().includes(query)) :
        booksDb.bookList;
    res.setHeader('Content-Type', 'application/json');
    res.send(filteredList);
})

router.post('/create', (req, res) => {
    const book = req.body;
    const id = uuidv4();
    booksDb.bookList.push({...book, id});
    res.setHeader('Content-Type', 'application/json');
    res.send({});
})

router.put('/update', (req, res) => {
    const book = req.body;
    booksDb.bookList.forEach((currBook, i) => {
        if(book.id === currBook.id) {
            booksDb.bookList[i] = book
        }
    });
    res.setHeader('Content-Type', 'application/json');
    res.send({});
})

module.exports = router;