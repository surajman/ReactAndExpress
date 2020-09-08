const express = require('express');
const booksDb = require('./db-book-category');
// import bookCategories from './db-book-category';

const router = express.Router();

router.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(booksDb.bookCategories)
})

module.exports = router;

// export default router;