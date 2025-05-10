import express from 'express';
const app = express();

app.get('/movies', (req, res) => {
  res.send('Ola, mundo');
});

app.listen(3000);
