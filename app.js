const express = require('express');
const { port } = require('./config')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

app.use(bodyParser());
app.use(cors());
app.use(cookieParser());

app.use('/api/users', require('./routes/userRoute'));
app.use('/api/todos', require('./routes/todoRoute'));
app.use('/api/auth', require('./routes/authRoute'));

app.get('/', (req, res) => {
  res.send('Here we go')
})

app.listen(port, () => {
  console.log(`We are started port: ${port}`)
});