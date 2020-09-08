const express = require('express');
const pino = require('express-pino-logger')();
const bookCategories = require('./bookCategories');
const bookList = require('./books');

const app = express();
app.use(express.json());
app.use(pino);

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.use('/api/book-categories', bookCategories);
app.use('/api/book', bookList);

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);