const express = require(`express`);
const app = express();
const port = 3000;
const { Pool, Client } = require('pg');
const parser = require('body-parser');
app.use(parser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '#BeastMode27',
    port: 5432,
});


app.get('/', (req, res) => {
  res.render(`home`, {

  })
});

app.get('/standings', (req, res) => {
  res. render('standings', {

  })
});


app.get('/reminders', (req, res) => {
  res.render('reminder', {

  })
});

app.listen(port || process.env.PORT, (req, res) => {
  console.log(`Listening to port ${port}.....`);
});
