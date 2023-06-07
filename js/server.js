const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const app = express();

require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const connection = mysql.createConnection({
   host: 'localhost',
   user: 'maxence',
   password: 'password',
   database: 'db1'
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/table', (req, res) => {
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/register.html');
});

app.post('/register', (req, res) => {
//   const name = req.body.name;
  const name = "test";
  const email = req.body.email;
  const password = req.body.password;

  console.log(`User ${name} with email ${email} and password ${password} is trying to get registered!`);

  connection.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password], (err, result) => {
    if (err) {
      console.error(err);
      res.send('An error occurred while registering. Please try again later.');
      return;
    }
    res.send(`User ${name} has been registered!`);
  });
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, results) => {
    if (err) {
      console.error(err);
      res.send('An error occurred while logging in. Please try again later.');
      return;
    }

    if (results.length > 0) {
      res.send(`Welcome ${results[0].name}!`);
    } else {
      res.send('Incorrect email or password.');
    }
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});