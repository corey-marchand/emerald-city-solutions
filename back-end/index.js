const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());



app.get('/', (req, res) => {
  res.send('Welcome to my api');
});

app.get('/about', (req, res) => {
  res.send('Welcome to my about page');
});

app.get('/portfolio', (req, res) => {
  res.send('Welcome to my portfolio page');
});

app.get('/skills', (req, res) => {
  res.send('Welcome to my skills page');
});

app.get('/contact', (req, res) => {
  res.send('Welcome to my contact me page');
});


app.listen(port, () => {
  console.log('We are live on port 3000');
});

