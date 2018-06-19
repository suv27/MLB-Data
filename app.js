// server.js
// load the things we need
const express = require('express');
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

const port = 8888;
const { Pool, Client } = require('pg');
const parser = require('body-parser');
app.use(parser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render(`home`, {

  })
});

//Another comment
app.get('/reminders', (req, res) => {
  res.render('reminder', {

  })
});

app.listen(port || process.env.PORT, (req, res) => {
  console.log(`Listening to port ${port}.....`);
});
