const readFile = (path) => {
    try {
        let result = require('fs').readFileSync('./'+path, 'utf8');
        return result;
    } catch (e) {
        console.log("NO SUCH FILE");
        console.log(e);
    }
};

process.on('message', (url) => {
    console.log(url.query.url);
    if(url.query.url)
    {
        const src = readFile(url.query.url);
        process.send(src);
    }
});