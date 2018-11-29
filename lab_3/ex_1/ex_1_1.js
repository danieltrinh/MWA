var http = require("http");
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello\n');
}).listen(8081);

const dns = require("dns");
const url = "www.mum.edu";

console.log("IP of " + url );
let res = dns.resolve4(url, (err,addresses) => {
    if (err) throw err;
    console.log('addresses: ' + JSON.stringify(addresses));
});
console.log("Finish")