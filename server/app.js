const http = require('http');

const server = http.createServer((req,res)=> {
    if(req.url === '/') {
        res.write('HELLO!');
        res.end();
    }

    if(req.url === '/item/user_id') {
        res.write(JSON.stringify['user1234'])
        res.end();
    }
})

server.listen(8000);

console.log('Listening on 8000... .. .');