const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const ejs = require('ejs');
app.use('/public', express.static('public'));

app.set('view engine', 'ejs');
// Home - where you enter the ivin.app website
app.get('/', (req, res) => {
  // const data = something to access the mysqldb
  const templateVars = { variable: 'variable was passed' };
  return res.render('index', templateVars);
});

app.post('/dbi', (req, res) => {
  // req.body.the-data-sent-from-mobile
  res.send('Inserting into Database...');
});

// create login/admin dash
// app.get('admin', (req, res) => {
// res.render('admin');
// });
//
// TODO: how to connect the android application to the js server
// app.post('/dbi', (req, res) => {
//   if...
// )};
//
app.listen(port, () => {
  console.log(`Ivin server is listening on port ${port}`)
})
