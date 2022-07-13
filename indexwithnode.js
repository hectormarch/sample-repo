/*const http= require('http');

const colors=require('colors');

const handleServer= function(req, res){
    res.writeHead(404, {'Content-type': 'text/plain'});
res.write('Pruebas sobre npm y package.json');
res.end();
}


const server= http.createServer(handleServer);

server.listen(3000, function (){
    console.log('Server on port 3000'.green);
})
*/


const express= require('express');

const server=express();

server.get('/', function(req, res){
    res.send('<h1>Estamos haciendo una especie de servidor con frameworks</h1>');
    res.end();
});



server.listen(3000, function(){
    console.log('Server on port 3000'.red)
});

const colors=require('colors');



