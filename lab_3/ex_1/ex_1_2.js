var http = require("http");
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello\n');
}).listen(8081);

const dns = require("dns");
const url = "www.mum.edu";

console.log("IP of " + url );

function getAddress(err, address){
    return new Promise((resolve, reject) => {
        dns.resolve4(url, (err,addresses) => {
            if (err) {
                reject(url);
            }
            resolve(addresses);
        });
    })
}

getAddress()
    .then((addr) => console.log("address: "+ addr))
    .catch((error) => console.log("can't find IP for" + error));

console.log("Finished");


