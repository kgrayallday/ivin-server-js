const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3333;

app.get('/', (req, res) => {
  res.send('Sup World?!')
});

app.listen(port, () => {
  console.log(`Ivin server is listening on port ${port}`)
})
