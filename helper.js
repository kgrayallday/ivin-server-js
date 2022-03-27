const Connection = require('database-js').Connection;

const connect = new Connection(//path to db);
const date = new Date()
const [day, month, year] = [date.getDate(), date.getMonth(), date.getFullYear()];

const allScans = connect.prepareStatement("SELECT * from scans WHERE date ");


