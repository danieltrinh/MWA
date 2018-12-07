var http = require("http");
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello\n');
}).listen(8081);

Array.prototype.even = function(){
    const result = this.filter((n) => n%2===0);
    process.nextTick(() => console.log(result));
    return result;
};

Array.prototype.odd = function(){
    const result = this.filter((n) => n%2!==0);
    process.nextTick(() => console.log(result));
    return result;
};

console.log('start');
[1,2,3,4,5,6,7,8].even();
[1,2,3,4,5,6,7,8].odd();
console.log('end');
