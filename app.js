import express from 'express';

const PORT = process.env.PORT ?? 5000;

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Here we go')
})


app.listen(PORT, () => {
  console.log(`We are started port: ${PORT}`)
});