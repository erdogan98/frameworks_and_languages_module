const http = require('http');

const server = http.createServer((req,res)=> {
    if(req.url === '/') {
        res.write('HELLO!');
        res.end();
    }

    if(req.url === '/item/') {
        res.write(JSON.stringify['0'])
        res.end();
    }
})

server.listen(8000);

console.log('Listening on 8000... .. .');