const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

// Home - where you enter the ivin.app website
app.get('/', (req, res) => {
  res.send('Sup World?!');
  // will want to render home res.render('home');
});

// create login/admin dash
// app.get('admin', (req, res) => {
// res.render('admin');
// });
//
// TODO: how to connect the android application to the js server

app.listen(port, () => {
  console.log(`Ivin server is listening on port ${port}`)
})
