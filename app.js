const express = require(`express`);
const app = express();
const port = 8000;
const {
  Pool,
  Client
} = require('pg');
const parser = require('body-parser');
app.use(parser.urlencoded({
  extended: true
}));
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

let table = {};

app.get('/', (req, res) => {
  res.render(`home`, {

  })
});

app.get('/standings', (req, res) => {
  res.render('standings', {

  })
});


app.get('/stats', (req1, res1) => {
  res1.render('stats', {

  })

});

app.get('/history', (req, res) => {
  pool.query('SELECT * FROM history', (req2, res2) => {

    tableObj = res2.rows;
    console.log(tableObj);

    res.render('history', {
      data: tableObj
    })
  })
})

app.post('/post', (req, res) => {

  var inserQuery = {
    text: 'INSERT INTO history(history) VALUES($1)',
    values: [req.body.search]
  }

  pool.query(inserQuery, (req, res) => {
    console.log('BOOOOOOM, inserted........');
  });

  pool.end;
})

app.get('*', (req, res) => {
  res.render('errorPath', {

  })
})

app.listen(port || process.env.PORT, (req, res) => {
  console.log(`Listening to port ${port}.....`);
});
