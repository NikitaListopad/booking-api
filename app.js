const express = require('express');
const { port } = require('./config')

const app = express();

console.log(port)

app.get('/', (req, res) => {
  res.status(200).send('Here we go')
})


app.listen(port, () => {
  console.log(`We are started port: ${port}`)
});