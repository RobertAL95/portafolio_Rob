const http = require('http');

const onResquest = (resquest, response) => {
    console.log('Peticion recibida');
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('');
    response.end();
};

const server = http.createServer(onResquest);

server.listen(8080);


console.log('servidor en funcionamiento');