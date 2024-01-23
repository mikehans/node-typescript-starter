import http from 'http';

const port = 3003;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello world!');
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})