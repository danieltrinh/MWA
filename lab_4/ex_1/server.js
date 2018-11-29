const {Subject} = require('rxjs');
const http = require('http');
const {fork} = require('child_process');

const subject = new Subject();

function execute(reqres) {
    // test url http://localhost:1337/?url=testFile.txt
    console.log("request url" + reqres.req.url);
    const myURL = require('url').parse(reqres.req.url, true);
    const readFile = fork('readFile.js');
    readFile.send(myURL);
    readFile.on('message', data => {
        reqres.res.end(data);
    });
}

subject.subscribe(execute);

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    subject.next({req: req, res: res});

}).listen(1337);
