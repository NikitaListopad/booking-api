const express = require('express');
const { port } = require('./config')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const ErrorHandler = require('./middlewares/error-handler');

app.use(bodyParser());
app.use(cors({
  credentials: true,
  origin: `${process.env.CLIENT_HOST}:${process.env.CLIENT_PORT}`
}));
app.use(cookieParser());

app.use('/api/users', require('./routes/userRoute'));
app.use('/api/todos', require('./routes/todoRoute'));
app.use('/api/auth', require('./routes/authRoute'));
app.use(ErrorHandler);

app.get('/', (req, res) => {
  res.send('Here we go')
})

app.listen(port, () => {
  console.log(`We are started port: ${port}`)
});