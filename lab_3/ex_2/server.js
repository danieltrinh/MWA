const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  // using fs read file => load the entire file into memory
  fs.readFile('./big.file', (err, data) => {
    if (err) throw err;

    res.end(data);
  });

  //using fs createReadStream => read file in chunk => client receive data faster
  // const src = fs.createReadStream('./big.file');
  // src.pipe(res);
});

server.listen(8000);
