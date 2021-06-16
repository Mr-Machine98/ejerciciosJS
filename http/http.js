// this module makes that you can get up a server for your web apps
'use-strict';

//Version hola mundo de node
/*

const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

*/

//Import
const http = require('http');

http.createServer((req,res) => {
    res
        .writeHead(200,{'Content-Type': 'text/html'})
        .end('<h1> Hi Juan Camilo </h1>');

}).listen(3001,'localhost');

console.log('Servidor corriendo en  http://127.0.0.1:3001');

