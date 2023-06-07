const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');

require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.use('/register', registerRouter);
app.use('/login', loginRouter);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
