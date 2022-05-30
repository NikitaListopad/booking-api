const express = require('express');
const { port } = require('./config')
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser());

app.use('/api/users', require('./routes/users'));

app.get('/', (req, res) => {
  res.send('Here we go')
})

app.listen(port, () => {
  console.log(`We are started port: ${port}`)
});