const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
var cors = require('cors');

const port = 3000;

const api = require('./src/server/routes/api.js');

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/angular-body')));
console.log(__dirname);
// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist//angular-body/index.html'));
});

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.set('port', port);

app.use('/api', api);

app.listen(port, () => {
  console.dir('Server is running on port ' +  port);
});

