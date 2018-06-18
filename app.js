const express = require(`express`);
const app = express();
const port = 8888;
const { Pool, Client } = require('pg');
const parser = require('body-parser');
app.use(parser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render(`home`, {

  })
});

app.listen(port || process.env.PORT, (req, res) => {
  console.log(`Listening to port ${port}.....`);
});
